import React, { Component } from "react";
import styles from "./Terms.css";
// import { HOME_PAGE_URL } from "../lib/constants";
import Footer from "../Footer/Footer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";

export default class TermsOfService extends Component {
  // backToHomePage() {
  //   if (this.props.history) this.props.history.push(HOME_PAGE_URL);
  // }

  componentDidMount = () => {
    setTimeout(() => {
      window.scroll({
        top: -200
      });
    }, 10);
  };
  handleBackToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <React.Fragment>
        <PrimaryHeaderContainer />
        <div className={styles.base}>
          <div className={styles.container}>
            <h2>Terms of Service</h2>
            <h3>Overview</h3>
            <p>
              This website 'The star in me' ("Website") and related services are
              made available by Femmevista Technologies Private Limited
              (hereinafter referred to as "Femmevista"). All information and /
              or other materials provided on and through this Website
              ("Content") and all of the related services offered by Femmevista
              Technologies Private Limited may be used solely under the
              following terms and conditions ("Terms of Use"). The features /
              services of this Website are available only in India. However,
              users outside India may browse through the information provided on
              the Website. Only registered domestic Users can use the Services
              provided through the Website. The following Terms of Use and
              Privacy Policy constitute an agreement between you (the "User")
              and Femmevista Technologies Private Limited (hereinafter referred
              to as "Femmevista") for use of this Website and the information
              contained therein. For the purpose of these terms and conditions,
              the term “you” and all grammatical variations of it, means any
              User of the Website, whether using or accessing any of the
              information on the Website or contacting Femmevista through the
              Website. By accessing or using this Website, you acknowledge that
              you have read, understood, and agree to be bound by these terms
              and to comply with all applicable laws and regulations governing
              the use of this Website. At its discretion, Femmevista reserves
              the right to revise the Terms of Use and update any Content,
              including the right to delete, limit and prevent access
              temporarily or indefinitely and equally reserves the right to
              modify at any time the presentation, configuration and location of
              the Website and conditions and requirements for access, not
              guaranteeing the availability nor the continual functioning of the
              Website and other places where a link is established.
            </p>
            <h3>General Terms</h3>
            <p>
              This Website may contain proprietary notices and copyright
              information, the terms of which must be observed and followed.
              Femmevista grants you a non-exclusive, non-transferable, limited
              permission to access and display the web pages within this Website
              as a User or potential User of the Website provided you comply
              with these Terms of Use, and all copyright, trademark, and other
              proprietary notices remain intact. You may only use a crawler to
              crawl this Website as permitted by this Website’s robots.txt
              protocol. Femmevista may block any crawlers in its sole
              discretion. Usage authorized under this Terms of Use is
              non-commercial in nature (i.e. you may not sell the content you
              access on or through this Website, or use this Website's content
              for any commercial purposes). All other use of this site is
              prohibited. Except for the limited permission as stated above,
              Femmevista does not grant you any express or implied rights or
              licenses under any patents, trademarks, copyrights, or other
              proprietary or intellectual property rights. You may not mirror
              any of the content from this Website on another Website or in any
              other media. You may not reproduce or copy the contents of this
              Website. Any material that is made available for downloading,
              access, or other use from this Website with their own license
              terms will be governed by such terms, conditions, and notices.
              Your failure to comply with such terms or any of the terms on this
              Website will result in automatic termination of any rights granted
              to you, without prior notice, and you must immediately destroy all
              copies of downloaded materials in your possession, custody or
              control.
            </p>

