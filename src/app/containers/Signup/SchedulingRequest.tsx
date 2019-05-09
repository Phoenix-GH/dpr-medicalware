import * as React from 'react';
//import appSettings from 'app/config/appSettings';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as signUpActions from 'app/reducers/signup'
import * as Moment from 'moment'

//import Calendar from './Calendar'
//const closeIcon = require('app/assets/images/close.png');
import { validations, renderTextField, renderSelect, renderDatePicker } from 'app/components/common/forms'
import { Modal, Spin } from 'antd'

import { extendMoment } from 'moment-range';
const flowerIcon = require('app/assets/images/flower.png');

const moment = extendMoment(Moment)


const hours = () => {

    const initial = moment('07:00', 'hh:mm')

    return Array.from({ length: 21 }, (x, i) => {

        const hour = initial.add(30, `minutes`)

        return <option key={i} value={hour.format('hh:mm')}>{hour.format('h:mm a')}</option>
    })
}

let FormComponent = props => {

    const { handleSubmit, locations, isMobile } = props

    return (
      <form className="cw-signup-form" onSubmit={handleSubmit}>
          <div className="date-time">
              <Field
                  name="date"
                  component={renderDatePicker as any}
                  isMobile={isMobile}
                  label="Select the day"
                  validate={[validations.required]}
              />

              <Field
                  name="hour"
                  component={renderSelect as any}
                  label="Select the time"
                  validate={[validations.required]}
              >
                  {hours()}
              </Field>
          </div>

          <Field
              name="location"
              className="location"
              component={renderSelect as any}
              validate={[validations.required]}
          >
              {locations.map(location => <option key={location.id} value={location.id}>{location.name}</option>)}
          </Field>

          <Field
              name="phone"
              label="Mobile Number"
              className="number"
              placeholder="Mobile Number"
              component={renderTextField as any}
              validate={[validations.required]}
          />

          <div className="actions">
              <button type="submit">Submit request</button>
          </div>
      </form>
  )
}

FormComponent = connect(state => ({ isMobile: state.viewport.isMobile }))(FormComponent)
const Form = reduxForm({ form: 'scheduling-request' })(FormComponent) as any;

export namespace SchedulingRequest {
  export interface Props {
    visible: boolean;
    initialValues:any;
    save?: Function;
    onClose: Function;
    onSubmit?: Function;
    locations?: Array<any>;
    appointments?: Array<any>;
  }
}

class SchedulingRequest extends React.Component<SchedulingRequest.Props> {

  state = { scheduled: false, loading: false }

  submit = async (values) => {

      this.setState({ loading: true })
      await this.props.save(values)
      this.setState({ loading: false, scheduled: true })
    }

    onClose = () => {
      this.props.onClose()
      this.setState({ scheduled: false, loading: false })
    }

    renderContent() {

      if (this.state.scheduled) {
          return (<div className="thank-you">
              <img src={flowerIcon} />
              <h2>Thank you</h2>
              <p><b>Thank you for submitting your request.</b></p>
              <p>A Persona Doctors staff member will get in touch with you shortly.</p>
              <div className="actions">
                  <button onClick={this.onClose}>Close</button>
              </div>
          </div>)
      }

      const days = Array.from(moment.range(moment(), moment().add(30, 'day')).by('day'))

      return (<div className="schedule">
          <h2>Scheduling Request</h2>
          <p>Persona Doctors staff will get in touch with you to try to accomodate your scheduling request. <b>What is your preferred day and time?</b></p>
          <Form
            onSubmit={this.submit}
            initialValues={this.props.initialValues}
            days={days}
            locations={this.props.locations}
            appointments={this.props.appointments}
          />
        </div>
      )
    }

    render() {

      return (<Modal visible={this.props.visible} footer={null} bodyStyle={{ padding: 0 }} onCancel={this.onClose} style={{ maxWidth: 680, width: '80%' }} wrapClassName="vertical-center-modal">
          <div className="scheduling-request step">
              <Spin spinning={this.state.loading}>
                  {this.renderContent()}
              </Spin>
          </div>
      </Modal>
      )
    }
}

const mapStateToProps = state => ({
    locations: state.appointments.locations,
})

const mapDispatchToProps = {
    save: signUpActions.saveSchedulingRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulingRequest)
