import * as React from 'react';
// Component
import { GuaranteedLargeBox } from 'app/components/common/containers/GuaranteedBox';
import BannerTextBox from 'app/components/common/containers/BannerTextBox';
// Constants
import guarantees from 'app/constants/guarantees';
import { bannerInfo } from './constants';
// Images
const imgTab1 = require('app/assets/images/tab-1-img.png');
const imgTab2 = require('app/assets/images/tab-2-img.png');
const imgTab3 = require('app/assets/images/tab-3-img.png');
const imgTab4 = require('app/assets/images/tab-4-img.png');
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
// Style
import './faq-page.scss';

class FAQPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="cw-faqPage">
        <div className="page-outer page-faq">

          <section className="banner faq-banner">
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <BannerTextBox
                            additionalClass="faq"
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

          <section className="section-faq">

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Select the Category</h2>

                  <div id="tabs">
                    <ul>
                      <li>
                        <a href="#tabs-1">
                          <span className="triangle"></span>
                          <img src={imgTab1} alt="Persona Doctors&trade;" className="img-responsive" />
                          Persona Doctors&trade;
                        </a>
                      </li>
                      <li>
                        <a href="#tabs-2">
                          <span className="triangle"></span>
                          <img src={imgTab2} alt="Medica Weight Loss" className="img-responsive" />
                          Medical<br />Weight Loss
                        </a>
                      </li>
                      <li>
                        <a href="#tabs-3">
                          <span className="triangle"></span>
                          <img src={imgTab3} alt="B12 Energy Injections" className="img-responsive" />
                          B12 Energy<br />Injections
                        </a>
                      </li>
                      <li>
                        <a href="#tabs-4">
                          <span className="triangle"></span>
                          <img src={imgTab4} alt="Liposonix Spot Fat Reduction" className="img-responsive" />
                          Liposonix Spot<br />Fat Reduction
                        </a>
                      </li>
                    </ul>
                    <div className="clear"></div>
                    <div id="tabs-1">
                      <div id="accordion1">
                        <h3>What makes Persona DoctorsTM different?</h3>
                        <div>
                          <p>It’s simple: we know that a program which requires you to change your life will not work. The Persona Doctors program is <strong>flexible</strong> so it <strong>adapts</strong> to fit into your <strong>unique lifestyle</strong>.</p>
                          <p>Persona Doctors offers <strong>medically supervised</strong> weight loss and hormone therapies on a very personal level. Our program are custom tailored to your <strong>blood, metabolism and genetic profiles</strong> and all your office visits are with licesed physician.</p>
                          <p>Along with individualized nutritional and exercise counseling, another of the real benefits of our program is the opportunity to talk to our doctor about the option of using <strong>FDA-approved</strong> prescription appetite suppressant to decrease your appetite and eliminate cravings for salts and sugars - giving you the jumb start you’ve been looking for.</p>
                        </div>
                        <h3>Will I actually see a doctor?</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>How much do your program costs?</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Can I Get the Same Services and Products from Your Competitors?</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                      </div>
                    </div>
                    <div id="tabs-2">
                      <div id="accordion2">
                        <h3>Section 21</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 22</h3>
                        <div>
                          <h4>Can I Get the Same Services and Products from Your Competitors?</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 23</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 24</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                      </div>
                    </div>
                    <div id="tabs-3">
                      <div id="accordion3">
                        <h3>Section 31</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 32</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 33</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 34</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                      </div>
                    </div>
                    <div id="tabs-4">
                      <div id="accordion4">
                        <h3>Section 41</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 42</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 43</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                        <h3>Section 44</h3>
                        <div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nibh vel ante tempor mollis in at arcu. Nunc ac dapibus justo. Ut aliquet malesuada ante at congue. Morbi posuere, urna at condimentum dictum, purus ex blandit arcu, id ornare lectus mauris vel ipsum. Aliquam tristique auctor nunc malesuada consequat. Nunc pellentesque commodo magna, vel malesuada metus molestie quis. Phasellus viverra dictum purus, vel sollicitudin lacus mollis vitae. Vivamus et sollicitudin purus, non ornare massa.</p>
                          <p>Aenean rhoncus purus et est egestas pharetra. Etiam convallis, nulla ac rhoncus lobortis, enim tortor vulputate orci, vitae convallis lectus odio a massa. Quisque eu ornare augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus dapibus nulla non egestas finibus. Donec risus ante, posuere non facilisis ac, ullamcorper ac sem. Nulla bibendum accumsan lacinia.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </section>

          <GuaranteedLargeBox
            content={guarantees.satisfication}
            markImage={imgGuarantee100}
            buttonTitle="JOIN NOW" />
        </div>
      </div>
    );
  }
}

export default FAQPage;