            <h3>Disclaimers</h3>
            <p>
              The information contained in this Website is for general
              information purposes only. Femmevista does not warrant the
              accuracy of any information posted on this Website, and there may
              be technical inaccuracies or typographical errors in the materials
              posted therein. Femmevista will attempt to resolve any issues
              pertaining to any Content displayed on the Site, however
              Femmevista does not provide any assurances that any reported
              problems with any Content on its Website will be resolved.
              Information that Femmevista publishes on its Website may contain
              references or cross references to new products, programs and
              services that are not yet announced or available to you ("Upcoming
              Services"). Such references do not imply that Femmevista
              guarantees to announce or make available such Upcoming Services to
              you. Please contact Femmevista for information regarding the
              Upcoming Services that may be available to you. In no event will
              Femmevista be liable for any loss or damage including without
              limitation, indirect or consequential loss or damage, or any loss
              or damage whatsoever arising from loss of data or profits arising
              out of, or in connection with, the reliance on such Upcoming
              Services. Femmevista will not make any representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability or availability
              with respect to the Upcoming Services mentioned on the Website or
              the information, products, services, or related graphics contained
              on the Website for any purpose. Any reliance you place on such
              information is therefore strictly at your own risk. Femmevista
              reserves the right to investigate complaints or reported
              violations of these Terms of Use and to take any action they deem
              appropriate including, without limitation, reporting any suspected
              unlawful activity to law enforcement officials, regulators, or
              other third parties and disclosing any information necessary or
              appropriate to such persons or entities relating to user profiles,
              e-mail addresses, usage history, posted materials, IP addresses
              and traffic information. Femmevista reserves the right to seek all
              remedies available at law and in equity for violations of these
              Terms of Use, including but not limited to the right to block
              access from a particular Internet address to this Website. If any
              term in this Terms of Use is found by competent judicial authority
              to be unenforceable in any respect, the validity of the remainder
              of this Terms of Use will be unaffected, provided that such
              unenforceability does not materially affect the parties’ rights
              under this Terms of Use.
            </p>
            <h3>Links to Third Party Websites</h3>
            <p>
              The Website may also contain links that Femmevista may provide to
              other websites operated by third parties ("Linked Website").
              Despite the presence of a link or any reference to the Website on
              a Linked Website, Femmevista makes no warranty or representation
              regarding, does not endorse, is not affiliated with and is not in
              any way responsible for, the Linked Website or any content that
              appears on it or any products or services made available through
              such Linked Website. If you decide to visit any Linked Website,
              you do so at your own risk and it is your responsibility to review
              the terms of use, privacy policy and any other relevant Terms and
              Conditions of the relevant Linked Website.
            </p>

            <h3>LInking to this website</h3>
            <p>
              Femmevista consents only to links to this Website in which the
              link and the pages that are activated by the link do not: (a) use
              any techniques that alter in any way the visual presentation or
              appearance of any content within this Website such as creating
              frames around any page of this Website; (b) imply that Femmevista
              approves or endorses you, your website, or your service or product
              offerings; (c) present false or misleading impressions about
              Femmevista and / or the Website; and (d) misrepresent your own
              relationship with Femmevista and / or the Website. You agree that
              Femmevista may at any time, in its sole discretion, terminate
              permission to link to this Website. In such event, you agree to
              immediately remove all links to this Website and to cease any
              related use of Femmevista's content or trademarks.
            </p>

            <h3>Confidential Information</h3>
            <p>
              Femmevista will not receive confidential information from you
              through the Website. Please note that any information or material
              sent to Femmevista through the Website will be deemed NOT to be
              confidential or proprietary. By sending Femmevista any information
              or material, you grant Femmevista an unrestricted, irrevocable
              license to copy, reproduce, publish, upload, post, transmit,
              distribute, publicly display, perform, modify, create derivative
              works from, and otherwise freely use, those materials or
              information. You also agree that Femmevista is free to use any
              ideas, concepts, know-how, or techniques that you send us for any
              purpose. Personally-identifiable information that you submit to
              Femmevista for the purpose of using the Website or for receiving
              products or services will be handled in accordance with our
              privacy policies.
            </p>
            <h3>Disclaimer of Warranty</h3>
            <p>
              USE OF THIS SITE IS AT YOUR SOLE RISK. ALL MATERIALS, INFORMATION,
              PRODUCTS, AND SERVICES ARE PROVIDED "AS IS," WITH NO WARRANTIES OR
              GUARANTEES WHATSOEVER. Femmevista EXPRESSLY DISCLAIMS TO THE
              FULLEST EXTENT PERMITTED BY LAW ALL EXPRESS, IMPLIED, STATUTORY,
              AND OTHER WARRANTIES, GUARANTEES, OR REPRESENTATIONS, INCLUDING,
              WITHOUT LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF PROPRIETARY AND
              INTELLECTUAL PROPERTY RIGHTS. WITHOUT LIMITATION, Femmevista MAKES
              NO WARRANTY OR GUARANTEE THAT THIS WEBSITE WILL BE UNINTERRUPTED,
              TIMELY, SECURE, OR ERROR-FREE. YOU UNDERSTAND AND AGREE THAT IF
              YOU DOWNLOAD OR OTHERWISE OBTAIN MATERIALS, INFORMATION, PRODUCTS,
              OR SERVICES FROM THIS WEBSITE, YOU DO SO AT YOUR OWN DISCRETION
              AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGES
              THAT MAY RESULT, INCLUDING LOSS OF DATA OR DAMAGE TO YOUR COMPUTER
              SYSTEM.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              IN NO EVENT SHALL FEMMEVISTA TECHNOLOGIES PRIVATE LIMITED BE
              LIABLE TO YOU OR ANY PERSON FOR ANY DIRECT, INDIRECT, SPECIAL,
              CONSEQUENTIAL OR OTHER DAMAGES (INCLUDING, WITHOUT LIMITATION, ANY
              LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF INFORMATION OR
              PROGRAMS OR OTHER DATA ON YOUR INFORMATION HANDLING SYSTEM) THAT
              ARE RELATED TO THE USE OF, OR THE INABILITY TO USE, THE SERVICES
              AND FUNCTIONS OF THE WEBSITE OR ANY LINKED WEBSITE, EVEN IF
              FEMMEVISTA IS EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES.
            </p>

            <h3>Entire Agreement</h3>
            <p>
              These Terms and Conditions constitutes the entire agreement
              between you and Femmevista with respect to the subject matter
              hereof and supersedes and replaces all prior or contemporaneous
              understandings or agreements, written or oral, regarding such
              subject matter. Any waiver of any provision of these Terms and
              Conditions by a party will be effective only if it is in writing
              and signed by the concerned party. Please email us at
              legal@thestarinme.com if you have any questions regarding this
              document. I, "THE USER", AGREE THAT BY ACCESSING AND/OR USING THE
              WEBSITE, I AGREE TO ALL OF THE PROVISIONS OF THESE TERMS AND
              CONDITIONS CONTAINED ABOVE AND THE PRIVACY POLICY.
            </p>
          </div>{" "}
          <div className={styles.footer}>
            <Footer
              {...this.props}
              handleBackToTop={() => this.handleBackToTop()}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
