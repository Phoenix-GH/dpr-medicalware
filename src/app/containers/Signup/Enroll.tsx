import * as React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as signUpActions from 'app/reducers/signup';
import * as userActions from 'app/reducers/users';
import { validations, renderTextField } from 'app/components/common/forms';
import { facebookEnrollMent, googleEnrollMent } from 'app/reducers/users';
import { Spin } from 'antd';
import { VERIFICATION_STATUS } from 'app/reducers/signup';

let EmailFormComponent = props => {

    const { handleSubmit } = props;

    return <form onSubmit={handleSubmit} className="cw-signup-form">
        <Field
            className="name"
            name="name"
            type="text"
            label="Name"
            component={renderTextField as any}
            validate={[validations.required]}
        />

        <Field
            className="email"
            name="email"
            type="text"
            label="Email"
            component={renderTextField as any}
            validate={[validations.required, validations.email]}
        />

        <Field
            className="password"
            name="password"
            type="password"
            label="Type password"
            component={renderTextField as any}
            validate={[validations.required]}
        />

        <Field
            className="password-verify"
            name="password-verify"
            type="password"
            label="Repeat password"
            component={renderTextField as any}
            validate={[validations.required, validations.passwordVerify]}
        />

        <div className="actions">
            <button className="confirm">Submit</button>
        </div>
    </form>
}

const EmailForm = reduxForm({ form: 'enroll-email' })(EmailFormComponent)

let PhoneFormComponent = props => {

    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit} className="cw-signup-form">
            <Field
                name="phone"
                type="text"
                label="Enter Number"
                component={renderTextField as any}
                validate={[validations.required, validations.phone]}
            />
            <button className="primary">Submit</button>
        </form>
    )
}
const PhoneForm = reduxForm({ form: 'enroll-change-phone' })(PhoneFormComponent)

export namespace Enroll {
  export interface Props {
    step1?: any;
    status?: string;
    email?: string;
    name?: string;
    user?: any;
    changePhone?: Function;
  }
  export interface States {
    location: any;
    loadinng: boolean;
  }
}

class Enroll extends React.Component<Enroll.Props> {

    state = { option: null, changePhone: false, emailSent: false, loading: false }

    onEnrollMobileClick = (e) => {

        this.setState({ option: 'mobile' })
    }

    onEnrollFacebookClick = (e) => {

        facebookEnrollMent()
    }

    onEnrollGoogleClick = (e) => {

        googleEnrollMent()
    }

    onEnrollEmailClick = (e) => {

        this.setState({ option: 'email' })
    }

    onBackClick = (e) => {

        this.setState({ option: null, changePhone: false })
    }

    onChangeNumberClick = (e) => {

        this.setState({ changePhone: true })

        e.preventDefault()
    }

    onChangeNumberSubmit = async (values) => {

        await this.props.changePhone(values.phone)

        this.setState({ changePhone: false })
    }

    onEmailEnrollSubmit = async (values) => {

        await this.setState({ loading: true })

        try {
            await userActions.emailEnrollment(values.email, values.password)
            await this.setState({ loading: false, emailSent: true })
        }
        catch (e) {
            alert(e.description)
            await this.setState({ loading: false, emailSent: false })
        }
    }

    renderOptions() {

        const { step1, status, email, name } = this.props;

        if (this.state.option === 'mobile') {

            return <div className="mobile">
                <div className="header">
                    <div className="back" onClick={this.onBackClick}>&lt;</div>
                    <div className="label">Back</div>
                </div>
                <h3>Enroll with mobile</h3>
                <p className="description">You will be able to access patient portal with the following number:</p>

                {!this.state.changePhone &&
                    <form className="cw-signup-form">
                        <div className="phone">
                            <div className="number">
                                {step1.phone}
                            </div>
                            {status === VERIFICATION_STATUS.VERIFIED &&
                                <div className="verified">Number is verified</div>
                            }
                            {status !== VERIFICATION_STATUS.VERIFIED &&
                                <div className="not-verified">Not verified</div>
                            }
                        </div>
                        <a href="#" onClick={this.onChangeNumberClick}>Change Number</a>
                        {status === VERIFICATION_STATUS.VERIFIED &&
                            <div className="actions">
                                <button className="confirm">Start paperwork</button>
                            </div>
                        }
                    </form>
                }

                {
                    this.state.changePhone &&
                    <div className="edit-phone">
                        <PhoneForm onSubmit={this.onChangeNumberSubmit} />
                    </div>
                }
            </div >
        }

        if (this.state.option === 'email') {

            return <div className="email">
                <Spin spinning={this.state.loading}>
                    <div className="header">
                        <div className="back" onClick={this.onBackClick}>&lt;</div>
                        <div className="label">Back</div>
                    </div>
                    <h3>Enroll with email</h3>

                    {this.state.emailSent === false &&
                        <EmailForm onSubmit={this.onEmailEnrollSubmit} initialValues={{ email, name }} />
                    }

                    {this.state.emailSent === true &&
                        <p>Please check your email to verify your account.</p>
                    }
                </Spin>
            </div>
        }

        return <div className="options">
            <button onClick={this.onEnrollMobileClick} className="primary">Enroll with mobile</button>
            <span>or</span>
            <button onClick={this.onEnrollEmailClick} className="primary mail">Enroll with Email</button>
            <button onClick={this.onEnrollFacebookClick} className="primary facebook">Enroll with Facebook</button>
            <button onClick={this.onEnrollGoogleClick} className="primary google">Enroll with Google</button>
        </div>
    }

    render() {

        return (<div className="step">
            {this.props.user === null &&
                <div className="enroll">
                    <div className="explanation">
                        <div className="contents">
                            <h2>Enroll With</h2>
                            <p>As our patient you will be able to check your goals progress through login-in into your patient portal.</p>
                            <p>You can choose the method method for login that is best for you </p>
                        </div>
                    </div>
                    <div className="section">
                        {this.renderOptions()}
                    </div>
                </div>
            }
            {this.props.user !== null &&
                <div className="enroll">
                    <form className="cw-signup-form">
                        <p>Enrolled as: {this.props.user.name}</p>
                        <div className="actions">
                            <button className="confirm">Start paperwork</button>
                        </div>
                    </form>
                </div>
            }
        </div>)
    }
}


const mapStateToProps = state => ({
    step: state.signUp.step,
    step1: state.signUp.steps.step1,
    status: state.signUp.steps.phone.status,
    sent: state.signUp.steps.phone.sent,
    name: `${state.signUp.steps.step1.firstName} ${state.signUp.steps.step1.lastName}`,
    email: state.signUp.steps.step3.email,
    user: state.users.user,
})

const mapDispatchToProps = {
    changePhone: signUpActions.changePhone,
    emailEnrollment: userActions.emailEnrollment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Enroll);
