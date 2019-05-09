import * as React from 'react';

//import appSettings from 'app/config/appSettings';
import { connect } from 'react-redux';
import * as signUpActions from 'app/reducers/signup';
import { Elements } from 'react-stripe-elements';
// import StripeForm from './StripeForm';
// import Step from './Step';
import lodash from 'lodash';

export namespace SignupStep3 {
  export interface Props {
    step?: number;
    saveProgress?: Function;
    email?: string;
    save?: Function;
    step3?: any;
    checkout?: Function;
  }
  export interface State {
    stripeError: string,
    saving: boolean;
  }
}

class SignupStep3 extends React.Component<SignupStep3.Props, SignupStep3.State> {
    constructor(props) {
        super(props)
        this.state = { stripeError: '', saving: false }
    }

    debouncedOnChange = () => {
      lodash.debounce(this.onChange, 1000);
    }

    onSubmit = async (values, stripe) => {
      this.setState({ saving: true })

      stripe.createToken(values)
          .then(({ token, error }) => {
              if (error) {
                  this.setState({ stripeError: error.message, saving: false })
              }
              else {
                  return this.props.checkout(token).then(() => this.props.saveProgress({ step: this.props.step + 1 }))
              }
          })
    }

    onChange = (values) => {

        this.props.save(values)
    }

    render() {

        return <div className="step">
            <Elements>
                {/* <StripeForm
                    initialValues={{ ...this.props.step3, email: this.props.email }}
                    onSubmit={this.onSubmit}
                    onChange={this.debouncedOnChange}
                    stripeError={this.state.stripeError}
                    saving={this.state.saving}
                /> */}
            </Elements>
        </div>
    }
}

const mapStateToProps = state => ({
    saving: state.signUp.saving,
    step: state.signUp.selectedStep,
    step3: state.signUp.steps.step3,
    email: state.signUp.steps.step1.email
})

const mapDispatchToProps = {
    checkout: signUpActions.checkout,
    saveProgress: signUpActions.saveProgress,
    back: signUpActions.back,
    save: signUpActions.step3Save
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep3);
