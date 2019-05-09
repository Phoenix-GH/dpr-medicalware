import * as React from 'react'
import { connect } from 'react-redux'
import { Popover } from 'antd';

const content = (
    <div className="info-popover">
        <h5>Fully Refundable Deposit</h5>
        <ul>
            <li><span>Cancel your appointment at least 24 hours prior to scheduled time</span></li>
            <li><span>If you show up to your appointment and decide not to enroll</span></li>
        </ul>
    </div>
);

export namespace Headers {
  export interface Props {
    step: number;
  }
}

class Headers extends React.Component<Headers.Props> {

    render() {

        const { step } = this.props

        if (step === 0) {
            return <div className="headers">
                <h2>Enroll Now</h2>
            </div>
        }

        if (step < 3) {
            return <div className="headers">
                <h2>Enroll Now</h2>
                <p>Reserve your appointment with a <b>fully refundable $50 deposit</b> that is applied to your first payment or refunded if you don't enroll.</p>
                <Popover content={content} trigger="click">
                    <a href="#">Learn more</a>
                </Popover>
            </div>
        }

        return <div className="headers">
            <h2>Confirmation &amp; Additional Information</h2>
            <p>
                Thank you for schedulling your appointment. We look forward to seeing you.
                <br />
                In order to minimize the amount of paperwork we ask you to fill out at the clinic, please answer the folling questions.
            </p>
        </div>
    }
}

const mapStateToProps = state => ({
    step: state.signUp.selectedStep,
})

export default connect(mapStateToProps)(Headers)
