import  * as React from 'react'
import { connect } from 'react-redux'

export namespace Progress {
  export interface Props {
    step: number;
  }
}

class Progress extends React.Component<Progress.Props> {
  render() {
    return <div className="signup-progress">
    </div>
  }
}

const mapStateToProps = state => ({
  step: state.signUp.step
})

export default connect(mapStateToProps)(Progress)
