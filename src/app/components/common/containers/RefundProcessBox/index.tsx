import * as React from 'react';
// Style
import './refund-process-box.scss';

export namespace RefundProcessBox {
  export interface Props {
    processDetail: any;
    index: number;
  }
}

class RefundProcessBox extends React.Component<RefundProcessBox.Props> {
  render () {
    const { processDetail, index } = this.props;
    return (
      <div className={`box-number1 bn${index + 1}`}>
        <h3>
          <span><strong>{index + 1}</strong></span>
          {processDetail.title}
        </h3>
        <div className="bx1">
          <h4>{processDetail.leftTitle}</h4>
        </div>
        <div className="bx2">
          <ul>
            {
              processDetail.contents.map(text =>
                <li key={text}>
                  <span></span>
                  <strong>{text}</strong>
                </li>
              )
            }
          </ul>
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

export default RefundProcessBox;
