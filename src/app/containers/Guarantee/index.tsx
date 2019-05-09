import * as React from 'react';
// Components
import BannerTextBox from 'app/components/common/containers/BannerTextBox';
import { GuaranteedLargeBox, GuaranteedSmallBox } from 'app/components/common/containers/GuaranteedBox';
import GuaranteeWorkBox from 'app/components/common/containers/GuaranteeWorkBox';
import RefundProcessBox from 'app/components/common/containers/RefundProcessBox';
// Constants
import guarantees from 'app/constants/guarantees';
import {
  bannerInfo,
  guaranteeWorks,
  refundProcesses
} from './constants';
// Images
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
// Style
import './guarantee-page.scss';

class GuaranteePage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="cw-guaranteePage">
        <div className="page-outer page-guarantee">
          <section className="banner guarantee-banner">
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-8">
                        <BannerTextBox
                              additionalClass="guarantee"
                              buttonTitle="ENROLL NOW"
                              bannerInfo={bannerInfo} />
                      </div>
                      <div className="col-md-4">

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="promise">
            <div className="promise-outer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2>The Persona Doctors&trade; Promise</h2>
                    <span className="subtitle">There's nothing more important to us than your success, safety and satisfaction.<br />We guarantee the following or your money back:</span>
                    <ul>
                      <li><span>• </span>Safe weight loss within 30 days</li>
                      <li><span>• </span>Measurable Results</li>
                      <li><span>• </span>Physician-designed and directed program</li>
                      <li><span>• </span>The most advanced medications</li>
                      <li><span>• </span>Excellent customer service</li>
                    </ul>
                    <a href="#" className="button2">LEARN MORE</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12"><img src={imgGuarantee100} alt="100% Money-back Guarantee" className="guarantee100 img-responsive" /></div>
                </div>
              </div>
            </div>
          </section>

          <section className="how-guarantee-works">
            <div className="hgw-outer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2>How Our Guarantee Works</h2>
                  </div>
                </div>
                <div className="row">
                {
                  guaranteeWorks.map((content, index) =>
                    <div key={index} className={`col-md-${12/guaranteeWorks.length}`}>
                      <GuaranteeWorkBox content={content}/>
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

          <section className="refund-process">
            <div className="rp-outer">
              <div className="container">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <h2>The Refund Process - Guarantee</h2>
                    <p>At Persona Doctors™ our results-based money back guarantee<br />is based on a simple common-sense verify and refund process.</p>
                    {
                      refundProcesses.map((process, index) =>
                        <RefundProcessBox key={process.title} processDetail={process} index={index}/>
                      )
                    }
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </section>

          <GuaranteedLargeBox
            content={guarantees.noRisk}
            markImage={imgGuarantee100}
            buttonTitle="ENROLL NOW" />
        </div>
      </div>
    );
  }
}

export default GuaranteePage;
