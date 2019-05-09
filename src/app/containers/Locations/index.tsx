import * as React from 'react';
import { parse } from 'qs';
// Component
import MapContainer from 'app/components/common/MapContainer';
import { GuaranteedLargeBox } from 'app/components/common/containers/GuaranteedBox';
import BannerTextBox from 'app/components/common/containers/BannerTextBox';
import LocationContainer from 'app/components/common/containers/LocationContainer';
// Constants
import guarantees from 'app/constants/guarantees';
import locations from 'app/constants/locations/locations';
import { bannerInfo } from './constants';
// Images
const firstGuaranteeImg = require('app/assets/images/first-care-guaranteed.png');
// Style
import './locations-page.scss';

export namespace LocationsPage {
  export interface Props {
    location: any;
  }
}

class LocationsPage extends React.Component<LocationsPage.Props> {

  scrollTo = (locationName) => {
    if (!locationName) {
      window.scrollTo(0, 0);
      return;
    }

    const selectedLocation = locations.find((location) => {
      return location.title === locationName;
    });

    const locSection = document.getElementById(selectedLocation.id);
    locSection ? locSection.scrollIntoView({block: 'start', behavior: 'smooth'}) : window.scrollTo(0, 0);
  }
  componentDidUpdate() {
    const { location: { search } } = this.props;
    const query = parse(search);
    this.scrollTo(query.name);
  }

  componentDidMount() {
    const { location: { search } } = this.props;
    const query = parse(search);
    this.scrollTo(query.name);

    //this.scrollTo(query.name);
  }

  render() {
    return (
      <div className="cw-locationsPage">
        <div className="page-outer">

          <section className="banner locations-banner">
            <div className="banner-content">
              <div className="map-section main-map">
                <MapContainer locations={locations} />
              </div>
              <div className="banner-top-layer">
                <div className="banner-top-layer-inner2">
                  <div className="triangle-down-left2"></div>
                  <div className="triangle-down-left3"></div>
                  <div className="triangle-down-left"></div>
                </div>
                <div className="banner-top-layer-inner">
                  <div className="inside">
                    <BannerTextBox
                        additionalClass="locations"
                        buttonTitle="JOIN NOW"
                        bannerInfo={bannerInfo} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="location-heading">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Our Locations</h2>
                  <p className="subtitle">All of our facilities are equipped with the latest medical technology and staffed <br />by experienced medical doctors to assist you in reaching your goals.</p>
                </div>
              </div>
            </div>
          </section>
          {
            locations.map((location, index) => {
              const isFirst = index === 0 ? true : false;
              const isLast = index === locations.length - 1 ? true : false;
              const isLeft = index % 2 === 0 ? false : true;
              return (
                <LocationContainer
                  key={index}
                  locationInfo={location}
                  isLeft={isLeft}
                  isFirst={isFirst}
                  isLast={isLast} />
              )}
            )
          }
          <GuaranteedLargeBox
            content={guarantees.tryUsNoRisk}
            leftBlue
            buttonTitle="JOIN NOW"
            markImage={firstGuaranteeImg}/>
        </div>
      </div>
    );
  }
}

export default LocationsPage;
