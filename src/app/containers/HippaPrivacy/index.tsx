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
const imgBannerBackground = require('app/assets/images/bg-pp2.png');
const imgGuarantee100 = require('app/assets/images/guarantee100.png');
// Scss
import './hippa-privacy-page.scss';

class HippaPrivacyPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="cw-hippa-privacy-page">
        <div className="page-outer hippa-privacy-notice">

        <section className="banner hpn-banner">
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
                        additionalClass="hippaPrivacy"
                        bannerInfo={bannerInfo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hippa-privacy-notice">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>HIPPA Privacy Notice</h2>
                <p className="b-hippa">This Notice Describes How Health Information about You May Be Used and Disclosed and How You Can Get Access to This Information</p>
                <p className="b-hippa"><strong>Please Review It Carefully</strong></p>
                <p className="b-hippa">The Privacy of Your Health Information is Important to Us</p>
                <div id="accordion-pp1">
                  <h3>Our Legal Duty</h3>
                  <div>
                    <p>We are required by applicable federal and state law to maintain the privacy of your health information.</p>
                    <p>We are also required to give you this Notice about our privacy practices, our legal duties, and your rights concerning your health information.  We must follow the privacy practices that are described in this Notice while it is in effect.</p>
                    <p>This Notice takes effect June 17, 2003 and will remain in effect until we replace it.</p>
                    <p>We reserve the right to hange our privacy practices and the terms of this Notice at any time, provided such changes are permitted by applicable law.</p>
                    <p>We reserve the right to make the changes in our privacy practices and the new terms of our Notice effective for all health information that we maintain, including health information we created or received before we made the changes.</p>
                    <p>Before we make a significant change in our privacy practices, we will change this Notice and make the new Notice available upon request.</p>
                    <p>You may request a copy of our Notice at any time.  For more information about our privacy practices, or for additional copies of this Notice, please contact us using the information at the end of this Notice.</p>
                  </div>

                  <h3>Uses and Disclosures of Health Information</h3>
                  <div>
                    <p>We may use and disclose health information about you for treatment, payment, and healthcare operations.  For example:</p>
                    <p><strong>Treatment:</strong> We may use or disclose your health information to a physician or other healthcare provider providing treatment to you.</p>
                    <p><strong>Payment:</strong> We may use and disclose your health information to obtain payment for services we provide to you.</p>
                    <p><strong>Healthcare Operations:</strong> We may use and disclose your health information in connection with our healthcare operations.  Healthcare operations include quality assessment and improvement activities, reviewing the competence or qualifications of healthcare professionals, evaluating practitioner and provider performance, conducting training programs, accreditation, certification, licensing or credentialing activities.</p>
                    <p><strong>Your Authorization:</strong> In addition to our use of your health information for treatment, payment or healthcare operations, you may give us written authorization to use your health information or to disclose it to anyone for any purpose.  If you give us an authorization, you may revoke it in writing at any time.  Your revocation will not affect any use or disclosures permitted by your authorization while it was in effect.  Unless you give us a written authorization, we cannot use or disclose your health information for any reason except those described in this Notice.</p>
                    <p><strong>To Your Family and Friends:</strong> We must disclose your health information to you, as described in the Patient Rights section of this Notice.  We may disclose your health information to a family member, friend or other person to the extent necessary to help with your healthcare or with payment for your healthcare, but only if you agree that we may do so.</p>
                    <p><strong>Persons Involved In Care:</strong> We may use or disclose health information to notify, or assist in the notification of (including identifying or locating) a family member, your personal representative or another person responsible for your care, of your location, your general condition, or death.  If you are present, then prior to use or disclosure of your health information, we will provide you with an opportunity to object to such uses or disclosures.  In the event of your incapacity or emergency circumstances, we will disclose health information based on a determination using our professional judgment disclosing only health information that is directly relevant to the person’s involvement in your healthcare.  We will also use our professional judgment and our experience with common practice to make reasonable inferences of your best interest in allowing a person to pick up filled prescriptions, medical supplies, x-rays, or other similar forms of health information.</p>
                    <p><strong>Marketing Health-Related Services:</strong> We will not use your health information for marketing communications without your written authorization.</p>
                    <p><strong>Required by Law:</strong> We may use or disclose your health information when we are required to do so by law.</p>
                    <p><strong>Food and Drug Administration (FDA):</strong> We are required by law to disclose health information to the FDA related to any adverse effects of food, supplements, products, and product defects for surveillance to enable product recalls, repairs, or replacement.</p>
                    <p><strong>Abuse or Neglect:</strong> We may disclose your health information to appropriate authorities if we reasonably believe that you are a possible victim of abuse, neglect, or domestic violence or the possible victim of other crimes.  We may disclose your health information to the extent necessary to avert a serious threat to your health or safety or the health or safety of others.</p>
                    <p><strong>National Security:</strong> We may disclose to military authorities the health information of Armed Forces personnel under certain circumstances.  We may disclose to authorized federal officials health information required for lawful intelligence, counterintelligence, and other national security activities.  We may disclose to correctional institutions or law enforcement officials having lawful custody of protected health information of inmates or patients under certain circumstances.</p>
                    <p><strong>Appointment Reminders:</strong> We may use or disclose your health information to provide you with appointment reminders (such as voicemail messages, postcards, or letters).</p>
                  </div>

                  <h3>Patient Rights</h3>
                  <div>
                    <p><strong>Access:</strong>  You have the right to look at or get copies of your health information, with limited exceptions.  You may request that we provide copies in a format other than photocopies.  We will use the format you request unless we cannot practicably do so.  (You must make a request in writing to obtain access to your health information.  You may obtain a form to request access by using the contact information listed at the end of this Notice.  We will charge you a reasonable cost-based fee for expenses such as photocopies and staff time.  You may also request access by sending us a letter to the address at the end of this Notice.  If you request copies, we will charge you $15 for copies of your health information.  If you request an alternative format, we will charge a cost-based fee for providing your health information in that format.  If you prefer, we will prepare a summary or an explanation of your health information for a fee.  Contact us using the information listed at the end of this Notice for a full explanation for our fee structure).</p>
                    <p><strong>Disclosure Accounting:</strong>  You have the right to receive a list of instances in which we or our business associates disclosed your health information for purposes, other than treatment, payment, healthcare operations and certain other activities, for the last 6 years, but not before June 17, 2003.  If you request this accounting more than once in a 12-month period, we may charge you a reasonable, cost-based fee for responding to these additional requests.</p>
                    <p><strong>Restriction:</strong> You have the right to request that we place additional restrictions on our use or disclosure of your health information.  We are not required to agree to these additional restrictions, but if we do, we will abide by our agreement (except in an emergency).</p>
                    <p><strong>Alternative Communication:</strong> You have the right to request that we communicate with you about your health information by alternative means or to alternative locations.  You must make your request in writing.  Your request must specify the alternative means or location, and provide satisfactory explanation how payments will be handled under the alternative means or location you request.</p>
                    <p><strong>Amendment:</strong> You have the right to request that we amend your health information (Your request must be in writing, and it must explain why the information should be amended.).  We may deny your request under certain circumstances.</p>
                    <p><strong>Electronic Notice:</strong> If you received this Notice on our Web site or by electronic mail (e-mail), you are entitled to receive this Notice in written form.</p>
                  </div>

                  <h3>Questions and Complaints</h3>
                  <div>
                    <p>If you want more information about our privacy practices or have questions or concerns, please contact us.</p>
                    <p>If you are concerned that we may have violated your privacy rights, or you disagree with a decision we made about access to your health information or in response to a request you made to amend or restrict the use or disclosure of your health information or to have us communicate with you by alternative means or at alternative locations, you may complain to us using the contact information listed at the end of this Notice.  You also may submit a written complaint to the U.S. Department of Health and Human Services.  We will provide you with the address to file your complaint with the U.S. Department of Health and Human Services upon request.</p>
                    <p>We support your right to the privacy of your health information.  We will not retaliate in any way if you choose to file a complaint with us or with the U.S. Department of Health and Human Services.</p>
                    <p>
                      <strong>Contact Officer:</strong><br />
                      <strong>Privacy Admtinistrator/Custodian of Records</strong><br />
                      P.O. Box 34977<br />
                      Bethesda, Maryland 20827-0977<br />
                      <a href="mailto:hippa@personadoctors.com">hippa@personadoctors.com</a><br />
                    </p>
                  </div>
                </div>

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

export default HippaPrivacyPage;
