// src/policy/privacy-policy.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import config from '../config';
import { toLowerCase, toUpperCase } from '../components/utils';

function PrivacyPolicy() {
    const projectNameLower = toLowerCase(config.projectName);
    const projectNameUpper = toUpperCase(config.projectName);

    return (
        <div className="policy">
            <Helmet>
                <title>Privacy Policy - {config.projectName}</title>
            </Helmet>
            <h1>Privacy Policy</h1>
            <section>
                <h3>Effective Date: 05th August 2024</h3>
            </section>
            <div className="policy-outer">
                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        {config.projectName} takes the privacy of its customers seriously. This privacy policy (“Policy”) explains how we collect, store, use, share and otherwise process your personal information, shared with us when (a) you access or use the website https://www.{projectNameLower}.com (“Website”); (b) when you access or use our mobile/web application (“App”) or (c) through any other means. The Website and the App will collectively be referred to as “Platform”. If you have any questions or concerns regarding this Policy, you can write to info@{projectNameLower}.com. We respect your privacy and as per our commitment we ensure that any personal information received will be processed in accordance with the applicable privacy and data protection laws. The Effective Date of this Privacy Policy is set forth at the top of this Privacy Policy. We may revise our Policy, at any time without notice to you. Your continued use of the Platform constitutes your acceptance of the amended Policy. Any amended Policy will be published on this page and supersedes all previous versions. Please check back periodically, and especially before you provide any personal information.
                    </p>
                </section>
                <section>
                    <h2>2. Scope of our Policy</h2>
                    <p>
                        With this, we explain where our Privacy Policy applies, when you apply to us for a job or for placement of work, your supply of services to us wherein, it involves personal information and as a result of which your relationship with one more than one of our clients gets established and any information collected from third parties. This policy applies to information we collect during and after your registration and/or during the execution of the jobs in our platform; in e-mail, text and other electronic messages between you and our Platform; through mobile and desktop applications you download from our Platform, which provides dedicated non-browser-based interaction between you and our Platform; When you interact with our advertising and applications on third-party websites and services if those applications or advertising include links to this policy. For details regarding the technologies we employ, the personal information we collect, as well as how to control or block tracking or to delete cookies, please refer to the cookie policy. This Policy does not apply to information collected offline or through any other means, including on any other Platform operated by the Company; or any third party (including our affiliates and subsidiaries), including through any application or content (including advertising) that may link to or be accessible from the Platform.
                    </p>
                </section>
                <section>
                    <h2>3. How do we collect your information? </h2>
                    <p>
                        When you use or access our Platform, we may collect your Personal Information. We may collect your personal information in the following manner:
                    </p>
                    <ul>
                        <li><b>Information you give us:</b> When you use or access our Platform, we may prompt you to share information with us. This includes your first name, last name, username, phone number, email address or other contact details, gender, date of birth, country, Job title, Role or employment details, LinkedIn ID, address, any media, including facial or other images, voice recording, or video that you records/ upload on the Platform.</li>
                        <li><b>Information we collect automatically:</b> When you use or access our Platform, we may automatically collect information about you through the use of cookies, web beacons, and other tracking technologies. This includes usage data, i.e. information about your activity on the Platform, such as features you use, when use the Platform; device data, such as device model ID, pages visited, and type of browser, etc;</li>
                        <li><b>Information we receive from third-parties:</b> We may receive personal information about you from third parties, through authorization that you may have provided such third parties, for sharing information with us.</li>
                    </ul>
                </section>
                <section>
                    <h2>4. How do we use your Information?</h2>
                    <p>
                        We process your personal information for the following purposes:
                    </p>
                    <ul>
                        <li><b>Provision of Platform:</b> We use personal information to provide access to the Platform or to enable you to use the different features of the Platform and to enable you to participate in surveys, promotions, events, or similar initiatives.</li>
                        <li><b>Marketing and Communication:</b> We may use your personal information for marketing or advertising our Platform, including to send you promotional and marketing material.</li>
                        <li><b>Improvements:</b> We may use your personal information for research purposes, and to generally improve the content and functionality of our Platform or the quality of our Platform or to introduce new content or functionality on the Platform.</li>
                        <li><b>Fraud Prevention and Troubleshooting:</b> We may use your personal information for identification and authentication purposes, for fraud detection and prevention purposes, for troubleshooting problems, or to help promote the Platform.</li>
                        <li><b>Analytics Operations:</b> We may collect and use analytics information together with your personal information to build a broader profile of our individual Users so that we can serve you better and provide custom, personalized content and information.</li>
                        <li><b>Legal Obligations:</b> In some cases, we may also have a legal obligation to collect Personal Information about you, or may otherwise need the personal information to comply with any legal requirement. We may share your personal information to respond to court orders, on legal process, or to establish or exercise our legal rights or defend against legal claims.</li>
                    </ul>
                    <p>
                        We may aggregate or de-identify the personal information. If so, we will maintain and use de-identified information in anonymous or de-identified form and we will not attempt to re-identify the information.
                    </p>
                </section>
                <section>
                    <h2>5. Data Security and Storage:</h2>
                    <p>
                        We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration and disclosure. The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Platform, you are responsible for keeping this password confidential. Do not share your password with anyone, and do not reuse the password from this Platform on any other platform or service. Unfortunately, the transmission of information via the Internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Platform. Any transmission of personal information is at your own risk. We are not responsible for the circumvention of any privacy settings or security measures contained on the Platform. {config.projectName} uses third-party vendors and hosting partners for hardware, software, networking, storage, and related technologies to run our platform. Company vendors and partners are compliant with the General Data Protection Regulation (GDPR) per terms of service or contract. By using our platform, you authorize {config.projectName} to transfer, store, and use your information in the United States and any other country where we operate.
                    </p>
                </section>
                <section>
                    <h2>6. Children Under the Age of 18</h2>
                    <p>
                        Our Platform is not intended for children under 18 years of age, as stated in our Terms & Conditions. No one under the age of 18 may provide any personal information to the Platform. We do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this Platform or on or through any of its features/register on the Platform, make any purchases through the Platform, use any of the interactive or public comment features of this Platform or provide any information about yourself to us, including your name, address, telephone number, e-mail address or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 18, please contact us.
                    </p>
                </section>
                <section>
                    <h2>7. Confidential information</h2>
                    <p>
                        {config.projectName} does not want to receive confidential or proprietary information from you through our Platform. Please note that any information or material sent to {config.projectName} will be deemed NOT to be confidential. By sending {config.projectName} any information or material, you grant {config.projectName} an unrestricted, irrevocable license to copy, reproduce, publish, upload, post, transmit, distribute, publicly display, perform, modify, create derivative works from, and otherwise freely use, those materials or information. You also agree that {config.projectName} is free to use any ideas, concepts, know-how, or techniques that you send us for any purpose. However, we will not release your name or otherwise publicize the fact that you submitted materials or other information to us unless: (a) we obtain your prior written permission to use your name; or (b) we first notify you that the materials or other information you submit to a particular part of this site will be published or otherwise used with your name on it; or (c) we are required to do so by law. Personal information that you submit to {config.projectName} for the purpose of receiving products or services will be handled in accordance with our company policies.
                    </p>
                    <p>
                        <b>[Note: Please be aware that in certain circumstances, personal information may be subject to disclosure to government agencies pursuant to judicial proceedings, court order, or legal process.]</b>
                    </p>
                </section>
                <section>
                    <h2>8. Retention Period</h2>
                    <p>
                        We will not retain personal information longer than necessary to fulfill the purposes for which it is collected, including the security of our processing, detecting fraudulent activity, maintaining and improving the Platform, complying with legal and regulatory obligations (e.g. audit, accounting and statutory retention terms), handling disputes, and for the establishment, exercise or defense of legal claims in the countries where we do business, but the circumstances may vary depending on the context and the services.
                    </p>
                </section>
                <section>
                    <h2>9. With whom do we share your Personal Information?</h2>
                    <p>
                        We may share or transfer your personal information, for the purposes mentioned in Clause 4, with the following categories of third parties:
                    </p>
                    <ul>
                        <li><b>Service-Providers:</b> We may share your personal information with our service providers. These include entities who we engage or work with to provide the Platform or its functionality, customer support services, process payments, host data, secure our Platform, help advertise or market our Platform, or to help comply with legal processes.</li>
                        <li><b>Affiliates:</b> We may share your personal information with our affiliates, which may include our parent company, subsidiary or a group</li>
                        <li><b>Business Partners:</b> We may provide your information to business partners including, without limitation, joint marketing partners and sponsors, for various purposes.</li>
                        <li><b>Corporate Transactions:</b> We may share your personal information with another business entity if we (or our assets) plan to merge with, or be acquired by that business entity – in the event of a reorganization, amalgamation, or restructuring of business.</li>
                        <li><b>Other Third-Parties:</b> We may share your personal information with other third parties, on a need-to-know basis, such as our accountants, lawyers, auditors, law enforcement officials, etc. We may share your Personal Information to respond to court orders, on legal processes, or to establish or exercise our legal rights or defend against legal claims.</li>
                        <li><b>With Your Consent or Otherwise at Your Direction:</b> In addition, we may share your information with third parties with your consent which you gave while sharing your personal information keeping privacy standards intact with such third parties.</li>
                    </ul>
                    <p>
                        Any third parties that we may share your personal information with are obliged to provide a similar level of protection, as is provided under this Policy and to use it only to fulfill the service they provide you on our behalf. When such third parties no longer need your personal information to fulfill this service, they will dispose of such details in line with our policy unless they are themselves under a legal obligation to retain the information.
                    </p>
                </section>
                <section>
                    <h2>10. Cookies</h2>
                    <p>
                        We, along with the service providers that help us provide the Site, use “cookies”, which are small computer files sent to or accessed from your web browser or your device that contain information about your computer, such as a user ID, user settings, browsing history and activities conducted while using the Site. A cookie typically contains the name of the domain (internet location) from which the cookie originated, the “lifetime” of the cookie (i.e., when it expires) and a randomly generated unique number or similar identifier.The Website may use data collection tools to collect information from the device used to access the Site, such as operating system type, browser type, domain and other system settings, as well as the operating system used and the country and time zone in which the computer or device is located. Web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to manage and delete cookies, visit www.allaboutcookies.org.By using this Website you consent to have these Cookies installed on your device. Cookies may be cleared manually within your browser’s settings. To see your specific browser’s instructions on how to clear Cookies, please follow the appropriate link below:
                    </p>
                    <ul>
                        <li><b>Chrome:</b> <a href="https://support.google.com/accounts/answer/9098093">https://support.google.com/accounts/answer/9098093</a> </li>
                        <li><b>Edge:</b> <a href="https://support.microsoft.com/en-us/help/4027947/windows-delete-cookies">https://support.microsoft.com/en-us/help/4027947/windows-delete-cookies</a> </li>
                        <li><b>Firefox:</b> <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a> </li>
                        <li><b>Opera:</b> <a href="https://www.opera.com/help/tutorials/security/cookies/">https://www.opera.com/help/tutorials/security/cookies/</a> </li>
                        <li><b>Safari:</b> <a href="https://support.apple.com/guide/safari/clear-your-browsing-history-sfri47acf5d6/mac">https://support.apple.com/guide/safari/clear-your-browsing-history-sfri47acf5d6/mac</a> </li>
                    </ul>
                    <p>
                        Although users are not required to accept cookies, blocking or rejecting them may prevent access to some features available through the services. This site ignores “Do Not Track” browser settings.
                    </p>
                </section>
                <section>
                    <h2>11. Your Rights</h2>
                    <p>
                        It is important to us that you are able to access and review the personal information we have about you and make corrections to it or delete it, as necessary. You may also decline to submit any personal information or withdraw your consent under this Policy at any time.  You may also submit a request to delete personal information. To do so, you can write to us at info@{projectNameLower}.com. However, this may affect our ability to provide you with or Platform.
                    </p>
                    <p>
                        EU Data Subjects have the following rights: (1) you have the right to request a copy of the data that we have related to you; (2) you have a right to correct data that we have related to you that is inaccurate or incomplete; (3) you can request the data to be erased from our records, and {config.projectName} will comply with that request when legally required to do so; (4) where certain conditions apply to have a right to restrict the processing; (5) you have the right to have the data we have related to you transferred to another organization; (6) you have the right to object to certain types of processing; (7) you have a right to object to automated processing; (8) and where applicable you have the right to file a complaint to the applicable supervisory authority.
                    </p>
                    <p>
                        California consumers have the right to request and receive (1) the categories of personal information {config.projectName} has collected about that consumer; (2) the categories of sources from which the personal information is collected; (3) the business or commercial purpose for collecting or selling personal information; (4) the categories of third parties with whom {config.projectName} shares personal information; and (5) the specific pieces of personal information {config.projectName} has collected about that consumer.
                    </p>
                </section>
            </div>
            <p>
                {config.projectName} does not discriminate in any way against an individual exercising his or her rights under any relevant data privacy statute or regulation, including the California Consumer Privacy Act.
            </p>
            <p>
                If you have any questions about your Personal Information, including making a request pursuant to the California Consumer Privacy Act, please <Link to="/contact">contact us</Link>.
            </p>
            <p>
                Feedback: Including Comments, Questions and Complaints
            </p>
            <p>
                We value your valuable feedback which also includes any comments, questions/suggestions and complaints about us or about our use of your information including our present privacy policy and for the same you can contact us. Our contact details are as follows:
            </p>
            <p>
                <b>{projectNameUpper}: IT Park, Pune, Maharashtra, India - 411052 </b>
            </p>
            <p>
                <b>Email:</b> <span className="links">legal@{projectNameLower}.com</span>
            </p>
            <p>
                If you do not receive a response to your inquiry relating to our privacy practices – or if you feel your inquiry has not been satisfactorily addressed, you may submit a complaint to your local data supervisory authority. If you make a privacy complaint with us, we will respond to let you know how your complaint will be handled. We may ask you for further details, consult with our experts/parties and keep records regarding your complaint when you send us, or provide us with personal information via email (that is, in a message containing a question or comment).
            </p>

        </div>
    );
}

export default PrivacyPolicy;
