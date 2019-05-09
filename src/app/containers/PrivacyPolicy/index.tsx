import * as React from 'react';
// Component
import { GuaranteedLoseXBox } from 'app/components/common/containers/GuaranteedBox';
import BannerTextBox from 'app/components/common/containers/BannerTextBox';
// Constants
import guarantees from 'app/constants/guarantees';
import {
  bannerInfo
  } from './constants';
// Images
const imgBannerBackground = require('app/assets/images/bg-pp.png');
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
// Style
import './privacy-policy-page.scss';

class PrivacyPolicyPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="cw-privay-policy-page">
        <div className="page-outer page-privacy-policy">

          <section className="banner privacy-policy-banner">
            <div className="banner-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-5">
                        <img src={imgBannerBackground} className="left-image img-responsive" alt="" />
                      </div>
                      <div className="col-md-7">
                        <BannerTextBox
                            additionalClass="privacyPractice"
                            bannerInfo={bannerInfo} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="privacy-policy">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Online Privacy Practices</h2>
                  <div id="accordion-pp1">
                    <h3>I.  About this Privacy Policy and Using Our Site and Tools</h3>
                    <div>
                      <p>This Privacy Policy applies to the Persona-Doctors.com website, information as provided by Persona Doctors and its subsidiaries. Within this privacy policy, the name "Persona-Doctors.com" pertains to any and all websites hosted and/or operated by Persona Doctors, including co-branded, product and divisional websites.</p>
                          <p>The Persona-Doctors.com website contains links to other sites. Once you enter another website, be aware that Persona-Doctors.com is not responsible for the privacy practices of such other sites. We encourage you to look for and review the privacy statements of each and every website that you visit through a link on Persona-Doctors.com. We hope that reading our Privacy Policy gives you a clear idea of how we manage information about you.</p>
                          <p>While you may use some of the functionality of Persona-Doctors.com without registration, many of the specific tools and services on our website require registration. If you use our website without registering, the only information we collect will be Non-Personal Information through the use of Cookies or Web Beacons. If you choose to register with our website for certain services, we require you to submit Personally Identifiable Information. Depending on the tool or service you have selected, we may also collect Personal Health Information. You are responsible for ensuring the accuracy of the Personally Identifiable Information and Personal Health Information you submit to Persona-Doctors.com. Inaccurate information will affect the information you receive when using our site and tools and our ability to contact you as contemplated in this Privacy Policy. For example, your email address should be kept current because that it is how we communicate with you.</p>
                    </div>

                    <h3>II.  Non-Personal Information We Collect About You</h3>
                    <div>
                      <p>Even if you do not register with Persona-Doctors.com, we collect Non-Personal Information about your use of our website, special promotions and newsletters.</p>
                      <p>The Persona-Doctors.com website contains links to other sites. Once you enter another website, be aware that Persona-Doctors.com is not responsible for the privacy practices of such other sites. We encourage you to look for and review the privacy statements of each and every website that you visit through a link on Persona-Doctors.com. We hope that reading our Privacy Policy gives you a clear idea of how we manage information about you.</p>

                      <h4>A.  Cookies</h4>
                      <p>We collect Non-Personal Information about your use of our website and your use of the websites of selected sponsors and advertisers through the use of Cookies. Persona-Doctors.com assigns every computer a different Cookie. The information collected by Cookies (i) helps us dynamically generate advertising and content on web pages or in newsletters, (ii) allows us to statistically monitor how many people are using our website and selected sponsors' and advertisers' sites, (iii) how many people open our emails, and (iv) for what purposes these actions are being taken. We may use Cookie information to target certain advertisements to your browser or to determine the popularity of certain content or advertisements. Cookies are also used to facilitate a user's log-in, as navigation aides and as session timers, but not to retain Personal Health Information about you. Cookies used by Persona-Doctors.com are also used to restrict underage use of the tools.</p>
                      <p>Your browser software can be set to reject all Cookies. Most browsers offer instructions on how to reset the browser to reject Cookies in the "Help" section of the toolbar. If you reject our Cookies, certain of the functions and conveniences of our website may not work properly but you do not have to accept our Cookies in order to productively use our site. We do not link Non-Personal Information from Cookies to Personally Identifiable Information without your permission and do not use Cookies to collect or store Personal Health Information about you.</p>

                      <h4>B.  Web Beacons</h4>
                      <p>We also may use Web Beacons to collect Non-Personal Information about your use of our website and the websites of selected sponsors and advertisers, and your use of special promotions or newsletters. The information collected by Web Beacons allows us to statistically monitor your usage of our websites.</p>
                      <p>Our Web Beacons are not used to track your activity outside of our websites. We do not link Non-Personal Information from Web Beacons to Personally Identifiable Information without your permission and do not use Web Beacons to collect or store Personal Health Information about you.</p>

                      <h4>C.  Third-Party Web Beacons</h4>
                      <p>We use third-party web beacons to help analyze where visitors go and what they do while visiting our website.  These third party beacons may also use anonymous information about your visits to this and other websites in order to improve its products and services and provide advertisements about goods and services of interest to you.</p>

                      <h4>D.  Opt-out of Third-Party Display Advertising</h4>
                      <p>You can opt-out of Google Analytics for Display Advertising and customize Google Display Network ads using the following link Ads Settings.</p>
                    </div>

                    <h3>III.  Personally Identifiable Information We Collect About You</h3>
                    <div>
                      <p>We collect Personally Identifiable Information that you provide to us when you register as a member of Persona-Doctors.com and/or when you update your member profile.  We use the Personally Identifiable Information that you provide to respond to your questions, provide you the specific services you select, send you emails about website maintenance and updates, and inform you of significant changes to this Privacy Policy.</p>
                        <p>The Persona-Doctors.com website contains links to other sites. Once you enter another website, be aware that Persona-Doctors.com is not responsible for the privacy practices of such other sites. We encourage you to look for and review the privacy statements of each and every website that you visit through a link on Persona-Doctors.com. We hope that reading our Privacy Policy gives you a clear idea of how we manage information about you.</p>

                      <h4>A.  Emails You Send to Persona-Doctors.com</h4>
                      <p>This Privacy Policy does not protect you when you send content, business information, ideas, concepts or inventions to Persona-Doctors.com by email. If you want to keep content or business information, ideas, concepts or inventions private or proprietary, do not send them in an email to Persona-Doctors.com.</p>
                      <p>We try to answer every email within 48 business hours, but are not always able to do so.</p>

                      <h4>B.  Website Registration and Interactive Tools on Persona-Doctors.com</h4>
                      <p>After you have registered as a member of Persona-Doctors.com, you may choose to use certain interactive content, tools and services that may ask you to voluntarily provide other types of information about yourself including Personal Health Information.</p>

                      <h4>C.  Children</h4>
                      <p>We are committed to protecting the privacy of children.  We do not collect Personally Identifiable Information from any person we actually know is under the age of 13.  A parent or guardian is solely responsible for providing supervision of the minor's use of Persona-Doctors.com.  The parent or guardian assumes full responsibility for ensuring that the registration information is kept secure and that the information submitted is accurate.  The parent or guardian also assumes full responsibility for the interpretation and use of any information or suggestions provided through Persona-Doctors.com for the minor.  Persona-Doctors.com does not sell products for purchase by children.  We sell children's products for purchase by adults.  If you are under 18, you may use Persona-Doctors.com only with the involvement of a parent or guardian.</p>

                      <h4>D.  Market Research</h4>
                      <p>From time to time the Persona-Doctors.com marketing department, or operations contractors acting on its behalf, may conduct online research surveys in order to gather feedback about our site through email invitations, pop-up surveys or online focus groups. When participating in a survey, we may ask you to submit Personally Identifiable Information. This Personally Identifiable Information is used for research purposes, and is not used for sales solicitations. When a third party sponsors a survey, Aggregate Information of the survey results is reported to the sponsor. Aggregate data does not contain any information that could be used to contact or identify you. Personally Identifiable Information collected through market research will only be used by Persona-Doctors.com and its operations contractors and will not be given or sold to a third party without your consent.</p>
                    </div>

                    <h3>IV. Disclosure of Your Information</h3>
                    <div>
                      <p>Except as set forth in this Privacy Policy or as specifically agreed to by you, Persona-Doctors.com will not disclose any Personally Identifiable or Personal Health Information it gathers from you on our website. We will only release Personally Identifiable or Personal Health Information to third parties: (1) to comply with valid legal requirements such as a law, regulation, search warrant, subpoena or court order; or (2) in special cases, such as a physical threat to you or others. In the event that we are legally compelled to disclose your Personally Identifiable or Personal Health Information to a third party, we will attempt to notify you unless doing so would violate the law or court order. In addition, we may disclose Personal Information as described below.</p>
                      <p>Persona-Doctors.com operations and maintenance contractors sometimes have limited access to your Personally Identifiable Information in the course of providing products or services to Persona-Doctors.com. These contractors include vendors and suppliers that provide us with technology, services, and/or content related to better operation and maintenance of our website. Access to your Personally Identifiable Information by these contractors is limited to the information reasonably necessary for the contractor to perform its limited function for Persona-Doctors.com. We also contractually require that our operations and maintenance contractors:</p>
                      <ol className="list-1">
                          <li>protect the privacy of your Personally Identifiable Information consistent with this Privacy Policy</li>
                          <li>not use or disclose your Personally Identifiable Information for any purpose other than providing us with products and services</li>
                      </ol>
                    </div>

                    <h3>V. How Persona-Doctors.com Handles Privacy and Security Internally</h3>
                    <div>
                      <p>Listed below are some of the security procedures that Persona-Doctors.com uses to protect your privacy:</p>
                      <p>Persona-Doctors.com operations and maintenance contractors sometimes have limited access to your Personally Identifiable Information in the course of providing products or services to Persona-Doctors.com. These contractors include vendors and suppliers that provide us with technology, services, and/or content related to better operation and maintenance of our website. Access to your Personally Identifiable Information by these contractors is limited to the information reasonably necessary for the contractor to perform its limited function for Persona-Doctors.com. We also contractually require that our operations and maintenance contractors:</p>
                      <ol className="list-1">
                        <li>Requires both a personal username and a password in order for users to access their Personally Identifiable Information or Personal Health Information.</li>
                        <li>Uses firewalls to protect information held in our servers.</li>
                        <li>Utilizes encryption in transmitting Personally Identifiable Information to our servers.</li>
                        <li>Closely monitors the limited number of Persona-Doctors.com employees who have potential access to your Personally Identifiable Information.</li>
                        <li>Requires all Persona-Doctors.com employees to abide by our Privacy Policy and be subject to disciplinary action if they violate it.</li>
                        <li>Backs-up our systems to protect the integrity of your Personally Identifiable and Personal Health Information.</li>
                        <li>Provides secure messaging within the Persona-Doctors.com so that information related to your personal health is sent through a secure, encrypted connection.</li>
                        <li>All credit card transactions are processed through Verisign. Your information is encrypted via a "key" encryption and decoded at Verisign, which allows them to process and authorize your information.</li>
                      </ol>
                      <p>Despite Persona-Doctors.com's efforts to protect your Personally Identifiable Information and Personal Health Information, there is always some risk that an unauthorized third party may find a way around our security systems or that transmissions of your information over the Internet will be intercepted.</p>
                    </div>

                    <h3>VI. Updating Your Information and Contacting Persona-Doctors.com</h3>
                    <div>
                      <h4>A. Updating Your Personally Identifiable Information</h4>
                      <p>Persona-Doctors.com pages that collect and store self-reported data allow you to correct, update or review information you have submitted by going back to the specific page, logging-in and making the desired changes.</p>

                      <h4>B. Removing Your Personal Information</h4>
                      <p>If you have a complaint or problem, including removing your information from our systems, please email us at <a href="mailto:info@personadoctors.com">info@personadoctors.com</a>.  Our customer service department will forward your complaint to the appropriate internal Persona-Doctors.com department for a response or resolution.  We try to answer every email within 48 business hours, but may not always able to do so.</p>
                      <p>If you do not receive adequate resolution of a privacy related problem, you may write to Persona-Doctors.com at:</p>
                      <p className="hippa-notice-contact"><strong>Persona Doctors</strong><br /><strong>ATTN:  Webmaster/Marketing</strong><br />P.O. Box 34977<br />Bethesda, Maryland 20827-0977</p>

                      <h4>C. Limitations on Removing or Changing Information</h4>
                      <p>Upon your request, we will delete your Personally Identifiable or Personal Health Information from our active databases and where feasible from our back-up media.  You should be aware that it is not technologically possible to remove each and every record of the information you have provided to Persona-Doctors.com from our servers.</p>

                    </div>

                    <h3>VII. Changes to this Privacy Policy</h3>
                    <div>
                      <p>Persona-Doctors.com retains the right to update this privacy policy at its general discretion according to the needs of the business, its consumers or in accordance with the mandates of federal and state law.</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h2>Terms & Conditions of Use</h2>
                  <p>The Persona Doctors Website ("Site").</p>
                  <p><strong>PLEASE READ THE FOLLOWING TERMS AND CONDITIONS RELATING TO YOUR USE OF OUR SITE CAREFULLY.</strong></p>
                  <p>Your use of our Site constitutes your agreement to follow and be bound by these terms (the "Agreement") made in Montgomery County, Maryland.</p>
                  <div id="accordion-pp2">
                    <h3>1. Acceptable Use Policy</h3>
                    <div>
                      <p>By using the Site, you agree to comply with this Policy and to indemnify Persona Doctors against any claims by third parties arising from your violation of this Policy. In general, you must exercise judgment and responsibility with respect to your use of our Site.</p>
                      <p>You may only use the Site for lawful purposes and may not use the Site to harm others. Without limiting the generality of the foregoing, you may not:</p>
                      <ul className="list-1">
                              <li>Use the Site in violation of any law or regulation governing Persona Doctors' business or activities, including without limitation the laws and regulations governing unfair competition, false advertising, consumer protection, obscenity, spamming, and privacy.</li>
                              <li>Use the Site in a manner that infringes another’s copyrights, patents, trademarks, service marks, trade names, trade secrets or other intellectual property rights, or rights of publicity.</li>
                              <li>Use the Site to engage in libel, defamation, unlawful, harassment, and misappropriation of trade secrets, intentional misrepresentation or fraud, or wrongful publication of private information.</li>
                              <li>Post or transmit any unlawful, threatening, libelous, defamatory, obscene, inflammatory, pornographic, profane material, hate speech, or any material that could constitute or encourage conduct that would be considered a criminal offense, give rise to civil liability, or otherwise violate any law.</li>
                              <li>Use the Site in a manner that presents a security risk or that may interfere with the operation of the Site.</li>
                              <li>Use the Site to gain illegal or unauthorized access to other computers or networks through hacking or other means.</li>
                              <li>Introduce viruses, Trojan horses, worms, malware or spyware or other computer programming routines that damage, interfere with, intercept, or expropriate any system, data, or personal information.</li>
                              <li>Assist or permit any person to engage in any of the activities described above.</li>
                          </ul>
                          <p>While you may use some of the functionality of Persona-Doctors.com without registration, many of the specific tools and services on our website require registration. If you use our website without registering, the only information we collect will be Non-Personal Information through the use of Cookies or Web Beacons. If you choose to register with our website for certain services, we require you to submit Personally Identifiable Information. Depending on the tool or service you have selected, we may also collect Personal Health Information. You are responsible for ensuring the accuracy of the Personally Identifiable Information and Personal Health Information you submit to Persona-Doctors.com. Inaccurate information will affect the information you receive when using our site and tools and our ability to contact you as contemplated in this Privacy Policy. For example, your email address should be kept current because that it is how we communicate with you.</p>
                    </div>

                    <h3>2. Persona Doctors' Communications to You</h3>
                    <div>
                      <p>You agree that Persona Doctors may send electronic mail to you for the purpose of advising you of changes or additions to this Site, about any of Persona Doctors' products or services, or for such other purpose(s) as Persona Doctors deems appropriate.</p>
                    </div>

                    <h3>3. Postings</h3>
                    <div>
                      <p>Persona Doctors may from time to time monitor, review, and at its discretion edit or delete discussions, chats, and postings on our Site; however, Persona Doctors is under no obligation to do so and assumes no responsibility or liability arising from the content of any such transmissions or for any error, defamation, libel, slander, omission, falsehood, obscenity, pornography, profanity, hate speech, danger, illegality or inaccuracy contained in any information transmitted to any such locations on our Site. Persona Doctors will cooperate with law enforcement or a court order requesting or directing Persona Doctors to disclose the identity of anyone posting any information or material prohibited by this Policy. Persona Doctors may also disclose such information if such disclosure is reasonably necessary to protect the rights, property, or personal safety of Persona Doctors, its clients, or the public.</p>
                    </div>

                    <h3>4. User Comments, Feedback and Other Submissions</h3>
                    <div>
                      <p>All comments, feedback, suggestions, ideas, and other submissions disclosed, submitted, or offered to Persona Doctors on or by this Site or otherwise disclosed, submitted, or offered in connection with your use of this Site or otherwise (collectively, "Comments") shall be and remain Persona Doctors' property. Such disclosure, submission, or offer of any Comments shall constitute an assignment to Persona Doctors of sender's all worldwide rights, titles, and interests in all copyrights and other intellectual property contained in the Comments. Thus, Persona Doctors will own exclusively all such rights, title, and interest and shall not be limited in any way in its use, commercial or otherwise, of any Comments. Persona Doctors is and shall be under no obligation (1) to maintain any Comments in confidence; (2) to pay to user any compensation for any Comments; or (3) to respond to any Comments.</p>
                      <p>You agree that Persona Doctors may use and/or disclose information about your demographics and use of the Site in any manner that does not reveal your identity. By participating in Site contests, promotions, and/or requesting promotional information or product updates, you agree that Persona Doctors may use your information for marketing and promotional purposes.</p>
                    </div>

                    <h3>5. Site Content</h3>
                    <div>
                      <p>Unless otherwise noted, all materials, including images, illustrations, designs, icons, photographs, video clips, testimonials, program guides and manuals, menus, and other materials that appear as part of this Site (collectively, the "Contents") are copyrights, trademarks, and/or other intellectual property owned, controlled, or licensed by Persona Doctors, and/or its subsidiaries and their affiliates (collectively, "Persona Doctors"). The Site as a whole is protected by copyright and trade dress, all worldwide rights, titles and interests in and to which are owned by Persona Doctors, or any of its subsidiaries. PERSONA DOCTORS, PERSONADOCTORS.COM, and all other Persona Doctors trademarks appearing on this Site are trademarks of Persona Doctors.</p>
                      <p>The Contents of our Site, and the Site as a whole, are intended solely for personal, noncommercial (other than for the purchase of merchandise or services from our site) use by the users of our Site. You may download or copy the Contents and other downloadable materials displayed on the Site for your personal use only. No right, title, or interest in any downloaded materials or software is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or participate in any sale of, or exploit in any way, in whole or in part, any of the Contents, the Site, or any related software.</p>
                    </div>

                    <h3>6. Termination</h3>
                    <div>
                      <p>This Agreement is effective unless and until terminated by either you or Persona Doctors. You may terminate this Agreement at any time. Persona Doctors may terminate this Agreement at any time without notice and deny you access to the Site, if in Persona Doctors' sole discretion you fail to comply with any term or provision of this agreement. A termination or actions taken by Persona Doctors under the previous sentence shall not limit Persona Doctors' other legal rights and remedies available under law or equity. Upon any termination of this agreement by either you or Persona Doctors, you must promptly destroy all materials downloaded or otherwise obtained from this Site, as well as all copies of such materials, whether made under this agreement or otherwise.</p>
                    </div>

                    <h3>7. General</h3>
                    <div>
                      <p>We may change, move, or delete portions of, or may add to, our Site from time to time and without prior notice. Your use of our Site following any such change constitutes your agreement to follow and be bound by the terms as changed. From time to time there may be information on our Site that contains typographical errors, inaccuracies, or omissions. We may correct errors, inaccuracies, or omissions and change or update information at any time without notice.</p>
                    </div>

                    <h3>8. Links to Other Sites</h3>
                    <div>
                      <p>For your convenience and enjoyment, our Site may provide links to web sites that are not operated by Persona Doctors. These links do not mean that Persona Doctors endorses, approves, or sponsors the linked site or any information, products, or services contained in such site, nor is Persona Doctors liable for any claims or any damage which might result from your use of such information, products, or services.</p>
                    </div>

                    <h3>9. Severability</h3>
                    <div>
                      <p>If any provision of this agreement shall be found to be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from this agreement and shall not affect the validity and enforceability of any remaining provisions.</p>
                    </div>

                    <h3>10. No Waiver</h3>
                    <div>
                      <p>A failure on the part of Persona Doctors to enforce any part of this agreement shall not constitute a waiver of any of Persona Doctors' rights under this agreement, whether for past or future actions on the part of any person.  Only a specific written waiver signed by an authorized representative of Persona Doctors shall have legal effect.</p>
                    </div>

                    <h3>11. Disclaimer</h3>
                    <div>
                      <p>This site and all contents of the site are provided on an "as is" basis without warranties of any kind, either express or implied, including without limitation warranties of title or implied warranties of merchantability or fitness for a particular purpose.  You acknowledge, by your use of the site, that your use of the site is at your sole risk, that you assume full responsibility for all costs associated with all servicing or repairs of any equipment you use in connection with your use of our site, and that Persona Doctors shall not be liable for any claims or damages of any kind related to your use of this site.</p>
                    </div>

                    <h3>12. Miscellaneous</h3>
                    <div>
                      <p>Unless otherwise specified and except to the extent Persona Doctors products or services are offered for sale in the United History through this Site, this Site and the Contents thereof are displayed solely for the purpose of promoting Persona Doctors' products and services available in the United History and select foreign markets. This Site is controlled and operated by Persona Doctors from its offices in Rockville, Maryland.</p>
                      <p>This Agreement shall be construed in accordance with the laws of the State of Maryland, without regard to any conflict of law provisions.  Any dispute arising under this Agreement shall be resolved exclusively by Maryland-Southern Federal District Court located in Greenbelt, Maryland.  The Parties, to reduce costs and expedite dispute resolution; agree to first utilize mediation; and should that not resolve the dispute, by binding arbitration before a retired Judge chosen by the Parties from the Circuit Court for Montgomery County.  Each Party shall pay their own attorney's fees; and all Parties shall pay an equal share of the mediator and/or arbitrator fees at the current rates at the time. Selection of the mediator/arbitrator shall be the first name both chosen from the common current list.  ADR by mediation/arbitration shall occur in Montgomery County at company offices or by videoconference with costs of same paid by whichever party requested videoconference.</p>
                    </div>
                  </div>
                  <h2>Site Disclaimer</h2>
                  <p>The information contained on this web site is not a substitute for professional medical advice. Always seek the advice of your physician or other qualified health provider prior to starting any new treatment or with any questions you may have regarding a medical condition.</p>
                  <p>Nothing contained on this web site is intended to be a substitute for medical diagnosis or treatment.</p>
                  <p>Persona Doctors does not make any express or implied warranties, representations or endorsements whatsoever (including without limitation warranties of title or non-infringement, or the implied warranties of merchantability or fitness for a particular purpose) with regard to any documents, merchandise, information or services provided on or through this web site.</p>
                  <p>Persona Doctors does not warrant the accuracy, completeness or correctness, timelines, or usefulness of any opinions, advice, services, merchandise or other information provided through this web site or on the Internet generally.</p>
                  <p>In no event will Persona Doctors be liable to you or anyone else for any decision made or action taken by you or anyone else in reliance upon the information provided on or through this web site.</p>
                </div>
              </div>
            </div>
          </section>

          <GuaranteedLoseXBox
            content={guarantees.loseX}
            buttonTitle="JOIN NOW"
            markImage={imgGuarantee100} />
        </div>
      </div>
    );
  }
}

export default PrivacyPolicyPage;
