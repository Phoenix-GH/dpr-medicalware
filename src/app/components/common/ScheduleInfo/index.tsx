import * as React from 'react';
// Style
import './schedule-info.scss';

export namespace ScheduleInfo {
  export interface Props {
    type: string;
    value: number;
    title1: string;
    title2: string;
  }
}

class ScheduleInfo extends React.Component<ScheduleInfo.Props> {
  render () {
    const { type, value, title1, title2 } = this.props;
    const intValue = value - value % 1;
    const realValue = value % 1 * 100;
    return (
      <div className={`cw-pricemark ${type}`}>
        <span>&nbsp;{title1}&nbsp;</span>
        <strong>
          <span className="b1">{`${type==='price' ? '$' : ''}${intValue}`}</span>
          <span className="b2">{`${realValue ? realValue : ''}`}</span>
        </strong>
        <span>{title2}</span>
      </div>
    );
  }
}

export default ScheduleInfo;
