import * as React from 'react';
// Style
import './location-detail-box.scss';

export namespace LocationDetailBox {
  export interface Props {
    locationInfo: any;
    isLeft: boolean;
  }
}

class LocationDetailBox extends React.Component<LocationDetailBox.Props> {
  render () {
    const { locationInfo, isLeft } = this.props;

    return (
      <div className={`location-details-outer ${isLeft && 'left'}`}>
        <div className="container">
          <div className="row">
            {!isLeft && <div className="col-md-7"></div>}
            <div className="col-md-5">
              <div className="location-info-box">
                <div className="hd">
                  <h3>{locationInfo.title}</h3>
                  <span>{locationInfo.subtitle}</span>
                </div>
                <div className="bd">
                  <ul>
                    <li>
                      <span className="pin"></span>
                      <p>{locationInfo.address}</p>
                      <div className="clear"></div>
                    </li>
                    <li>
                      <span className="customer-service"></span>
                      <p>Customer Service <a href="tel:8885771570">{locationInfo.customerService}</a></p>
                      <div className="clear"></div>
                    </li>
                    <li>
                      <span className="direct-line"></span>
                      <p>Direct Line <a href="tel:2404734401">{locationInfo.directLine}</a></p>
                      <div className="clear"></div>
                    </li>
                  </ul>
                  <div className="row	bottom-part">
                  {
                    locationInfo.workTime.map(schedule =>
                      <div key={schedule.day} className="col-md-6">
                      {
                        schedule.open ?
                          <p>{schedule.day}: {schedule.open} - {schedule.close}</p> : <p>{schedule.day}: <strong>Closed</strong></p>
                      }
                      </div>
                    )
                  }
                  </div>
                </div>
              </div>
            </div>
            {isLeft && <div className="col-md-7"></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default LocationDetailBox;
