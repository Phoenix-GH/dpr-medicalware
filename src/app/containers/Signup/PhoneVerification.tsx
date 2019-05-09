import * as React from 'react'
import { connect } from 'react-redux'
import { phoneVerification, resendPhoneVerification, changePhone } from 'app/reducers/signup'
import { Field, reduxForm } from 'redux-form'
import { validations, renderTextField } from 'app/components/common/forms'
import classnames from 'classnames'
import { Spin } from 'antd';
import { VERIFICATION_STATUS } from 'app/reducers/signup'

let CodeVerificationFormComponent = props => {

    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className="cw-signup-form">
            <Field
                name="code"
                type="text"
                label="Enter code"
                component={renderTextField as any}
                validate={[validations.required]}
                maxlength="4"
            />
            <button>Verify</button>
        </form>
    )
}

const CodeVerificationForm = reduxForm({ form: 'phone-verification' })(CodeVerificationFormComponent)

let ChangePhoneFormComponent = props => {

    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className="cw-signup-form change-phone">
            <Field
                name="phone"
                type="text"
                label="Enter phone number"
                component={renderTextField as any}
                validate={[validations.required, validations.phone]}
            />
            <button>Send</button>
        </form>
    )
}

const ChangePhoneForm = reduxForm({ form: 'change-phone' })(ChangePhoneFormComponent)

export namespace PhoneVerification {
  export interface Props {
    phone?: string;
    status?: string;
    message?: string;
    phoneVerification?: Function;
    resendPhoneVerification?: Function;
    changePhone?: Function;
  }
}

class PhoneVerification extends React.Component<PhoneVerification.Props> {

    state = { loading: false }

    verify = async (values) => {

        this.setState({ loading: true })
        await this.props.phoneVerification(this.props.phone, values.code)
        this.setState({ loading: false })
    }

    resend = async (e) => {

        e.preventDefault()

        this.setState({ loading: true })
        await this.props.resendPhoneVerification(this.props.phone)
        this.setState({ loading: false })
    }

    changePhone = async (values) => {

        this.setState({ loading: true })
        await this.props.changePhone(values.phone)
        this.setState({ loading: false })
    }

    renderContent(status) {

        if (this.state.loading === true) {

            return null
        }

        if (status === VERIFICATION_STATUS.SUCCESS) {

            return <div className="content">
                <div className="text">
                    <div>Thank you! Your phone number  has been successfully verified.</div>
                </div>
            </div>
        }

        if (status === VERIFICATION_STATUS.INVALID_CODE) {

            return <div className="content">
                <div className="text">
                    <div>The verification code is invalid or has expired.</div>
                    <b>Please try again or <a onClick={this.resend}>request a new code</a></b>
                </div>
                <CodeVerificationForm onSubmit={this.verify} />
            </div>
        }

        if (status === VERIFICATION_STATUS.PENDING) {

            return <div className="content">
                <div className="text">
                    <div>Verify your phone number by using the verification code sent to your phone</div>
                    <b>Didn't receive a code? <a onClick={this.resend}>request a new code</a></b>
                </div>
                <CodeVerificationForm onSubmit={this.verify} />
            </div>
        }

        if (status === VERIFICATION_STATUS.ALREADY_REGISTERED) {

            return <div className="content">
                <div className="text">
                    <div>The number you have entered is already registered</div>
                    <b>Please register another phone number (such as a family member)</b>
                </div>
                <ChangePhoneForm onSubmit={this.changePhone} />
            </div>
        }

        return <div className="content">
            <div className="text">
                <div>{this.props.message}</div>
            </div>
        </div>
    }

    render() {

        const { status } = this.props
        const error = status === VERIFICATION_STATUS.INVALID_CODE || status === VERIFICATION_STATUS.UNKNOWN_ERROR
        const success = status === VERIFICATION_STATUS.SUCCESS

        if (status === VERIFICATION_STATUS.VERIFIED || status === null) {
            return null
        }

        return <div className={classnames('phone-verification', { error, success })}>
            <Spin spinning={this.state.loading}>
                {this.renderContent(status)}
            </Spin>
        </div>
    }
}

const mapStateToProps = state => ({
    phone: state.signUp.steps.step1.phone,
    status: state.signUp.steps.phone.status,
})

const mapDispatchToProps = {
    phoneVerification,
    resendPhoneVerification,
    changePhone
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneVerification)
