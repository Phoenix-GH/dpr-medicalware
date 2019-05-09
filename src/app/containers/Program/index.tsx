import * as React from 'react';
import { GuaranteedLargeBox, GuaranteedSmallBox } from 'app/components/common/containers/GuaranteedBox';

// Constants
import {
  medicalTestings,
  preScribings,
  dietSupplements,
  burnInjections,
  metabolicMedications,

  phases,
} from './constants';
import guarantees from 'app/constants/guarantees';
// Images
const imgPhase1 = require('app/assets/images/enroll1.png');
const imgPhase2 = require('app/assets/images/reprogram1.png');
const imgPhase21 = require('app/assets/images/reprogram2.png');
const imgPhase3 = require('app/assets/images/maintain1.png');
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
const imgForFemales = require('app/assets/images/for-females-img.png');
const imgForMales = require('app/assets/images/for-males-img.png');
const imgInjectionsBox = require('app/assets/images/img-injections-box.png');
const imgPillsBox = require('app/assets/images/img-pills-box.png');
const imgMaintainLasting = require('app/assets/images/maintain-lasting.png');
const imgMaintainLasting2 = require('app/assets/images/maintain-lasting2.png');
import './program-page.scss';

const TestingsTable = ({ testings }) => (
  <div className="row">
    <div className="col-md-12">
      <div className="enroll-white-box">
        <div className="image1">
          <div className="image1-inner">
            <img src={testings.image} alt="" />
          </div>
        </div>
        <h2>{testings.title}</h2>
          <p>{testings.description}{testings.description1 && <br/>}{testings.description1}</p>
        <ul>
          {
            testings.items.map((item, index) =>
              <li key={index}>
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-1"><img src={item.image} alt="" className="icon-icon-icon" /></div>
                  <div className="col-md-4">
                    <h3>{item.title}</h3>
                    <strong>{item.description}</strong>
                  </div>
                  <div className="col-md-6">
                    <ul>
                      {
                        item.contents.map((content, index) =>
                          <li key={index}>{content}</li>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  </div>
);

/*const ReprogramCyclesTable = ({ cycles }) => (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Metabolic Reprogramming Cycles</h2>
          <p>3 proven weight loss cycles to choose from until you reach your target weight</p>
        </div>
      </div>
      {
        cycles.map((cycle, index) =>
          <div className="row item" key={index}>
            <div className="col-md-3">
              <div className="table-hd2">
                <div className="img"><img src={cycle.image} alt="" /></div>
                <div className="top">
                  <span>{cycle.cycle}</span>
                </div>
                <div className="bottom">
                  <strong>{cycle.leftTitle1}</strong>
                </div>
                <div className="bottom2">{cycle.leftTitle2}</div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 description-col">
              <h3>{cycle.title}<br />Metabolic Reprogramming</h3>
              <ul>
                {
                  cycle.descriptions.map((description, index) =>
                    <li key={index}><span></span>{description}</li>
                  )
                }
              </ul>
            </div>
            <div className="col-md-4 bullets-col">
              <ul>
                {
                  cycle.contents.map((content, index) =>
                    <li key={index}>{content}</li>
                  )
                }
              </ul>
            </div>
          </div>
        )
      }
    </div>
);*/

const PhaseBox = ({ phase, type, imageClassName, idx }) => (
  <div className="container">
    {type === 'enroll' &&
      <div className="row">
        <div className="col-md-12">
          <h2>{phase.headerTitle}</h2>
          <p>{phase.headerDescription}</p>
        </div>
      </div>
    }
    <div className={`${type}-box`}>
      <div className="row">
        <div className="col-md-4">
          <span className="num"><strong>{idx}</strong></span>
          <h3>{phase.title}</h3>
          <p>{phase.description}</p>
          <img src={phase.image} alt="" className={imageClassName} />
        </div>
        <div className="col-md-8">
          <h4>{phase.contentTitle}</h4>
          {phase.contentTitle1 && <p>{phase.contentTitle1}</p>}
          <ul>
            {
              phase.contents.map((content, index) =>
                <li key={index}><span></span><strong>{content.strong}</strong> {content.text}</li>
              )
            }
          </ul>
          {phase.buttomTitle && <p>{phase.buttomTitle}</p>}
        </div>
      </div>
    </div>
  </div>
);


export namespace Program {
  export interface Props {
    location: any,
  }
}

class ProgramPage extends React.Component<Program.Props> {
  render() {
    return (
      <div className="cw-programPage">
        <div className="page-outer page-program">
          <section className="fmr">
            <div className="fmr-outer">
              <div className="container">
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <h2>Lose Weight Fast with Metabolic Reprogramming&#8480;</h2>
                    <p>Metabolic ReprogrammingSM restores your metabolism to its optimal state</p>
                    <div className="box-number1 bn1">
                      <h3>
                        <span><strong>1</strong></span>
                        ENROLL
                      </h3>
                      <div className="box-centered-1">
                        <div className="bx2">
                          <h4>Advanced Medical Testing</h4>
                        </div>
                        <div className="bx1">
                          <img src={imgPhase1} alt="" />
                        </div>
                        <div className="clear"></div>

                        <div className="blue-box">
                          First, we find <strong>analyze</strong> your body and chemistry to:
                          <ul>
                          <li>• <strong>Pinpoint</strong> the root causes of your weight gain</li>
										      <li>• <strong>Set</strong> your target weight loss goals</li>
										      <li>• <strong>Ensure</strong> safe and rapid long-term results</li>>
                          </ul>
                        </div>

                        <div className="squares">
                          <div className="sq-int">
                            <div className="price">
                              <span>&nbsp;</span>
                              <strong><strong>$249</strong><span>99</span></strong>
                              <span>One-time fee</span>
                            </div>
                            <div className="time">
                              <span>2 visits within</span>
                              <strong>7</strong>
                              <span>days</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <strong className="text-out">Qualifies for insurance reimbursement</strong>
                    <div className="box-number1 bn2">
                      <h3>
                        <span><strong>2</strong></span>
                        REPROGRAM
                      </h3>
                      <div className="box-centered-2">
                        <div className="bx2 bbbb2">
                          <h4>Metabolic Reprogramming Cycles</h4>
                        </div>
                        <div className="bx1">
                          <img src={imgPhase2} alt="" />
                        </div>
                        <div className="clear"></div>

                        <div className="blue-box2">
                          Next, we prescribe <strong>powerful FDA-approved</strong> medications in targeted cycles to:
                          <ul>
                            <li>• <strong>Restore</strong> appetite and eliminate cravings for salt and sugar</li>
                            <li>• <strong>Increase</strong> metabolism and burn calories and fatty deposits</li>
                            <li>• <strong>Boost</strong> energy and regulate the body?s natural chemical balance</li>
                          </ul>

                          <div className="clear"></div>
                          <span className="blue-triangle1"></span>
                        </div>
                        <div className="light-blue-box">
                          <div className="bbb1">
                            <img src={imgPhase21} alt="" />
                          </div>
                          <div className="bbb2">
                            <strong>If you get stuck or hit a weight loss plateau, we will:</strong>
                            <ul>
                              <li>• <strong>Retest</strong> and reanalyze your body to identify the problem</li>
                              <li>• <strong>Change</strong> your medication and dosages to re-trigger weight loss</li>
                              <li>• <strong>Recharge</strong> your metabolic cycles with booster injections</li>
                            </ul>
                          </div>
                          <div className="clear"></div>
                        </div>

                        <div className="squares">
                          <div className="sq-int">
                            <div className="price price2">
                              <span>&nbsp;</span>
                              <strong><strong>$89</strong><span>99</span><strong> - $139</strong><span>99</span></strong>
                              <span>per week*</span>
                            </div>
                            <div className="time">
                              <span>Typically</span>
                              <strong>6</strong>
                              <span>months</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <strong className="text-out">*Flexible 2-week, 4-week & 6-week treatment cycles</strong>
                    <div className="box-number1 bn3">
                      <h3>
                        <span><strong>3</strong></span>
                        MAINTAIN
                      </h3>
                      <div className="box-centered-1">
                        <div className="bx2">
                          <h4>Maintenance Cycles</h4>
                        </div>
                        <div className="bx1">
                          <img src={imgPhase3} alt="" />
                        </div>
                        <div className="clear"></div>

                        <div className="blue-box3">
                          <strong>Finally, we keep the weight off by:</strong>
                          <ul>
                            <li>• <strong>Lower</strong> medication frequency and dosage</li>
                            <li>• <strong>Less</strong> frequent visits to reinforce long-term results</li>
                            <li>• <strong>Monitor</strong> the results constantly to adapt to changes</li>
                          </ul>
                        </div>

                        <div className="squares">
                          <div className="sq-int">
                            <div className="price">
                              <span>&nbsp;</span>
                              <strong><strong>$34</strong><span>99</span></strong>
                              <span>per week</span>
                            </div>
                            <div className="time">
                              <span>After</span>
                              <strong>6</strong>
                              <span>months</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <strong className="text-out">Affordable 12-week maintenance cycles</strong>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </div>
          </section>

          <GuaranteedLargeBox
              content={guarantees.satisfication}
              leftBlue
              buttonTitle="ENROLL NOW"
              markImage={imgGuarantee100} />

          <section className="enroll-phase">
            <PhaseBox type="enroll" imageClassName="enroll-image" idx={1} phase={phases[0]} />
          </section>

          <section className="enroll-phase-area-1">
            <div className="container">
              <TestingsTable testings={medicalTestings} />
            </div>
          </section>

          <section className="enroll-phase-area-2">
            <div className="container">
              <TestingsTable testings={preScribings} />
            </div>
          </section>

          <GuaranteedSmallBox
              leftBlue
              buttonTitle="ENROLL NOW" />

          <section className="reprogram-phase">
            <PhaseBox type="reprogram" imageClassName="reprogram-image" idx={2} phase={phases[1]} />
          </section>

          <section className="metabolic-weight-loss-rx-medications">
            <div className="container">
              <TestingsTable testings={metabolicMedications} />
              <div className="row">
                <div className="col-md-12">
                  <div className="for-people">
                    <div className="col-md-6">
                      <div className="for-females">
                        <div className="row">
                          <div className="col-md-5">
                            <img src={imgForFemales} alt="" />
                          </div>
                          <div className="col-md-7">
                            <h4>For Females</h4>
                            <ul>
                              <li>Reduces fat accumulation</li>
                              <li>Relieves hot flashes, insomnia</li>
                              <li>Eliminates fatigue, low sex drive</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="for-males">
                        <div className="row">
                          <div className="col-md-5">
                            <img src={imgForMales} alt="" />
                          </div>
                          <div className="col-md-7">
                            <h4>For Males</h4>
                            <ul>
                              <li>Reduces fat accumulation</li>
                              <li>Improves mood, focus and alertness</li>
                              <li>Increases libido</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="info-txt">* Medication dosages and what is prescribed is based on each individual’s medical testing and is at the sole discretion of the treating physician</p>
            </div>
          </section>

          <section className="energy-dat-burn-injections">
            <div className="container">
              <TestingsTable testings={burnInjections} />
              <p className="info-txt">* Injection strength is compared to commercially available Vitamin B12</p>
              <div className="questions">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Why take a shot?</h5>
                    <p>Injection vs. Pill</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="inner-one">
                          <h6><img src={imgInjectionsBox} alt="" /> Injections</h6>
                          <ul>
                            <li><strong><span></span>Faster effect</strong></li>
                            <li><strong><span></span>100% Absorption</strong></li>
                            <li><strong><span></span>More Powerful</strong></li>
                            <li><strong><span></span>Lasts Longer</strong></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="inner-one">
                          <h6><img src={imgPillsBox} alt="" /> Pill</h6>
                          <ul>
                            <li><span></span>Slower effect</li>
                            <li><span></span>3% Absorption</li>
                            <li><span></span>Less Potent</li>
                            <li><span></span>Depleted Quicker</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5>Are the injections safe?</h5>
                    <p className="lefty">Vitamin B12 is water-soluble and is not stored in the body. Unlike energy drinks that contain caffeine and only last for a few hours, B12 injections provide several days of constant energy.</p>
                    <p className="lefty">Made in the U.S.A. - Persona DoctorsTM injectables are compounded by licensed pharmacists in licensed sterile pharmacies and regulated by stringent government guidelines.</p>
                  </div>
                </div>
              </div>
              <p className="info-txt">* Medication dosages and what is prescribed is based on each individual’s medical testing and is at the sole discretion of the treating physician</p>
            </div>
          </section>

          <section className="diet-supplements-helper-medications">
            <div className="container">
              <TestingsTable testings={dietSupplements} />
              <p className="info-txt">* Medication dosages and what is prescribed is based on each individual’s medical testing and is at the sole discretion of the treating physician</p>
            </div>
          </section>

          <GuaranteedSmallBox
            buttonTitle="ENROLL NOW"
            leftBlue />

          <section className="maintain-phase">
            <PhaseBox type="maintain" imageClassName="reprogram-image" idx={3} phase={phases[2]} />
          </section>

          <section className="maintain-lasting">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="maintain-white-box">
                    <div className="image1">
                      <div className="image1-inner">
                        <img src={imgMaintainLasting} alt="" />
                      </div>
                    </div>
                    <h2>Maintain Lasting Results</h2>
                    <p>Ongoing lifetime support to prevent weight loss rebound</p>

                    <div className="maintain-inside-box">
                      <div className="row">
                        <div className="col-md-4">
                          <img src={imgMaintainLasting2} alt="" />
                        </div>
                        <div className="col-md-8">
                          <h3>12-Week Maintenance Cycles</h3>
                          <ul>
                            <li><span></span> Retains the results of weight loss with reduced treatment doses</li>
                            <li><span></span> Eat satisfying portions of your own real food (no bars or shakes)</li>
                            <li><span></span> Affordable, low-cost maintenance fees with home delivery</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="maintain-phrase1">
                    <p>The secret to long-lasting weight loss <strong>is Metabolic Reprogramming&#8480;</strong></p>
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

export default ProgramPage;
