import React, { Component } from "react";
import styles from "./Terms.css";
import Footer from "../Footer/Footer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";

export default class PrivacyPolicy extends Component {
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
            <h2>Privacy Policy</h2>
            <p>
              This Privacy Policy (“<u>Policy</u>”) describes how Age Bold, Inc.
              (“<u>Company</u>” or “<u>we</u>” or “<u>our</u>”) treats
              information collected or provided in connection with an end user’s
              (“<u>you</u>” or “<u>your</u>” or “<u>user</u>”) use of the
              services available via Company’s website at www.agebold.com (such
              website, the “<u>Site</u>” and together with such service, the “
              <u>Service</u>”). Please note that your use of the Service
              constitutes your acceptance of this Policy as set forth below:
            </p>

            <h3>Effective Date</h3>
            <p>
              This Policy applies to all information collected by or provided to
              us in connection with the Service. When we make any material
              changes to this Policy, we will change the Effective Date above
              and will inform you by e-mail sent to the address associated with
              your Service account and/or through the Service the next time you
              sign in. We will treat your continued use of the Service following
              such notice as your acceptance of the changes.
            </p>

            <h3>Third Parties</h3>
            <p>
              The Service may contain, and we may send to registered users,
              links to third-party websites. This Policy does not apply to
              information that you may provide to or that may be collected by
              third parties. We encourage you to request that such third parties
              provide you with their applicable privacy policies and other terms
              and conditions before engaging with or making a purchase from such
              third parties.
            </p>

            <h3>Collected Information</h3>
            <h4>Information You Submit</h4>
            <p>
              {" "}
              When you log-in to or create an account with the Service, we
              collect the information you provide in the applicable forms. This
              information includes personally identifiable information such as
              your name, e-mail address and password. Information you submit to
              the Service also includes content that you create and publish on
              the Service, which will include such personally identifiable
              information as you may choose to include. When we refer to
              “personally identifiable information” in this Policy, we mean
              information that we can directly associate with a specific person
              or entity without additional information. To the extent you
              decline to share certain personally identifiable information with
              us, we may not be able to provide some or all of the features and
              functionalities found on the Service.
            </p>

            <h4>Information Collected Automatically</h4>
            <p>
              When you use the Service, we automatically gather certain
              non-personally identifiable information from you. This includes
              usage information, such as information on when, how often and for
              how long you use the Service and the content you submit and view.
              This also includes server log data such as the IP address or
              operating system, or the webpage you were visiting before you came
              to our Service. As described below, we collect this information
              through a number of means, including server logs, cookies and
              other online tracking mechanisms. We may associate such
              non-personally identifiable information with the personally
              identifiable information that you provide in connection with the
              Service. But if we do so, we will treat the combined information
              as personally identifiable information.{" "}
            </p>

            <h4>Analytics Services</h4>
            <p>
              We use certain third-party services to assist us in analysis,
              auditing, research, and reporting regarding the Service. These
              third parties may use web logs or web beacons, and they may set
              and access cookies on your computer or other device. In
              particular, we use Amplitude to help collect and analyze certain
              information for the purposes discussed in this Policy.
            </p>

            <h4>Online Tracking and Cookies</h4>
            <p>
              The Service may use web beacons, cookies and other online tracking
              mechanisms to collect information. "Beacons" (also often referred
              to as "pixels") are tiny graphics on a web page designed to track
              when a page is viewed. Beacons also can be inserted into emails in
              order to track certain information, including whether an email has
              been opened. "Cookies" are small text files containing a string of
              alphanumeric characters that are downloaded by your web browser or
              mobile device when you visit a website. We may use both session
              cookies and persistent cookies when you access and use the
              Service. Cookies may be used, for example, to remember your user
              account information and your preferences, to customize the
              interface of the Service for you and to assist us in measuring and
              analyzing Service traffic. A session cookie disappears after you
              close your browser. A persistent cookie remains after you close
              your browser and may be used by your browser on subsequent visits
              to the Service. Persistent cookies can be removed. Please review
              your browser's documentation to learn the best way to remove
              cookies and to modify your cookie settings. You can take steps to
              limit tracking by erasing cookies from your computer's hard drive
              and by setting your browser to block all cookies or warn you
              before a cookie is stored. We partner with certain third parties
              to collect non-personally identifiable information. These third
              parties may use web logs, web beacons or other online tracking
              mechanisms, and they may set and access cookies on your computer
              or other device. Means of opting out of this third-party data
              collection are discussed below in Section 8.
            </p>

            <h3>Use of Information</h3>
            <p>
              We use the personally identifiable and non-personally identifiable
              information that we collect about you as follows:
            </p>
            <ul>
              <li>
                We will use submitted information for the purposes for which you
                provided the information, including, for example, to create and
                maintain a Service account for you or respond to a question that
                you e-mail to us. We also use submitted information and
                collected information as necessary to provide the features and
                functionality of the Service to you.
              </li>
              <li>
                We may send you e-mails regarding updates or modifications to
                the Service.
              </li>
              <li>
                We use submitted information and collected information to
                personalize the content that you and others see based on
                personal characteristics or preferences.{" "}
              </li>
              <li>
                We may analyze collected information relating to your use of the
                Service in order to help us improve the Service, however we will
                only do so in an aggregated and anonymized fashion.{" "}
              </li>
              <li>
                We may use submitted information and collected information to
                help troubleshoot problems, provide you with required notices,
                enforce our Terms of Service or to alert you to changes in our
                policies or agreements that may affect your use of the Service.
              </li>
              <li>
                We may combine personally identifiable information collected
                through the Service with other information that we collect about
                you in other contexts—such as our communications with you via
                e-mail, phone or postal mail. We will handle such combined
                information in accordance with this Policy.
              </li>
            </ul>

