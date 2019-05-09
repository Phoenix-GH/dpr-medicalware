import * as React from 'react';

export namespace Step {
  export interface Props {
    open: boolean;
    header: string;
  }
}

export default class Step extends React.Component<Step.Props> {
    render() {
      return (
          <div className="cw-signUpPage-step">
              <div className="header">{this.props.header}</div>
              {this.props.open &&
                  <div className="content">{this.props.children}</div>
              }
          </div>
      );
    }
}
