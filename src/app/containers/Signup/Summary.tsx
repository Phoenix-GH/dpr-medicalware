import * as React from 'react'
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as moment from 'moment';

const patientIcon = require('app/assets/images/summary/patient.png');
const pinIcon = require('app/assets/images/summary/pin.png');
const calendarIcon = require('app/assets/images/summary/calendar.png');

const formatHour = hour => moment(hour, 'HH:mm').format(moment(hour, 'HH:mm').minute() !== 0 ? 'h:mma' : 'ha')

const Item = ({ children, icon, title }) => {

    return <div className={classnames('item')}>
        <div className="icon">
            <img src={icon} />
        </div>
        <div className="cont">
            <h4>{title}</h4>
            {children}
        </div>
    </div>
}

export namespace Summary {
  export interface Props {
    step?: number;
    step1?: any;
    step2?: any;
    step3?: any;
    location?: any;
    appointment?: any;
  }
}

class Summary extends React.Component<Summary.Props> {

    render() {

        const { step, step1, step2, step3, location, appointment } = this.props

        if (step < 1) {

            return null
        }

        return <div className="summary">
            <div className="content">
                <h3>Enrollment Summary</h3>
                <div className="items">
                    <Item title="Patient" icon={patientIcon}>
                        <h5>{step1.firstName} {step1.lastName}</h5>
                        <h6>{step3.email}</h6>
                        <h6>{step1.phone}</h6>
                    </Item>
                    {location &&
                        <Item title="Location" icon={pinIcon}>
                            <p>{location.name}</p>
                        </Item>
                    }
                    {step2.date && appointment &&
                        <Item title="Date &amp; Time" icon={calendarIcon}>
                            <h5>{moment(step2.date).format('dddd')}</h5>
                            <h6>{moment(step2.date).format('MMMM DD/YY')}</h6>
                            <h6>at {formatHour(step2.hour)}</h6>
                        </Item>
                    }
                </div>
                <div className="breakdown">
                    <h4>Summary</h4>

                    <h5>Metabolic B12 Injection</h5>
                    <h6>Free gift ($100 value)</h6>
                    <h6><b>$0.00</b></h6>

                    <h5>Reservation Deposit</h5>
                    <h6>Refunded if you don't enroll</h6>
                    <h6><b>$50.00</b></h6>
                    <div className="total">
                        Total:<br />$50.00
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    step: state.signUp.progress.step,
    step1: state.signUp.steps.step1,
    step2: state.signUp.steps.step2,
    step3: state.signUp.steps.step3,
    location: state.appointments.locations.find(location => location.id === state.signUp.steps.step2.location),
    appointment: state.appointments.list ? state.appointments.list.find(appointment => appointment.id === state.signUp.steps.step2.appointment) : {},
})

export default connect(mapStateToProps)(Summary)