            <h3>Disclosure of Information</h3>
            <p>
              We do not sell or distribute your information to third parties for
              their own purposes, in any form except as provided in this
              Section. We disclose the personally identifiable and
              non-personally identifiable information that we collect about you
              as follows:{" "}
            </p>
            <ul>
              <li>
                Your information may be viewable by other Service users in
                accordance with the Service’s functionality.
              </li>
              <li>
                We may provide advertisers and other third parties with
                aggregated, non-personally identifiable information about our
                user base and its usage patterns.
              </li>
              <li>
                We may disclose personally identifiable information to
                third-party partners, including (without limitation)
                organizations and institutions with which you indicate an
                affiliation, in furtherance of our business arrangements with
                them, including without limitation to jointly offer a product or
                service to you or create interoperability between our products
                and services and the products and services of such partners.
              </li>
              <li>
                The Company uses contractors and third-party service providers
                to provide the Service to our users and help us understand the
                use of the Service. These contractors and third-party service
                providers may collect information sent through the Service for
                use on our behalf.
              </li>
              <li>
                We may report aggregated, de-identified data relating to
                activity on the Service to third parties or the general public.
                We may combine such data with other aggregated and anonymized
                data obtained from third-party sources in order to generate such
                reports.
              </li>
              <li>
                We will use and disclose information where we, in good faith,
                believe that the law or legal process (such as a court order,
                search warrant or subpoena) requires us to do so; to
                investigate, prevent, or take action regarding illegal
                activities, suspected fraud, or violations of our terms and
                conditions; or in other circumstances where we believe is
                necessary to protect the rights, safety or property of Company,
                our users, and third parties.
              </li>
            </ul>

            <h3>Viewing and Amending Information</h3>
            <p>
              You can log into your Service account and view or amend your user
              account information at any time. Please note that while changes to
              your account information are reflected promptly in active user
              databases, our servers may retain previously provided information.
              Note that changes to, or deletion of, your Service account user
              information does not affect any other information collected by the
              Company, which the Company may retain and continue to use or
              disclose in accordance with this Policy.{" "}
            </p>

            <h3>Choices Regarding Third-Party Offers</h3>
            <p>
              To the extent we send you commercial e-mails regarding third-party
              marketing or promotional materials, we will give you the ability
              to opt-out of receiving such e-mails in accordance with applicable
              law. We will not provide your personally identifiable information
              to third parties for their own marketing purposes without your
              consent.
            </p>

            <h3>Online Behavioral Advertising</h3>
            <p>
              The Site may enable third-party tracking mechanisms to collect
              your non-personally identifiable information for use in online
              behavioral advertising. For example, third parties may use the
              fact that you visited the Site to send online ads for Company
              services to you on non-Company websites. In addition, our
              third-party advertising networks might use information about your
              use of the Site to help target non-Company advertisements based on
              your online behavior in general. For information about behavioral
              advertising practices, including privacy and confidentiality,
              visit the Network Advertising Initiative website at{" "}
              <a href="http://www.networkadvertising.org/understanding-online-advertising">
                http://www.networkadvertising.org/understanding-online-advertising
              </a>{" "}
              or the Digital Advertising Alliance website at{" "}
              <a href="http://www.aboutads.info">www.aboutads.info</a>.
            </p>

            <p>
              The use of online tracking mechanisms by third parties is subject
              to those third parties’ own privacy policies, and not this Policy.
              If you prefer to prevent third parties from setting and accessing
              cookies on your computer, you may set your browser to block
              cookies. Additionally, you may remove yourself from the targeted
              advertising of companies within the Network Advertising Initiative
              by opting out at{" "}
              <a href="http://www.networkadvertising.org/choices/">
                http://www.networkadvertising.org/choices/
              </a>
              , or of companies participating in the Digital Advertising
              Alliance program by opting out at www.aboutads.info/choices. Like
              many websites, the Site does not currently respond to “do not
              track” browser headers, but you can limit tracking through these
              third-party programs by taking the steps discussed above.
            </p>

            <h3>Security</h3>
            <p>
              The personally identifiable information we collect about you is
              stored in limited access servers. We will maintain reasonable
              safeguards to protect the security of these servers and your
              personally identifiable information. However, no security measures
              are 100% effective and we cannot guarantee the security of your
              personally identifiable information.{" "}
            </p>

            <h3>Transfer as Corporate Asset</h3>
            <p>
              In the event of a merger, sale of capital stock or assets,
              reorganization, consolidation or similar transaction involving
              Company, the information we possess (including personally
              identifiable information) shall be transferred as a corporate
              asset to the acquiring entity, provided that such entity will
              continue to handle such information in accordance with this
              Policy.
            </p>

            <h3>Transfer to the U.S. or other Countries</h3>
            <p>
              The Company is established in and uses facilities in the United
              States. Your information will be stored and processed in the
              United States or other countries where Company has facilities. By
              using the Service, you consent to the transfer of information
              outside of your country, even if your country has more rigorous
              data protection standards.
            </p>

            <h3>Children Under 13</h3>
            <p>
              The Company does not knowingly collect information from children
              under 13 and the Service is intended for adults over the age of
              18. If you are a parent and believe that your child under the age
              of 13 has used the Service and provided personally identifiable
              information to us through the Service, please contact us at
              support@agebold.com and we will work to delete that Service
              account and any such personally identifiable information.
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
