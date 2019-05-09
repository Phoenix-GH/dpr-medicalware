import * as React from 'react';
// Style
import './expense-box.scss';

export namespace ExpenseBox {
  export interface Props {
    expenseDetail: any;
  }
}

class ExpenseBox extends React.Component<ExpenseBox.Props> {
  render () {
    const { expenseDetail } = this.props;

    return (
      <div className="border-box">
        <div className="img"><img src={expenseDetail.imgExpense} alt={expenseDetail.title1} /></div>
        <h3>{expenseDetail.title1}<strong>{expenseDetail.title2}</strong></h3>
        <ul>
          {
            expenseDetail.contents.map(content =>
              <li key={content}>
                <span></span>{content}
              </li>
            )
          }
        </ul>
        <p>{expenseDetail.subtitle}</p>
      </div>
    );
  }
}

export default ExpenseBox;
