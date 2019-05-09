import * as React from 'react';
import { Spin } from 'antd';
import classnames from 'classnames';
import { renderTextField, validations } from 'app/components/common/forms';

import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Field, formValueSelector, reduxForm } from 'redux-form';

const renderOptions = ({ input, sources, meta: { touched, error, warning } }) => {

    return <div className="sources">
        <label>Select source</label>
        <div className="list">
            {sources.map(source => <div key={source.value} className={classnames('source', { selected: input.value === source.value })} onClick={() => input.onChange(source.value)}>{source.label}</div>)}
        </div>
        {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
    </div>
}

let FormComponent = props => {

    const { handleSubmit, stripeError, source, saving } = props

    const style = {
        base: {
            fontSize: "16px",
            fontWeight: "normal",
            "::placeholder": {
                color: "#777"
            }
        }
    }

    const sources = [
        { label: 'TV', value: 'tv', copy: 'Which TV Station?' },
        { label: 'Radio', value: 'radio', copy: 'Which Radio Station?' },
        { label: 'Newspaper', value: 'newspaper', copy: 'Which Newspaper?' },
        { label: 'Referral', value: 'referral', copy: 'Which Referral?' },
        { label: 'Doctor', value: 'doctor', copy: ' What is the doctor\'s name?' },
        { label: 'Internet Search', value: 'internet-search', copy: 'Which Search Engine?' },
        { label: 'Former Patient', value: 'former-patient', copy: 'What is his or her name?' },
        { label: 'Walk-in', value: 'walk-in', copy: 'Which one?' },
        { label: 'Can\'t Remember', value: 'cant-remember' },
    ]

    const selectedSource = sources.find(s => s.value === source)

    return (
        <form onSubmit={handleSubmit} className="cw-signup-form">
            <Spin spinning={saving} wrapperClassName="pdr-spin">

                <h2>Confirm payment of $50 to hold appointment</h2>
                <p>Your $50 deposit is <b>fully refundable </b> and is applied to your first payment or refunded if you don't enroll. </p>

                <Field
                    name="email"
                    type="text"
                    component={renderTextField as any} label="Email"
                    validate={[validations.required, validations.email]}
                />

                <CardElement hidePostalCode={true} style={style} className="stripe-card-element" />

                <span className="error">{stripeError}</span>

                <h2>How did you hear about us?</h2>

                <Field
                    name="source"
                    component={renderOptions as any}
                    sources={sources}
                    validate={[validations.required]}
                />

                {source !== 'cant-remember' &&

                    <Field
                        name="which"
                        type="text"
                        label={selectedSource ? selectedSource.copy : ''}
                        component={renderTextField as any}
                        validate={[validations.required]}
                    />
                }
            </Spin>
            <div className="actions">
                <button className="confirm" type="submit" disabled={saving}>Confirm payment</button>
            </div>
        </form>
    )
}

const reduxFormHOC = reduxForm({ form: 'checkout' })(FormComponent)
const selector = formValueSelector('checkout')
const Form = connect(state => ({ source: selector(state, 'source') }))(reduxFormHOC) as any;

export namespace CheckoutForm {
  export interface Props {
    stripe: string;
    initialValues: any;
    onSubmit: Function;
    onChange: Function;
    stripeError: any;
    saving: boolean;
  }
}

class CheckoutForm extends React.Component<CheckoutForm.Props> {

    onBeforeSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <Form
                initialValues={{ ...this.props.initialValues }}
                onBeforeSubmit={this.onBeforeSubmit}
                onSubmit={values => this.props.onSubmit(values, this.props.stripe)}
                onChange={this.props.onChange}
                stripeError={this.props.stripeError}
                saving={this.props.saving}
            />
        );
    }
}

export default connect(null)(injectStripe(CheckoutForm))
