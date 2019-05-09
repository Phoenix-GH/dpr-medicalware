import * as React from 'react';
// Components
import LocationDetailBox from 'app/components/common/containers/LocationDetailBox';
import MapComponent from 'app/components/common/MapContainer';
// Style
import './location-container.scss';

export namespace LocationContainer {
  export interface Props {
    locationInfo: any,
    isLeft: boolean,
    isFirst: boolean,
    isLast: boolean,
  }
}

class LocationContainer extends React.Component<LocationContainer.Props> {
  render () {
    const { locationInfo, isLeft, isFirst, isLast } = this.props;

    return (
      <section id={locationInfo._id} className={`location-item${isFirst ? ' first-location-item' : ''}${isLast ? ' last-location-item' : ''}${isLeft ? ' even': ' odd'}`}>
        {
          isFirst &&
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2></h2>
                <p></p>
              </div>
            </div>
          </div>
        }
        <div className="location-map-outer">
          <div className="container">
            <div className="row">
              {isLeft && <div className="col-md-4"></div>}
              <div className="col-md-8">
                <div className="map-section">
                  <MapComponent locations={[locationInfo]} />
                </div>
              </div>
              {!isLeft && <div className="col-md-4"></div>}
            </div>
          </div>
        </div>

        <LocationDetailBox locationInfo={locationInfo} isLeft={isLeft} />
      </section>
    );
  }
}

export default LocationContainer;
