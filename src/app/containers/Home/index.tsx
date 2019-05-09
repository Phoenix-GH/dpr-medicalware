import * as React from 'react';
import Slider from 'react-slick';
import { Route } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
// Constants
import guarantees from 'app/constants/guarantees';
import {
  bannerInfo,
  lossProcesses,
  workflows,
  differences,
  } from './constants';
// Components
import { MainHeader } from 'app/components';
import MainFooter from 'app/components/MainFooter'
import BannerTextBox from 'app/components/common/containers/BannerTextBox';
import { GuaranteedLargeBox, GuaranteedSmallBox } from 'app/components/common/containers/GuaranteedBox';
// Images
const imgVideoBg = require('app/assets/images/video-bg.png');
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
// Style
import './home-page.scss';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import Routes from 'app/constants/routes';

import ProgramPage from 'app/containers/Program';
import GuaranteePage from 'app/containers/Guarantee';
import PricingPage from 'app/containers/Pricing';
import LocationsPage from 'app/containers/Locations';
import FAQPage from 'app/containers/FAQ';
import DoctorsPage from 'app/containers/Doctors';
import SignUpPage from 'app/containers/Signup';
import AboutUsPage from 'app/containers/AboutUs';
import PrivacyPolicyPage from 'app/containers/PrivacyPolicy';
import HippaPrivacyPage from 'app/containers/HippaPrivacy';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  autoplay: true,
};

