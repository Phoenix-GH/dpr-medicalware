import * as React from 'react';
// Components
import BannerTextBox from 'app/components/common/containers/BannerTextBox';
import PlanCardBox from 'app/components/common/containers/PlanCardBox';
import ExpenseBox from 'app/components/common/containers/ExpenseBox';
import { GuaranteedLargeBox, GuaranteedSmallBox, GuaranteedReversedLargeBox } from 'app/components/common/containers/GuaranteedBox';
import CycleTableHeaderItem from 'app/components/common/CycleTableHeaderItem';
// Images
const imgEnrollPackage = require('app/assets/images/enroll-package.png');
const imgFda = require('app/assets/images/fda.png');
const imgMaintainPackage = require('app/assets/images/maintain-package.png');
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
// Constants
import guarantees from 'app/constants/guarantees';
import {
  bannerInfo,
  contractPlans,
  medicalExpenses,
  cureCycleHeader,
  cureCycles,
  medicalTesting,
  programStart
  } from './constants';
// CSS
import './pricing-page.scss';

export namespace Pricing {
  export interface Props {
    location: any;
  }
}


class PricingPage extends React.Component<Pricing.Props> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="cw-pricingPage">
        <div className="page-outer page-pricing">
          <section className="banner pricing-banner">
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <BannerTextBox
                            additionalClass="pricing"
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

          <section className="pay-as-you-lose-weight">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Pay as you lose weight</h2>
                  <p>Your plan can be scaled up or down at anytime.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="light-box2">
                    <h3>
                      <span className="title-outer">
                        <span className="int">
                          <span className="number">1</span>
                          <span className="title">ENROLL</span>
                        </span>
                      </span>
                    </h3>
                    <div className="int">
                      <h4>Testing /<br />Diagnostics Visits</h4>
                      <div className="price-box">
                        <strong><strong>$249</strong><span>99</span></strong>
                        <div className="clear"></div>
                        <span>one-time fee</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="light-box2">
                    <h3>
                      <span className="title-outer">
                        <span className="int">
                          <span className="number">2</span>
                          <span className="title">REPROGRAM</span>
                        </span>
                      </span>
                    </h3>
                    <div className="int">
                      <h4>Metabolic<br />Reprogramming Cycles</h4>
                      <div className="price-box">
                        <strong><strong>$89</strong><span>99</span><strong> - $139</strong><span>99</span></strong>
                        <div className="clear"></div>
                        <span>per week</span>
                      </div>
                      <p>
                        *No over buying. <strong>Scale up or down between 2-, 4- and 6-week cycles</strong><br />
                        Cancel anytime.<br />
                        One 12-week maintainance cycle required to keep results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="light-box2">
                    <h3>
                      <span className="title-outer">
                        <span className="int">
                          <span className="number">3</span>
                          <span className="title">MAINTAIN</span>
                        </span>
                      </span>
                    </h3>
                    <div className="int">
                      <h4>Maintenance<br />Cycles</h4>
                      <div className="price-box">
                        <strong><strong>$34</strong><span>99</span></strong>
                        <div className="clear"></div>
                        <span>per week</span>
                      </div>
                    </div>
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

          <section className="enroll-package">
            <div className="wiw-int">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="enroll-package">
                      <div className="package-image">
                        <img src={imgEnrollPackage} alt="" />
                      </div>
                      <div className="bx1">
                        <div className="int">
                          <span className="number">1</span>
                          <h3>ENROLL<br />PACKAGE</h3>
                          <strong><strong>$249</strong><span>99</span></strong>
                          <div className="clear"></div>
                          <span className="text-under">one-time fee*</span>
                        </div>
                      </div>
                      <div className="bx2">
                        <div className="bx2-1">
                          <div className="int">
                            <h4>Medical Testing</h4>
                            <strong>Visit #1</strong>
                            <ul>
                            {
                              medicalTesting.map(content =>
                                <li key={content}>
                                  <span></span>
                                  <strong>{content}</strong>
                                </li>
                              )
                            }
                            </ul>
                          </div>
                        </div>
                        <div className="bx2-2">
                          <div className="int">
                            <h4>Program Start</h4>
                            <strong>Visit #2</strong>
                            <ul>
                            {
                              programStart.map(content =>
                                <li key={content}>
                                  <span></span>
                                  <strong>{content}</strong>
                                </li>
                              )
                            }
                            </ul>
                          </div>
                        </div>
                        <div className="clear"></div>
                      </div>
                      <div className="clear"></div>
                      <div className="text-bottom">* Qualifies for Insurance Reimbursement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <GuaranteedSmallBox
            leftBlue
            buttonTitle="ENROLL NOW" />

          <section className="metabolic-reprogramming">
            <div className="mr-int">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2>Choose the cycle that fits you <strong>until you reach your goal weight...</strong></h2>
                    <table cellPadding="0" cellSpacing="0">
                      <tbody>
                        <tr>
                          <th>
                            <span className="number">2</span>
                            <h4>METABOLIC<br />REPROGRAMMING</h4>
                          </th>
                          {
                            cureCycleHeader.map(cycleHeader =>
                              <th key={cycleHeader.week}>
                                <CycleTableHeaderItem week={cycleHeader.week} price={cycleHeader.price}/>
                              </th>
                            )
                          }
                        </tr>
                        {
                          cureCycles.map((cycle, idx) =>
                            <tr key={idx}>
                              {
                                cycle.map((element, colIndex) =>
                                  colIndex===0 ?
                                  <td key={colIndex}>
                                    <span></span><strong>{element.contents[0]}</strong><div className="clear"></div>
                                    {element.contents.length > 1 &&
                                      <ul>
                                        {element.contents.map((content, rowIndex) =>
                                          (rowIndex > 0) && <li key={content}>{content}</li>
                                        )}
                                      </ul>}
                                  </td>
                                    :
                                  <td key={colIndex}>
                                    <ul>
                                      { element.contents.map((content, rowIndex) => {
                                        const seperates = content.split(element.strong);
                                        return (
                                          colIndex!==0 &&
                                            <li key={content}>
                                              {seperates[0]}<strong>{content.includes(element.strong) ? element.strong : ''}</strong>{seperates[1]}
                                            </li>
                                        );
                                      })}
                                    </ul>
                                  </td>
                                )
                              }
                            </tr>
                          )
                        }
                      </tbody>
                    </table>

                    <table cellPadding="0" cellSpacing="0" className="mobile-table">
                      <tbody>
                        <tr>
                          <th colSpan={2}>
                            <span className="number">2</span>
                            <h4>METABOLIC<br />REPROGRAMMING</h4>
                          </th>
                        </tr>
                        {
                          cureCycles.map((cycle, idx) =>
                            <tr key={idx}>
                              <td>
                                <span></span><strong>{cycle[0].contents[0]}</strong><div className="clear"></div>
                                {cycle[0].contents.length > 1 &&
                                  <ul>
                                    {cycle[0].contents.map((content, rowIndex) =>
                                      (rowIndex > 0) && <li key={content}>{content}</li>
                                    )}
                                  </ul>}
                              </td>
                              <td>
                              { cycle.map((element, colIndex) =>
                                colIndex!==0 && element.contents.map((content, rowIndex) => {
                                  const seperates = content.split(element.strong);
                                  const intValue = cureCycleHeader[colIndex-1].price;
                                  const realValue = (cureCycleHeader[colIndex-1].price * 100) % 100;
                                  return (
                                    colIndex!==0 &&
                                      <div key={rowIndex} className="item">
                                        <div className="top">
                                          <span>{cureCycleHeader[colIndex-1].week}-WEEK CYCLE</span>
                                        </div>
                                        <div className="bottom">
                                          <strong><strong>${intValue}</strong><span>{realValue}</span></strong>
                                          <span>per week</span>
                                        </div>
                                        <div className="content">
                                          {seperates[0]}<strong>{content.includes(element.strong) ? element.strong : ''}</strong>{seperates[1]}
                                        </div>
                                      </div>
                                  );
                                })
                              )}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <div className="table-bottom-text">Cycle fees qualify for insurance reimbursement.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cycle feels are billed in weekly installments.</div>
                    <div className="left-right-box">
                      <div className="lr-inner">
                        <div className="bx1">
                          <div className="img"><img src={imgFda} alt="" /></div>
                          <div className="txt">All new clients must start at the<br /><strong>2-Week Cycle</strong> in order to determine the tolerance to treatment.</div>
                        </div>
                        <div className="bx2">
                          <div className="txt">The Metabolic Reprogramming Cycles include customized treatment and meal plans as prescribed by your doctor, according to your test results from the Enroll phase.</div>
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <GuaranteedReversedLargeBox
            content={guarantees.signUp}
            buttonTitle="ENROLL NOW"
            markImage={imgGuarantee100}
          />

          <section className="maintain-package">
            <div className="wiw-int">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="enroll-package">
                      <div className="package-image"><img src={imgMaintainPackage} alt="" /></div>
                      <div className="bx1">
                        <div className="int">
                          <span className="number">3</span>
                          <h3>MAINTAIN<br />PACKAGE</h3>
                          <strong><strong>$34</strong><span>99</span></strong>
                          <div className="clear"></div>
                          <span className="text-under">per week</span>
                        </div>
                      </div>
                      <div className="bx2">
                        <div className="bx2-1">
                          <div className="int">
                            <h4>12-Week Cycle</h4>
                            <strong>Maintance Plan</strong>
                            <ul>
                              <li><span></span> Retains the results achieved in the Reprogram phase</li>
                              <li><span></span> Reduces treatment doses ("wean off" medications)***</li>
                              <li><span></span> Onging cycles to prevent relapse ("yo-yo" effect)</li>
                            </ul>
                            <p>*** Maintenance medications and injections are shipped in 12-week packages as prescribed by your doctor and according to your individualized treatment plan. Includes one In-Clinic/Online Rx Change Doctor Visit every 6 months.</p>
                          </div>
                        </div>
                      </div>
                      <div className="clear"></div>
                      <div className="text-bottom">* Qualifies for Insurance Reimbursement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <GuaranteedSmallBox
            buttonTitle="ENROLL NOW"
            leftBlue
          />

          <section className="secondary-colored-area">
            <div className="outer">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2>
                      No Long-Term Contracts
                      <strong>Flexible plan changes based on your needs</strong>
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <PlanCardBox plan={contractPlans[0]}/>
                  </div>
                  <div className="col-md-6">
                    <PlanCardBox plan={contractPlans[1]}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </section>

          <GuaranteedLargeBox
            content={guarantees.satisfication}
            buttonTitle="ENROLL NOW"
            markImage={imgGuarantee100}
          />

          <section className="insurance-reimbursement">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Simple, direct insurance reimbursement<strong>All insurance plans qualify</strong></h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <div className="insurance-box">
                    <h3>Out-of-Network<strong>Insurance Benefits Reimbursement</strong></h3>
                    <ul>
                      <li><span></span> Our doctors provide you with a signed letter of medical necessity</li>
                      <li><span></span> Our care specialists provide you with coded statements</li>
                      <li><span></span> You submit to your health insurance for direct reimbursement</li>
                    </ul>
                    <div className="bottom-txt">Our trained specialits will assist you with requesting and completing any reimbursement forms that your insurance carrier may require.<br />The Persona Doctors program qualifies for healthcare savings account (HSA) expenses.</div>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </section>

          <GuaranteedSmallBox
            buttonTitle="ENROLL NOW"
          />

          <section className="medical-expenses">
            <div className="ir-inner">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2>Obesity, overweight and related medical treatments<strong>are reimbursable medical expenses</strong></h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ExpenseBox expenseDetail={medicalExpenses[0]} />
                  </div>
                  <div className="col-md-6">
                    <ExpenseBox expenseDetail={medicalExpenses[1]} />
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
      </div>
    );
  }
}

export default PricingPage;
