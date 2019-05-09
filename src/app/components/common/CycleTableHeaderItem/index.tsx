import * as React from 'react';
// Images
const imgTableHd = require('app/assets/images/table-hd-image.png');
// Style
import './cycletable-header-item.scss';

export namespace CycleTableHeaderItem {
  export interface Props {
    week: number;
    price: number;
  }
}

class CycleTableHeaderItem extends React.Component<CycleTableHeaderItem.Props>  {
  render () {
    const { week, price } = this.props;
    const intValue = price - price % 1;
    const realValue = (price * 100) % 100;
    return (
        <div className="table-hd2">
          <div className="img"><img src={imgTableHd} alt="" /></div>
          <div className="top">
            <span>{week}-WEEK CYCLE</span>
          </div>
          <div className="bottom">
            <strong><strong>${intValue}</strong><span>{realValue}</span></strong>
            <span>per week</span>
          </div>
        </div>
    );
  }
}

export default CycleTableHeaderItem;
