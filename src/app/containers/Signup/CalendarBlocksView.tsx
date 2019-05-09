import * as React from 'react';
import classnames from 'classnames';
const Moment = require ('moment');
import dates from 'date-arithmetic'
import { extendMoment } from 'moment-range';
import chunk from 'lodash/chunk';
import { connect } from 'react-redux';
import { loadAppointments } from 'app/reducers/appointments';
import DateAvailability from "./DateAvailability";
import { Spin } from 'antd';

const moment = extendMoment(Moment);

const formatHour = hour => moment(hour, 'HH:mm').format(moment(hour, 'HH:mm').minute() !== 0 ? 'h:mma' : 'ha')

const Block = props => {

    const { status, selected, from, to, date, index, onClick } = props

    return <div className={classnames('block', status, { selected })} onClick={() => onClick(date, index)}>
        <h4>{formatHour(from)}-{formatHour(to)}</h4>
        <p>{status}</p>
    </div>
}

const Day = (props) => {

    const { selected, date, selectedBlock, blocks, onBlockClick } = props

    return <div className={classnames('day', { today: moment(date).isSame(new Date(), 'date') })}>
        <div className={classnames('date', { selected })} onClick={() => onBlockClick(date, selectedBlock || 0)}>
            <h4>{moment(date).format('ddd MM-DD-YY')}</h4>
            <p>{formatHour(blocks[0].from)}-{formatHour(blocks[blocks.length - 1].to)}</p>
        </div>
        <div className="blocks">
            {blocks.map((block, index) => <Block {...block} date={date} index={index} onClick={onBlockClick} selected={selectedBlock === index && selected} />)}
        </div>
    </div>
}

const Week = props => {
    return (<div className="week">{props.children}</div>)
}

export namespace CustomMonthView {
  export interface Props {
    date: Date;
    loadAppointments: Function;
    selectedDate: string;
    onBlockClick: Function;
    isMobile: boolean;
    availability: any;
    selectedBlock: string;
    navigate: Function;
    onView: Function;
    onNavigate: Function;
    selectedHour: number;
    onHourClick: Function;
    culture: string;
  }
}

class CustomMonthView extends React.Component<CustomMonthView.Props> {

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

    renderWeek = () => {

        const { selectedDate, onBlockClick, isMobile, availability, selectedBlock } = this.props

        return <Week>
            {availability.map(day => <Day
                key={day.date}
                date={day.date}
                blocks={day.blocks}
                selected={moment(day.date).isSame(selectedDate, 'day')}
                isMobile={isMobile}
                onBlockClick={onBlockClick}
                selectedBlock={selectedBlock}
            />)}
        </Week>
    }

    firstVisibleDay(date) {

        return dates.startOf(dates.startOf(date, 'week'), 'week')
    }

    lastVisibleDay(date) {

        return dates.endOf(date, 'week')
    }

    visibleDays(date) {

        let current = this.firstVisibleDay(date)
        const last = this.lastVisibleDay(date)
        const days = []

        while (dates.lte(current, last, 'day')) {
            days.push(current)
            current = dates.add(current, 1, 'day')
        }

        return days
    }

    onShowNextWeek = () => {

        this.props.onNavigate('NEXT', this.props.date)
    }

    onShowToday = () => {

        this.props.onNavigate('TODAY', this.props.date)
    }

    onShowPrevWeek = () => {

        this.props.onNavigate('PREV', this.props.date)
    }

    onSwitchToDaysView = () => {

        this.props.onView('days')
    }

    shouldPrevWeekBeDisabled() {

        const { date } = this.props
        const days = this.visibleDays(date)

        return !days.every(d => !moment(d).isSame(new Date(), 'day'))
    }

    navigate = (date, action) => {
      switch (action) {
          case 'PREV':
              return dates.add(date, -1, 'week')

          case 'NEXT':
              return dates.add(date, 1, 'week')

          default:
              return date
      }
  }

    render() {

        const { date, selectedBlock, selectedHour, selectedDate, onBlockClick, onHourClick } = this.props
        const month = this.visibleDays(date);
        const weeks = chunk(month, 7)

        return <Spin spinning={this.state.loading}>
            <div className="blocks-view">
                <div className="calendar">
                    <div className="header">
                        <h4>
                            {moment(weeks[0][0]).format('MMMM')} {moment(weeks[0][0]).format('DD')}-{moment(weeks[0][weeks[0].length - 1]).format('DD')}
                        </h4>
                        <button className="switch-view" onClick={this.onSwitchToDaysView}>calendar</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomMonthView)
