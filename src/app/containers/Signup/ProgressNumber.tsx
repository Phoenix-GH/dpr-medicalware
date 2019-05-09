import * as React from 'react';
import { connect } from 'react-redux'

export namespace ProgressNumber {
  export interface Props {
    percentage: number;
  }
}

class ProgressNumber extends React.Component<ProgressNumber.Props> {
    render() {
        const { percentage } = this.props;
        const text = `${percentage}%`
        return <div className="progress-number">
            <div className="number" style={{ left: text }}>{text}</div>
        </div>
    }
}

const mapStateToProps = state => ({
    percentage: state.signUp.percentage,
})

export default connect(mapStateToProps)(ProgressNumber);
