import * as React from 'react';
// Component
import {
  GuaranteedLargeBox,
  GuaranteedSmallBox
  } from 'app/components/common/containers/GuaranteedBox';
import BannerTextBox from 'app/components/common/containers/BannerTextBox';
import ScheduleInfo from 'app/components/common/ScheduleInfo';
// Constants
import guarantees from 'app/constants/guarantees';
import {
  differences,
  bannerInfo,
  workSchedules
  } from './constants';
// Images
const imgBackground = require('app/assets/images/video-bg.png');
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
// Scss
import './about-us-page.scss';

export namespace AboutUs {
  export interface Props {
  }
}

class AboutUsPage extends  React.Component<AboutUs.Props> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="cw-about-us-page">
        <div className="page-outer page-about-us">

        <section className="banner about-us-banner">
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <BannerTextBox
                        additionalClass="aboutus"
                        buttonTitle="ENROLL NOW"
                        bannerInfo={bannerInfo} />
                    </div>
                    <div className="col-md-6">
                      <div className="video">
                        <div className="video-embed-outer">
                          <div className="videowrapper">
                            <iframe
                              title="Persona Doctors Video"
                              width="560" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4"
                              frameBorder="0"
                              allow="encrypted-media"
                              allowFullScreen>
                            </iframe>
                          </div>
                        </div>
                        <img src={imgBackground} className="videobg img-responsive" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="what-we-do">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h2>What We Do</h2>
                <p>We offer patent-pending metabolic reprogramming designed for rapid, safe and lasting weight loss</p>
                <div className="white-box">
                  <ul>
                    <li><span>•</span> Help you to <strong>set goals</strong></li>
                    <li><span>•</span> Conduct <strong>advanced medical testing</strong>, including 3D body imaging for goal tracking</li>
                    <li><span>•</span> Deliver a <strong>customized treatment plan</strong> made exclusively for you</li>
                    <li><span>•</span> Prescribe <strong>targeted medications</strong> to boost your metabolism and control your appetite</li>
                    <li><span>•</span> <strong>Track your progress</strong> and retest and readjust your treatment as necessary</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </section>

        <GuaranteedLargeBox
          content={guarantees.bookAppointment}
          markImage={imgGuarantee100}
          buttonTitle="MAKE AN APPOINTMENT"
          simpleButton />

        <section className="how-different">
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
                  differences.map((different, index) =>
                  <div key={index} className={`col-md-${12/differences.length}`}>
                    <div className="light-box">
                      <img src={different.image} alt={different.text} />
                      <h3>{different.text}</h3>
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
          //content={guarantees.bookAppointment}
          buttonTitle="ENROLL NOW"
          leftBlue
        />

        <section className="process">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>The Persona Process</h2>
              </div>
            </div>
            <div className="row">
              {
                workSchedules.map((workflow, index) =>
                <div className={`col-md-${12/workSchedules.length}`} key={index}>
                  <div className={`wiw-box bx${index + 1} shadow1`}>
                    <strong>{`${index + 1}.`}</strong>
                    <h3>{workflow.title}</h3>
                    <div className={workflow.contents.length > 1 ? 'ct2' : 'ct'}>
                      <h4>{workflow.contents[0].subTitle}</h4>
                      <ul className="list-arrow">
                        {
                          workflow.contents[0].contents.map(content =>
                            <li key={content}>{content}</li>
                          )
                        }
                      </ul>
                    </div>
                    <div className="squares">
                      <div className="sq-int">
                        <ScheduleInfo type="price"
                                  value={workflow.price}
                                  title1={workflow.priceSchedule}
                                  title2={workflow.priceDateUnit}/>
                        <ScheduleInfo type="time"
                                  value={workflow.period}
                                  title1={workflow.periodSchedule}
                                  title2={workflow.periodDateUnit}/>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              </div>
          </div>
        </section>

        <GuaranteedLargeBox
            content={guarantees.bookAppointment}
            markImage={imgGuarantee100}
            buttonTitle="MAKE AN APPOINTMENT"
            simpleButton />
      </div>
    </div>
    );
  }
}

export default AboutUsPage;
