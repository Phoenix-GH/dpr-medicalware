import * as React from 'react';
// Components
import BookNowButton from 'app/components/common/buttons/BookNowButton';
// Style
import './bannertext-box.scss';

export namespace BannerTextBox {
  export interface Props {
    additionalClass: string;
    bannerInfo: any;
    buttonTitle: string;
  }
}

class BannerTextBox extends React.Component<BannerTextBox.Props> {
  public static defaultProps = {
    buttonTitle: '',
  };

  render () {
    const { additionalClass, bannerInfo, buttonTitle } = this.props;

    return (
      <div>
        <div className={`banner-txt ${additionalClass}`}>
          <h2>{bannerInfo.title}</h2>
          <p>{bannerInfo.description1}</p>
          <p>{bannerInfo.description2}</p>
          <ul>
            {
              bannerInfo.contents.map(content => (
                <li key={content}>
                  <span></span>
                  <strong>{content}</strong>
                  <div className="clear"></div>
                </li>
              ))
            }
          </ul>
          {buttonTitle && <BookNowButton price={50} title={buttonTitle} />}
        </div>
      </div>
    );
  }
}

export default BannerTextBox;
