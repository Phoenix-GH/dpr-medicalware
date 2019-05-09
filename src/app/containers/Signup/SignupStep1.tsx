import * as React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as signUpActions from 'app/reducers/signup'
import { validations, renderTextField, renderRadioButton, renderSelect } from 'app/components/common/forms';
import lodash from 'lodash'
const vaccineIcon = require('app/assets/images/vaccine.png');
const calendarIcon = require('app/assets/images/calendar.png');
const moneyIcon = require('app/assets/images/money.png');
import { Popover } from 'antd';
import { Spin } from 'antd'

const Item = props => {

    const { src, children } = props

    return <div className="item">
        <img src={src} />
        <p>{children}</p>
    </div>
}

const content = (
    <div className="info-popover">
        <h5>Fully Refundable Deposit</h5>
        <ul>
            <li><span>Cancel your appointment at least 24 hours prior to scheduled time</span></li>
            <li><span>If you show up to your appointment and decide not to enroll</span></li>
        </ul>
    </div>
)

let FormComponent = props => {
    const { handleSubmit, onChange, saving } = props

    return (
        <form className="cw-signup-form" onSubmit={handleSubmit}>

            <Spin spinning={saving} wrapperClassName="pdr-spin">
                <div className="name">
                    <Field
                        name="honorific"
                        className="honorific"
                        component={renderSelect as any}
                    >
                        {[{ text: 'Mr.', value: 'Mr.' }, { text: 'Ms.', value: 'Ms.' }].map(option => <option key={option.text} value={option.text}>{option.text}</option>)}
                    </Field>

                    <Field
                        name="firstName"
                        className="first-name"
                        type="text"
                        component={renderTextField as any}
                        label="First Name*"
                        validate={[validations.required]}
                        onChange={onChange}
                    />

                    <Field
                        name="middleName"
                        type="text"
                        component={renderTextField as any}
                        label="Middle Name"
                        onChange={onChange}
                    />

                    <Field
                        name="lastName"
                        type="text"
                        component={renderTextField as any}
                        label="Last Name*"
                        validate={[validations.required]}
                    />
                </div>

                <h2>Phone Number and Email</h2>
                <p>In order to secure your information and provide you with reminders and status updates we require a verified number and email address.</p>

                <div className="phone-and-email-wrapper">

                    <div className="phone-wrapper">
                        <Field
                            name="phone"
                            type="text"
                            component={renderTextField as any}
                            label="Mobile Number*"
                            validate={[validations.required, /*validations.phone*/]}
                        />
                    </div>

                    <div className="email-wrapper">
                        <Field
                            name="email"
                            type="email"
                            component={renderTextField as any}
                            label="Email*"
                            validate={[validations.required, validations.email]}
                        />
                    </div>
                </div>

                <h2>Preferred Contact Method</h2>
                <p>This is how Persona Doctors will communicate with you moving forward</p>

                <Field
                    className="communicate"
                    name="communicate"
                    component={renderRadioButton as any}
                    options={{
                        text: 'Text',
                        call: 'Call',
                        email: 'Email',
                    }}
                />

            </Spin>
            <p className="disclaimer">You will receive a text message with a verification code from Persona Doctors. By registering you consent to receive text messages sent through our automated texting system. Message and data rates may apply.</p>

            <div className="actions">
                <button className="confirm" type="submit" disabled={saving}>Next</button>
            </div>
        </form >
    )
}

const Form = reduxForm({ form: 'signup' })(FormComponent) as any;

export namespace SignupStep1 {
  export interface Props {
    step?: number;
    save?: Function;
    changePhone?: Function;
    saveProgress?: Function;
    selectStep?: Function;
    initialValues?: any;
  }
}

class SignupStep1 extends React.Component<SignupStep1.Props> {

    state = { saving: false }

    throttledUpdate = () => {
      lodash.debounce(this.onChange, 1000);
    }
    submit = async values => {

        await this.setState({ saving: true })
        await this.props.save(values)
        await this.props.changePhone(values.phone)
        await this.props.saveProgress({ step: this.props.step + 1 })
        await this.setState({ saving: false })
    }

    onChange = (values) => {

        this.props.save(values)
    }

    render() {

      return (
        <React.Fragment>
            <div className="includes">
                <h3>Your online signup includes:</h3>
                <p>Reserve your appointment with a <b>fully refundable $50 deposit</b> that is applied to your first payment or refunded if you don't enroll.</p>
                <Popover content={content} trigger="click">
                    <a href="#" className="learn-more">Learn More</a>
                </Popover>
                <div className="items">
                    <Item src={vaccineIcon}>Free metabolic B12 shot <br /> ($100 value)</Item>
                    <Item src={calendarIcon}>Priority Appointment Slotting</Item>
                    <Item src={moneyIcon}>100% Money Back Guarantee</Item>
                </div>
            </div>
            <div className="step">
                <h2>Your Name</h2>
                <Form
                  onSubmit={this.submit}
                  onChange={this.throttledUpdate}
                  saving={this.state.saving}
                  initialValues={{ ...this.props.initialValues }}
                />
            </div>
        </React.Fragment>
      )
    }
}

const mapStateToProps = state => ({
    saving: state.signUp.saving,
    step: state.signUp.selectedStep,
    initialValues: state.signUp.steps.step1
})

const mapDispatchToProps = {
    save: signUpActions.step1Save,
    saveProgress: signUpActions.saveProgress,
    changePhone: signUpActions.changePhone,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep1);
