import * as React from 'react';
import BookNowButton from 'app/components/common/buttons/BookNowButton';
import './guaranteed-box.scss';

export namespace GuaranteedLargeBox {
  export interface Props {
    content: any;
    leftBlue: boolean;
    buttonTitle: string;
    markImage: any;
    simpleButton: boolean;
  }
}

export class GuaranteedLargeBox extends React.Component<GuaranteedLargeBox.Props>  {
  public static defaultProps = {
    leftBlue: false,
    simpleButton: false,
  }

  render () {
    const { content, leftBlue, buttonTitle, markImage, simpleButton } = this.props;

    return (
      <section className={`call-out${leftBlue ? '' : 2}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={markImage} alt="100% Money-back Guarantee" className="guarantee100" />
            </div>
          </div>
        </div>
        <div className={`triangle${leftBlue ? 1 : 2}`}></div>
        <div className={`bluebox${leftBlue ? 1 : 2}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h3>{content.title} <br/> {content.title1} </h3>
                <p>{content.description1}<br />{content.description2}</p>
              </div>
              <div className="col-md-5">
                <BookNowButton price={50} title={buttonTitle} simpleButton={simpleButton} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export namespace GuaranteedSmallBox {
  export interface Props {
    leftBlue: boolean;
    buttonTitle: string;
    simpleButton: boolean;
  }
}

export class GuaranteedSmallBox extends React.Component<GuaranteedSmallBox.Props> {
  public static defaultProps = {
    leftBlue: false,
    simpleButton: false,
  }

  render () {
    const { leftBlue, buttonTitle, simpleButton } = this.props;

    return (
      <section className={`call-out${leftBlue ? 3 : 7}`}>
        <div className={`triangle${leftBlue ? 5 : 7}`}></div>
        <div className={`bluebox${leftBlue ? 5 : 7}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <BookNowButton price={50} title={buttonTitle} simpleButton={simpleButton} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export namespace GuaranteedReversedLargeBox {
  export interface Props {
    content: any;
    buttonTitle: string;
    markImage: any;
    simpleButton: boolean;
  }
}

export class GuaranteedReversedLargeBox extends React.Component<GuaranteedReversedLargeBox.Props> {
  public static defaultProps = {
    simpleButton: false,
  };
  render () {
    const { content, buttonTitle, markImage, simpleButton } = this.props;

    return (
      <section className="call-out4">
        <div className="container">
          <div className="row">
            <div className="col-md-12"><img src={markImage} alt="100% Money-back Guarantee" className="guarantee100" /></div>
          </div>
        </div>
        <div className="triangle6"></div>
        <div className="bluebox6">
          <div className="container">
            <div className="row">
            { content &&
              <div className="col-md-12">
                <h3>{content.title}</h3>
                <p>{content.description1}<br />{content.description2}</p>
              </div>
            }
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <BookNowButton price={50} title={buttonTitle} simpleButton={simpleButton} />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export namespace GuaranteedLoseXBox {
  export interface Props {
    content: any;
    buttonTitle: string;
    markImage: any;
    simpleButton: boolean;
  }
}

export class GuaranteedLoseXBox extends React.Component<GuaranteedLoseXBox.Props> {
  public static defaultProps = {
    simpleButton: false,
  }
  render () {
    const { content, buttonTitle, markImage, simpleButton } = this.props;

    return (
      <section className="call-out2">
        <div className="triangle2"></div>
        <div className="bluebox2">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={markImage} alt="100% Money-back Guarantee" className="g100" />
              </div>
              <div className="col-md-8">
                <h3>{content.title}</h3>
                <p>{content.description1}</p>
                <BookNowButton price={50} title={ buttonTitle} simpleButton={simpleButton} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