export namespace Home {
  export interface Props {
    location: any,
  }
}
class Home extends React.Component<Home.Props> {
  render() {
    const { children } = this.props;
    return (
    <div className="cw-main-container">
          { children }
          { !children &&
            <div className="page-outer">
              <section className="banner">
                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="video">
                              <div className="video-embed-outer">
                                <div className="videowrapper">
                                  <iframe
                                    title="introduce"
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/ScMzIvxBSi4"
                                    frameBorder="0"
                                    allow="encrypted-media"
                                    allowFullScreen>
                                  </iframe>
                                </div>
                              </div>
                              <img src={imgVideoBg} className="videobg img-responsive" alt="video_bg" />
                            </div>
                            <div className="text-under-video">As Seen On Television</div>
                          </div>
                          <div className="col-md-6">
                            <BannerTextBox
                              additionalClass="home"
                              buttonTitle="ENROLL NOW"
                              bannerInfo={bannerInfo} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="hdiw">
                <div className="hdiw-int">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>How Does It Work?</h2>
                        <p>Modern medicine's most proven weight loss</p>
                      </div>
                    </div>
                    <div className="row">
                    {
                      workflows.map((workflow, index) =>
                        <div className="col-md-4" key={index}>
                          <div className="box1 bx1">
                            <h3>
                              <span>
                                <strong>{index+1}</strong>
                              </span>
                              {workflow.title}
                            </h3>
                            {
                              workflow.contents.map((content, index) =>
                                <div className={index === 0 ? 'bxw' : `bxw${index+1}`} key={index}>
                                  {index > 1 && <div className="triangle4"></div>}
                                  <strong>{content.subTitle}</strong>
                                  <ul>
                                  {
                                    content.contents.map((item, index) =>
                                      <li key={index}>{item}</li>
                                    )
                                  }
                                  </ul>
                                </div>
                              )
                            }
                            <div className="bottom">
                              <div className="bottom-int">
                                <div className="pricing">
                                  {workflow.priceEnd ?
                                    <div>$<strong>{Math.round(workflow.price)}</strong>99<strong>-</strong>$<strong>139</strong>99</div>
                                    : <div>$<strong>{Math.round(workflow.price)}</strong>99</div>
                                  }
                                  <span>{workflow.priceSchedule}</span>
                                </div>
                                <div className="time">
                                  {workflow.periodSchedule}
                                  <div><strong>{workflow.period}</strong></div>
                                  {workflow.periodDateUnit}
                                </div>
                              </div>
                            </div>
                          </div>
                          <p>{workflow.bottomTitle}</p>
                        </div>
                      )
                    }
                    </div>
                  </div>
                </div>
              </section>

              <GuaranteedSmallBox
                leftBlue
                buttonTitle="ENROLL NOW"
              />

              <section className="medical-weight-loss">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2>Exclusive Metabolic Reprogramming</h2>
                      <p>Our patent-pending process to restore your metabolism to an optimal state.</p>
                    </div>
                    <div className="row">
                      {lossProcesses.map(process => (
                        <div className={`col-md-${12 / lossProcesses.length}`} key={process.title}>
                          <div className="light-box">
                            <img src={process.image} alt={process.title} />
                            <h3>{process.title}</h3>
                            <ul>
                              {process.contents.map((content, index) => (
                                <li key={index}>{content}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <a href="#" className="button3">LEARN MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <GuaranteedLargeBox
                content={guarantees.satisfication}
                leftBlue
                buttonTitle="ENROLL NOW"
                markImage={imgGuarantee100} />

              <section className="how-different hp-how-different">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2>How We’re Different</h2>
                      <p>At Persona Doctors, we’re different than other weight loss programs out there—here’s how:</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                      <div className="row">
                      {
                        differences.map((difference, index) =>
                        <div className="col-md-4" key={index}>
                          <div className="light-box">
                            <img src={difference.image} alt={difference.title} />
                            <h3>{difference.title}</h3>
                          </div>
                        </div>
                        )
                      }
                      </div>
                    </div>
                    <div className="col-md-1"></div>
                  </div>
                </div>
              </section>

              <GuaranteedSmallBox
                leftBlue
                buttonTitle="ENROLL NOW"
              />

              <section className="our-success-stories">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2>Our Success Stories</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="slider-success">
                        <Slider {...sliderSettings}>
                          <div className="item">
                            <div className="row">
                              <div className="col-md-3"><img src={require('app/assets/images/slider-pic1.jpg')} className="img-responsive" alt="" /></div>
                              <div className="col-md-9">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac faucibus quam. Morbi arcu quam, mollis a ligula faucibus, porta scelerisque mi. Nunc non mauris tellus. Praesent vitae eros sed diam aliquam accumsan sit amet id enim.”</p>
                                <strong>Jane Smith</strong>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="row">
                              <div className="col-md-3"><img src={require('app/assets/images/293x297.jpg')} className="img-responsive" alt="" /></div>
                              <div className="col-md-9">
                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac faucibus quam. Morbi arcu quam, mollis a ligula faucibus, porta scelerisque mi. Nunc non mauris tellus. Praesent vitae eros sed diam aliquam accumsan sit amet id enim.”</p>
                                <strong>Jane Smith</strong>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <GuaranteedLargeBox
                content={guarantees.moneyBack}
                buttonTitle="ENROLL NOW"
                markImage={imgGuarantee100} />
            </div>
          }
        </div>
    )
  }
}


class HomePage extends React.Component<Home.Props> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { location } = this.props;
    return (
      <div className="cw-main-wrapper">
        <MainHeader pathName={location.pathname} />
          <Route exact path="/" component={Home} />
          <Route exact path={Routes.program} component={ProgramPage} />
          <Route path={Routes.guarantee} component={GuaranteePage} />
          <Route path={Routes.pricing} component={PricingPage} />
          <Route path={Routes.locations} component={LocationsPage} />
          <Route path={Routes.faq} component={FAQPage} />
          <Route path={Routes.aboutUs} component={AboutUsPage} />
          <Route path={Routes.privacy} component={PrivacyPolicyPage} />
          <Route path={Routes.hippa} component={HippaPrivacyPage} />
          <Route path={Routes.doctors} component={DoctorsPage} />
          <Route path={Routes.signup} component={SignUpPage} />
        <MainFooter />
      </div>
    );
  }
}

export default HomePage;
