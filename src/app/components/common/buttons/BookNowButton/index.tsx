import * as React from 'react';
// Style
import './booknow-button.scss';

export namespace BookNowButton {
  export interface Props {
    price: number;
    title: string;
    simpleButton: boolean;
  }
}

class BookNowButton extends React.Component<BookNowButton.Props> {
  public static defaultProps = {
    simpleButton: false,
  }

  render () {
    const { price, title, simpleButton } = this.props;

    return (
      <a href="/SignUp" className={`cw-enrollnow-btn ${simpleButton ? 'button2' : 'button1'}`}>
        {simpleButton && title}
        { !simpleButton &&
          <span className="bx1">
            <strong>{title}</strong>
            <span>Click here to get started today</span>
          </span>
        }
        { !simpleButton && <span className="bx2">
            <span>Book now for only</span>
            <strong>${price}</strong>
          </span>
        }
      </a>
    );
  }
}

export default BookNowButton;
