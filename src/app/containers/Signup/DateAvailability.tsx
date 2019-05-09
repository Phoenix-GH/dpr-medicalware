import * as React from 'react'
import * as moment from 'moment'
import { connect } from 'react-redux'
import classnames from 'classnames'
import SchedulingRequest from './SchedulingRequest'

const formatHour = hour => moment(hour, 'HH:mm').format('h:mma')

const Block = props => {

    const { block, selected, onClick, date, index } = props

    return <div className={classnames('block', { selected })} onClick={() => onClick(date, index)}>
        {formatHour(block.from)}-{formatHour(block.to)}
    </div>
}

const Hour = props => {

    const { status, hour, onClick, selected } = props

    return <div className={classnames('hour', status, { selected })} onClick={() => onClick(hour)}>
        <h4>{formatHour(hour)}</h4>
        <p>{status}</p>
    </div>
}

export namespace DateAvailability {
  export interface Props {
    selectedDate: string;
    onBlockClick: Function;
    selectedBlock: string;
    availability: any;
    selectedHour: number;
    onHourClick: Function;
    shouldPrevWeekBeDisabled: boolean;
    onShowPrevWeek: Function;
    phone: string;
  }
}

class DateAvailability extends React.Component<DateAvailability.Props> {
    public static defaultProps = {
      availability: null,
      phone: '',
    }
    state = {
      date: new Date(),
      schedulingRequestVisible: false
    }

    onSchedulingRequestOpen = () => {

        this.setState({ schedulingRequestVisible: true })
    }

    onSchedulingRequestClose = () => {

        this.setState({ schedulingRequestVisible: false })
    }

    render() {

        const { availability, selectedBlock, selectedDate, selectedHour, onBlockClick, onHourClick } = this.props

        if (availability === undefined) {

            return null
        }

        const { blocks } = availability;

        return <div className="date-availability">
            <div className="header">{moment(this.props.selectedDate).format('dddd MMMM DD, YYYY')}</div>
            <div className="blocks">
                {blocks.map((block, index) => <Block
                    key={`${selectedDate}-${index}`}
                    block={block}
                    date={selectedDate}
                    index={index}
                    selected={index === selectedBlock}
                    onClick={onBlockClick}
                />)}
            </div>
            <div className="hours">
                {selectedBlock !== undefined &&
                    blocks[selectedBlock].appointments.map((a) => <Hour
                        key={a.hour}
                        hour={a.hour}
                        status={a.status}
                        onClick={onHourClick}
                        selected={selectedHour === a.hour}
                    />)
                }
            </div>
            <div className="controls">
                <button onClick={this.onSchedulingRequestOpen}>The time I want is not available</button>
            </div>
            <SchedulingRequest
                visible={this.state.schedulingRequestVisible}
                onClose={this.onSchedulingRequestClose}
                initialValues={{ date: moment(this.state.date).format('MM/DD/YY'), hour: '07:30', location: '2', phone: this.props.phone }}
            />
        </div>
    }
}

const mapStateToProps = (state, props) => ({
    isMobile: state.viewport.isMobile,
    availability: state.appointments.availability.find(a => a.date === props.selectedDate),
    phone: state.signUp.steps.step1.phone,
})

export default connect(mapStateToProps)(DateAvailability)
