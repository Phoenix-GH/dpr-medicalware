import * as React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames'
import './signup-page.scss';

import * as signUpActions from 'app/reducers/signup'
import * as userActions from 'app/reducers/users'

import SignupStep1 from './SignupStep1'
import SignupStep2 from './SignupStep2'
import SignupStep3 from './SignupStep3'
import Enroll from './Enroll'
import PhoneVerification from './PhoneVerification'
import Headers from './Headers'
import Summary from './Summary'
import Progress from './Progress'
import { Spin } from 'antd'
import ProgressNumber from './ProgressNumber'

const Tab = ({ selected, completed, number, title, onClick }) => {

  return (<div className={classnames('tab', { selected, completed })} onClick={onClick}>
    <div className="number">
      <div className="bg">{number}</div>
    </div>
    <div className="title">{title}</div>
  </ div>)
}

export namespace SignUpPage {
  export interface Props {
    step: number;
    fetchSignUp: Function;
    fetchUser: Function;
    selectStep: Function;
  }
}

class SignUpPage extends React.Component<SignUpPage.Props> {

  state = { loading: false }
  tabs = {} as any;
  async componentDidMount() {

    await this.setState({ loading: true })
    await this.props.fetchSignUp()
    await this.props.fetchUser()
    await this.setState({ loading: false })
  }

  onTabClick = (index) => {

    if (index < this.props.step) {

      this.props.selectStep(index)
    }
  }

  componentDidUpdate(prevProps) {

    if (this.tabs !== null && this.props.step > prevProps.step) {

      window.scrollTo({
        top: this.tabs.offsetTop + 260,
        behavior: "auto"
      })
    }
  }

  render() {

    const { step } = this.props

    if (this.state.loading) {
      return <div className="cw-signUpPage loading">
        <Spin spinning={true} />
      </div>
    }

    return (
      <div className={`cw-signUpPage step-${step + 1}`} >
        <div className="cw-signUpPage-content">
          <PhoneVerification />
          <div className="top">
            <div className="guarantee" />
            <Headers step={step} />
            {this.props.step <= 2 &&
              <React.Fragment>
                <div className="tabs" ref={r => this.tabs = r}>
                  <Tab number={1} title="Your information" completed={step > 0} selected={step === 0} onClick={() => this.onTabClick(0)} />
                  <Tab number={2} title="Schedule your appointment" completed={step > 1} selected={step === 1} onClick={() => this.onTabClick(1)} />
                  <Tab number={3} title="Payment information" completed={step > 2} selected={step === 2} onClick={() => this.onTabClick(2)} />
                </div>
                <Progress step={step} />
              </React.Fragment>
            }
          </div>

          {this.props.step < 3 &&
            <ProgressNumber  percentage={12} />
          }

          {this.props.step < 3 &&
            <Summary />
          }

          {this.props.step === 0 &&
            <SignupStep1 />
          }

          {this.props.step === 1 &&
            <SignupStep2 />
          }

          {this.props.step === 2 &&
            <SignupStep3 />
          }

          {this.props.step === 3 &&
            <Enroll />
          }
        </div>
      </div>)
  }
}

const mapStateToProps = state => ({
  step: state.signUp.selectedStep,
  user: state.users.user,
})

const mapDispatchToProps = {
  fetchSignUp: signUpActions.fetch,
  fetchUser: userActions.fetch,
  selectStep: signUpActions.selectStep
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
