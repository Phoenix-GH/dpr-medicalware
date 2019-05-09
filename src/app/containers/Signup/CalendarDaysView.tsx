
import * as React from 'react'
import classnames from 'classnames'
import * as Moment from 'moment'
import dates from 'date-arithmetic'
import { extendMoment } from 'moment-range';
import chunk from 'lodash/chunk'
import { connect } from 'react-redux'
import { loadAppointments } from 'app/reducers/appointments'
import DateAvailability from "./DateAvailability";
import { Spin } from 'antd'

const moment = extendMoment(Moment);

const status = {
    BUSY: 'busy',
    SLIGHTLY_BUSY: 'slightly-busy',
    FREE: 'free',
}

const weights = {
    [status.BUSY]: 2,
    [status.SLIGHTLY_BUSY]: 1,
    [status.FREE]: 0,
}

const list = [status.FREE, status.SLIGHTLY_BUSY, status.BUSY]

const Day = (props) => {

    const { selected, date, blocks, onBlockClick, selectedBlock } = props
    const { 0: firstBlock, [blocks.length - 1]: lastBlock } = blocks
    const formatHour = hour => moment(hour, 'HH:mm').format('ha')
    const status = list[Math.floor(blocks.reduce((acc, block) => weights[block.status] + acc, 0) / 3)]

    return <div className={classnames('day', { selected, today: moment(date).isSame(new Date(), 'day') }, status)} onClick={() => onBlockClick(date, selectedBlock || 0)}>
        <p className="name">{moment(date).format('ddd')}</p>
        <h4>{moment(date).format('DD')}</h4>
        <p className="blocks">{formatHour(firstBlock.from)} - {formatHour(lastBlock.to)}</p>
    </div>
}

const Week = props => {
    return <div className="week">{props.children}</div>
}

export namespace CustomDaysView {
  export interface Props {
    date: Date;
    loadAppointments: Function;
    selectedDate: string;
    onBlockClick: Function;
    isMobile: boolean;
    selectedBlock: string;
    onView: Function;
    onNavigate: Function;
    availability: any;
    selectedHour: number;
    onHourClick: Function;
  }
}

class CustomDaysView extends React.Component<CustomDaysView.Props> {
    state = {
        loading: true,
    }

    async componentDidMount() {

        await this.load()
    }

    async componentDidUpdate(prevProps) {

        if (prevProps.date !== this.props.date) {

            await this.load()
        }
    }

    async load() {

        const { date } = this.props

        this.setState({ loading: true })
        const days = this.visibleDays(date)
        await this.props.loadAppointments('sarasa', days)
        this.setState({ loading: false })
    }

    renderWeek = (week) => {

        const { selectedDate, onBlockClick, isMobile, selectedBlock, date } = this.props

        return <Week>
            {week.map(day => <Day
                key={day.date}
                date={day.date}
                blocks={day.blocks}
                selected={moment(day.date).isSame(selectedDate, 'day')}
                isMobile={isMobile}
                onBlockClick={onBlockClick}
                selectedBlock={selectedBlock}
                today={date}
            />)}
        </Week>
    }

    firstVisibleDay(date) {

        const firstOfMonth = dates.startOf(date, 'week')
        return dates.startOf(firstOfMonth, 'week')
    }

    lastVisibleDay(date) {

        const nextWeek = dates.add(date, 1, 'week')
        return dates.endOf(nextWeek, 'week')
    }

    visibleDays(date) {
        let current = this.firstVisibleDay(date);
        const last = this.lastVisibleDay(date);
        const days = []

        while (dates.lte(current, last, 'day')) {
            days.push(current)
            current = dates.add(current, 1, 'day')
        }

        return days
    }

    onSwitchToBlocksView = () => {

        this.props.onView('blocks')
    }

    onShowPrevWeek = () => {

        this.props.onNavigate('PREV', this.props.date)
    }

    onShowNextWeek = () => {

        this.props.onNavigate('NEXT', this.props.date)
    }

    onShowToday = () => {

        this.props.onNavigate('TODAY', this.props.date)
    }

    shouldPrevWeekBeDisabled() {

        const { date } = this.props
        const days = this.visibleDays(date)

        return !days.every(d => !moment(d).isSame(new Date(), 'day'))
    }

    onNavigate = (date, action) => {
      switch (action) {
          case 'PREV':
              return dates.add(date, -2, 'week')

          case 'NEXT':
              return dates.add(date, 2, 'week')

          default:
              return date
      }
    }
    render() {

        const { date, selectedBlock, availability, selectedHour, selectedDate, onBlockClick, onHourClick } = this.props

        const days = this.visibleDays(date)
        const { 0: firstDay, [days.length - 1]: lastDay } = days
        const weeks = chunk(availability, 7)

        return <Spin spinning={this.state.loading}>
            <div className="days-view">
                <div className="calendar">
                    <div className="header">
                        <h4>
                            {moment(firstDay).format('MMMM')} {moment(firstDay).format('DD')}-{moment(lastDay).format('DD')}
                        </h4>
                        <button className="switch-view" onClick={this.onSwitchToBlocksView}>calendar</button>
                    </div>
                    <div className="weeks">
                        {weeks.map(this.renderWeek)}
                    </div>
                    <div className="controls">
                        <button onClick={this.onShowToday}>Today</button>
                        <button onClick={this.onShowNextWeek}>Next week</button>
                        {!this.shouldPrevWeekBeDisabled() &&
                            <button onClick={this.onShowPrevWeek}>Previous week</button>
                        }
                    </div>
                </div>
                <DateAvailability
                    selectedDate={selectedDate}
                    selectedBlock={selectedBlock}
                    selectedHour={selectedHour}
                    onBlockClick={onBlockClick}
                    onHourClick={onHourClick}
                    onShowPrevWeek={this.onShowPrevWeek}
                    shouldPrevWeekBeDisabled={this.shouldPrevWeekBeDisabled()}
                />
            </div>
        </Spin>
    }
}


const mapStateToProps = state => ({
    isMobile: state.viewport.isMobile,
    availability: state.appointments.availability,
})

const mapDispatchToProps = {
    loadAppointments
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDaysView)
