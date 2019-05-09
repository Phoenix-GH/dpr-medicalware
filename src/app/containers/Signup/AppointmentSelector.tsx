import * as React from 'react';
import { connect } from 'react-redux'
var moment = require('moment');
import Calendar from './Calendar';

export namespace AppointmentSelector {
  export interface Props {
    onChange: Function;
    location: string;
    initialValues: any;
    appointmentsLoading?: boolean;
  }
  export interface States {
    date: Date;
    block: string;
    hour: number;
    popoverVisible: boolean;
    schedulingRequestVisible: boolean;
  }
}

class AppointmentSelector extends React.Component<AppointmentSelector.Props, AppointmentSelector.States> {

    constructor(props) {
        super(props)
        const { date, block, hour } = props.initialValues
        this.state = { date: date || moment().toDate(), block, hour, popoverVisible: false, schedulingRequestVisible: false }
    }

    componentDidUpdate(prevProps, prevState) {
      if (!moment(this.state.date).isSame(prevState.date, 'date') || prevState.block !== this.state.block || prevState.hour !== this.state.hour) {
          this.props.onChange(this.state.date, this.state.block, this.state.hour)
      }
    }

    onPopoverCloseClick = () => {
        this.setState({ popoverVisible: false })
    }

    onPopoverSelectClick = () => {
        this.setState({ popoverVisible: false })
    }

    onNextDayClick = () => {
        this.setState({ date: moment(this.state.date).add(1, 'day') })
    }

    onPrevDayClick = () => {
        this.setState({ date: moment(this.state.date).subtract(1, 'day') })
    }

    onBlockClick = (date, index) => {
        this.setState({ date, block: index })
    }

    onHourClick = (hour) => {
        this.setState({ hour })
    }

    render() {
      return (
        <div className="appointments-selector">
            <h2>Select Appointment Date</h2>
            {this.props.appointmentsLoading &&
                <div>Loading appointments...</div>
            }

            {!this.props.appointmentsLoading &&
                <React.Fragment>
                    <Calendar
                        defaultDate={this.state.date}
                        selectedDate={this.state.date}
                        selectedBlock={this.state.block}
                        selectedHour={this.state.hour}
                        onBlockClick={this.onBlockClick}
                        onHourClick={this.onHourClick}
                    />

                    {!this.state.popoverVisible && this.state.date !== null && this.state.hour !== null &&
                        <div className="selected-info">
                            <b>Your appointment date is:</b> {moment(this.state.date).format('dddd MM/DD/YY')} at {moment(this.state.hour, 'hh:mm').format('h:mm a')}
                        </div>
                    }
                </React.Fragment>
            }
        </div>
      )
    }
}

const mapStateToProps = state => ({
    phone: state.signUp.steps.step1.phone,
    isMobile: state.viewport.isMobile,
})

export default connect(mapStateToProps)(AppointmentSelector)
