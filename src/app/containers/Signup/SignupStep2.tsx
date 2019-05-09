import * as React from 'react';
import { connect } from 'react-redux';
import * as signUpActions from 'app/reducers/signup';
import AppointmentSelector from './AppointmentSelector';
import ClinicSelector from './ClinicSelector';
import { Spin } from 'antd';

export namespace SignupStep2 {
  export interface Props {
    step?: number;
    saveProgress?: Function;
    updatePercentage?: Function;
    save?: Function;
    step2?: any;
  }
}

class SignupStep2 extends React.Component<SignupStep2.Props> {

    state = { view: 1, saving: false }

    onNextClick = async () => {

        if (this.state.view === 1) {

            this.setState({ view: 2 })
        }
        else {

            await this.setState({ saving: true })
            await this.props.saveProgress({ step: this.props.step + 1 })
            await this.setState({ saving: false })
        }
    }

    onPrevViewClick = () => {

        this.props.updatePercentage(33)
        this.setState({ view: 1 })
    }

    onNextViewClick = () => {

        this.props.updatePercentage(49)
        this.setState({ view: 2 })
    }

    onChange = (values) => {

        this.props.save(values)
    }

    onLocationChange = (location) => {

        this.props.save({ location })
    }

    onAppointmentChange = (date, block, hour) => {

        this.props.save({ location: this.props.step2.location, date, block, hour })
    }

    renderActions() {

        if (this.state.view === 1) {
            return <div className="actions">
                <button className="confirm" onClick={this.onNextViewClick} disabled={this.props.step2.location === null || this.state.saving}>Next</button>
            </div>
        }

        const { block, date, hour } = this.props.step2

        return <div className="actions">
            <button onClick={this.onPrevViewClick}>Back</button>
            <button className="confirm" onClick={this.onNextClick} disabled={(block === null || date === null || hour === null) || this.state.saving}>Next</button>
        </div>
    }

    render() {

        return (
            <div className="step">
                <div className="cw-signup-form">
                    <Spin spinning={this.state.saving} wrapperClassName="pdr-spin">
                        {this.state.view === 1 &&
                            <ClinicSelector
                                initialValues={{ location: this.props.step2.location }}
                                onChange={this.onLocationChange}
                            />
                        }
                        {this.state.view === 2 &&
                            <AppointmentSelector
                                onChange={this.onAppointmentChange}
                                location={this.props.step2.location}
                                initialValues={{ date: this.props.step2.date, block: this.props.step2.block, hour: this.props.step2.hour }}

                            />
                        }
                    </Spin>
                    {this.renderActions()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    saving: state.signUp.saving,
    step: state.signUp.selectedStep,
    step2: state.signUp.steps.step2
})

const mapDispatchToProps = {
    save: signUpActions.step2Save,
    saveProgress: signUpActions.saveProgress,
    back: signUpActions.back,
    updatePercentage: signUpActions.updatePercentageProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupStep2)
