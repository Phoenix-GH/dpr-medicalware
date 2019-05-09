import * as React from 'react';
import classnames from 'classnames'
import { DatePicker } from 'antd'
import * as moment from 'moment'
import { parseNumber } from 'libphonenumber-js'
import { Field } from 'redux-form'

export const validations = {

    required: value => value ? undefined : 'Required',
    email: value => value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? undefined
        : 'Invalid email address',
    zip: value => value && /^[0-9]{5}(?:[ -][0-9]{4})?$/i.test(value)
        ? undefined
        : 'Please enter a valid ZIP code',
    phone: value => {
        try {
            const result = parseNumber(value, 'US');

            return result.valid
                ? undefined
                : 'Invalid phone number'

        } catch (e) {

            return undefined
        }
    },
    passwordVerify: (value, allValues) => value === allValues.password
        ? undefined
        : `Passwords don't match`
}

export const renderTextField = ({ input, label, type, className, meta: { touched, error, warning } }) => (
    <div className={classnames('input', className, { error, warning })}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
        </div>
    </div>
)

export const renderSelect = ({ input, label, className, children, meta: { touched, error, warning } }) => (
    <div className={classnames('select', className, { error, warning })}>
        <label>{label}</label>
        <div>
            <select {...input}>
                {children}
            </select>
            {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
        </div>
    </div>
)

export const renderDatePicker = ({ input: { value, onChange }, meta: { touched, error, warning }, isMobile }) => {

    const renderControl = () => {

        const dateFormat = 'MM/DD/YYYY';

        if (isMobile) {

            return <input type="date" value={moment(value, dateFormat).format('YYYY-MM-DD')} onChange={(e) => onChange(moment(e.target.value, 'YYYY-MM-DD').format(dateFormat))} />
        }

        return <DatePicker format={dateFormat} value={moment(value, dateFormat)} onChange={(date) => onChange(date.format(dateFormat))} allowClear={false} />
    }

    return <div className={classnames('date-picker', { error, warning })}>
        <div>
            {renderControl()}
            {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
        </div>
    </div>
}

export const renderRadioButton = ({ input, options, className, meta: { touched, error, warning } }) => {

    const render = (key) => {

        return <div className="radio" key={key}>
            <label>
                <Field
                    component="input"
                    name={input.name}
                    type="radio"
                    value={key}
                />
                {options[key]}
            </label>
        </div>
    }

    return <div className={classnames('radio-group', className, { error, warning })}>

        {Object.keys(options).map(render)}

        {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
    </div>
}
