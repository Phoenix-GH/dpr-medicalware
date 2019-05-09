import * as React from 'react';
import { connect } from 'react-redux'
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import {
    FacebookLoginButton,
    GoogleLoginButton,
    LinkedInLoginButton,
    TwitterLoginButton
} from 'react-social-login-buttons';

import appSettings from 'app/config/appSettings';
import * as signUpActions from 'app/reducers/signup';

export namespace SignupOptions {
  export interface Props {
    registerWithEmail: Function;
  }
}

class SignupOptions extends React.Component<SignupOptions.Props> {

    handleSocialLogin = (user, err) => {
        console.log(user)
        console.log(err)
    };

    render() {
        return (
            <div>
                <div className="cw-signup-form">
                    <SocialLogin
                        provider='facebook'
                        appId={appSettings.FacebookAppId}
                        callback={this.handleSocialLogin}>
                        <FacebookLoginButton text="Login with Facebook" />
                    </SocialLogin>
                    <SocialLogin
                        provider='google'
                        appId={appSettings.GoogleAppId}
                        callback={this.handleSocialLogin}>
                        <GoogleLoginButton text="Login with Google" />
                    </SocialLogin>
                    <SocialLogin
                        provider='linkedin'
                        appId={appSettings.LinkedinAppId}
                        callback={this.handleSocialLogin}>
                        <LinkedInLoginButton text="Login with Linkedin" />
                    </SocialLogin>
                    <SocialLogin
                        provider='twitter'
                        appId={appSettings.TwitterAppId}
                        callback={this.handleSocialLogin}>
                        <TwitterLoginButton text="Login with Twitter" />
                    </SocialLogin>
                    <button onClick={this.props.registerWithEmail as any}>Register with email</button>
                </div>
            </div>
        )
    }
}
const action = signUpActions as any;
const mapDispatchToProps = {
    registerWithEmail: action.nextStep
}

export default connect(null, mapDispatchToProps)(SignupOptions);
