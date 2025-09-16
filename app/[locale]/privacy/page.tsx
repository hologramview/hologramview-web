'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
  return (
    <div className="bg-white pt-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Hologramview Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Information You Provide</h3>
            <p>We may collect information that you voluntarily provide to us, including:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number</li>
              <li><strong>Project Information:</strong> Project requirements, specifications, and related communications</li>
              <li><strong>Business Information:</strong> Company name, industry, and business needs</li>
              <li><strong>Communication Records:</strong> Emails, messages, and other correspondence</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li><strong>Usage Data:</strong> Pages visited, time spent, and navigation patterns</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
              <li><strong>Cookies:</strong> Small files stored on your device for website functionality</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li><strong>Service Delivery:</strong> To provide software development services and support</li>
              <li><strong>Communication:</strong> To respond to inquiries and provide project updates</li>
              <li><strong>Project Management:</strong> To plan, execute, and deliver custom software solutions</li>
              <li><strong>Business Operations:</strong> To manage contracts, invoicing, and administrative tasks</li>
              <li><strong>Website Improvement:</strong> To enhance user experience and functionality</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:</p>
            
            <h3>4.1 Service Providers</h3>
            <p>We may share information with trusted third-party service providers who assist us in:</p>
            <ul>
              <li>Website hosting and maintenance</li>
              <li>Email communication services</li>
              <li>Cloud storage and backup services</li>
              <li>Payment processing (when applicable)</li>
            </ul>

            <h3>4.2 Legal Requirements</h3>
            <p>We may disclose information if required by law or if we believe disclosure is necessary to:</p>
            <ul>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and property</li>
              <li>Ensure the safety of our clients and employees</li>
              <li>Investigate potential violations of our terms</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Encrypted data transmission (HTTPS/SSL)</li>
              <li>Secure data storage practices</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Employee training on data protection</li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide services and fulfill the purposes outlined in this policy. Specifically:
            </p>
            <ul>
              <li><strong>Project Data:</strong> Retained for the duration of the project plus 3 years for support purposes</li>
              <li><strong>Communication Records:</strong> Retained for 3 years from last contact</li>
              <li><strong>Website Analytics:</strong> Retained for 2 years</li>
              <li><strong>Legal Documents:</strong> Retained as required by applicable laws</li>
            </ul>

            <h2>7. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your information (subject to legal obligations)</li>
              <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>

            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Analyze website usage</li>
              <li>Improve website performance</li>
            </ul>
            <p>
              You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be processed and stored in countries other than your own. We ensure appropriate safeguards are in place to protect your information during international transfers.
            </p>

            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information promptly.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a new effective date.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:hologramview@gmail.com" className="text-blue-600 hover:text-blue-800">hologramview@gmail.com</a></p>
              <p className="mb-2"><strong>Company:</strong> Hologramview Technologies</p>
              <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Your Privacy Matters</h3>
              <p className="text-blue-800">
                We are committed to maintaining the confidentiality and security of your information. 
                If you have any concerns about how we handle your data, please don't hesitate to reach out to us.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}