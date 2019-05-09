import * as React from 'react';
// Component
import { GuaranteedLargeBox } from 'app/components/common/containers/GuaranteedBox';
import BannerTextBox from 'app/components/common/containers/BannerTextBox';
import DoctorCardBox from 'app/components/common/containers/DoctorCardBox';
// Constants
import guarantees from 'app/constants/guarantees';
import {
  bannerInfo,
  doctorProfiles
  } from './constants';
// Images
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
// Scss
import './doctors-page.scss';

class DoctorsPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="cw-doctorsPage">
        <div className="page-outer page-our-doctors">

          <section className="banner our-doctors-banner">
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <BannerTextBox
                          additionalClass="doctors"
                          buttonTitle="ENROLL NOW"
                          bannerInfo={bannerInfo} />
                      </div>
                      <div className="col-md-6">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-our-doctors">
            <div className="int">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2>The Persona Doctors</h2>
                    <p>Even the best physicians in private practice or at community hospitals are far too busy<br /> to keep studying daily, to do research or to frequently interact with leaders in their fields.</p>
                    <p>Our doctors, have to stay abreast of advanced research and the latest treatments. <br />Better yet, our doctors have each other to discuss each case with. They learn from each other.<br /><br /><strong>That's why our patients have great results.</strong></p>
                  </div>
                </div>
                <div>
                {
                  doctorProfiles.map((profile, index) => {
                    if (index+1 < doctorProfiles.length) {
                      if (index%2 === 0) {
                        return (
                          <div key={index} className="row">
                            <DoctorCardBox doctorInfo={doctorProfiles[index]} />
                            <DoctorCardBox doctorInfo={doctorProfiles[index+1]} />
                          </div>
                        )
                      }
                    } else {
                      return (
                        <div key={index} className="row">
                          <DoctorCardBox doctorInfo={doctorProfiles[index]} />
                        </div>
                      )
                    }
                    return (<div key={index}></div>);
                  })
                }
                </div>
              </div>
            </div>
          </section>

          <GuaranteedLargeBox
            content={guarantees.satisfication}
            buttonTitle="JOIN NOW"
            markImage={imgGuarantee100} />
        </div>
      </div>
    );
  }
}

export default DoctorsPage;
