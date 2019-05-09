import * as React from 'react';

// Style
import './plancard-box.scss';

export namespace PlanCardBox {
  export interface Props {
    plan: any;
  }
}

class PlanCardBox extends React.Component<PlanCardBox.Props> {
  render () {
    const { plan } = this.props;

    return (
      <div className="white-box"
           style={{
            background: `url(${plan.backImage}) no-repeat right bottom #FFF`
           }}>
        <h3>{plan.title1}<strong>{plan.title2}</strong></h3>
        <ul>
          {
            plan.contents.map(plan =>
              <li key={plan}>{plan}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default PlanCardBox;
