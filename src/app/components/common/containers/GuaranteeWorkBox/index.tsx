import * as React from 'react';
// Style
import './guarantee-work-box.scss';

export namespace GuaranteeWorkBox {
  export interface Props {
    content: any;
  }
}

class GuaranteeWorkBox extends React.Component<GuaranteeWorkBox.Props> {
  render () {
    const { content } = this.props;
    return (
      <div className="white-box2">
        <img src={content.image} alt="" className="img-responsive" />
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>
    );
  }
}

export default GuaranteeWorkBox;
