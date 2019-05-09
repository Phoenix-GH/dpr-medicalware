import * as React from 'react';
import classnames from 'classnames';

export namespace Tab {
  export interface Props {
    selected: boolean;
    completed: string;
    number: number;
    title: string;
  }
}

class Tab extends React.Component<Tab.Props> {
    render() {
      const { selected, completed } = this.props

      return <div className={classnames('tab', { selected, completed })} >
          <div className="number">
              <div className="bg">{this.props.number}</div>
          </div>
          <div className="title">{this.props.title}</div>
      </ div>
    }
}

export default Tab
