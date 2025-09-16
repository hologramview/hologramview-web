'use client'

import { motion } from 'framer-motion'

export default function TermsOfService() {
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
              Terms of Service
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
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using Hologramview Technologies services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Services Description</h2>
            <p>
              Hologramview Technologies provides custom software development services including but not limited to:
            </p>
            <ul>
              <li>Custom software development</li>
              <li>Web application development</li>
              <li>Mobile application development (iOS & Android)</li>
              <li>AI implementation and integration</li>
              <li>Software systems architecture</li>
              <li>Technical consulting</li>
            </ul>

            <h2>3. Project Terms</h2>
            <h3>3.1 Project Scope</h3>
            <p>
              All projects begin with a detailed scope of work document that outlines deliverables, timelines, and costs. Changes to the agreed scope may result in additional charges and timeline adjustments.
            </p>

            <h3>3.2 Payment Terms</h3>
            <p>
              Payment terms will be specified in individual project contracts. Generally, projects require an upfront deposit with remaining payments tied to milestone deliveries.
            </p>

            <h3>3.3 Intellectual Property</h3>
            <p>
              Upon full payment, clients will own the intellectual property rights to custom-developed software. Hologramview Technologies retains rights to any proprietary tools, libraries, or methodologies used in development.
            </p>

            <h2>4. Client Responsibilities</h2>
            <p>
              Clients are responsible for:
            </p>
            <ul>
              <li>Providing clear requirements and specifications</li>
              <li>Timely feedback on deliverables</li>
              <li>Providing necessary access to systems and data</li>
              <li>Timely payment as agreed</li>
            </ul>

            <h2>5. Limitations of Liability</h2>
            <p>
              Hologramview Technologies' liability shall not exceed the total amount paid for the specific project. We are not liable for any indirect, incidental, or consequential damages.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              We maintain strict confidentiality of all client information and project details. Non-disclosure agreements can be executed upon request.
            </p>

            <h2>7. Support and Maintenance</h2>
            <p>
              Post-launch support terms are specified in individual project contracts. We offer various support packages including bug fixes, updates, and feature enhancements.
            </p>

            <h2>8. Termination</h2>
            <p>
              Either party may terminate services with written notice. Upon termination, payment is due for all completed work, and any work in progress will be delivered in its current state.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws. Any disputes will be resolved through good faith negotiation or mediation.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              Hologramview Technologies reserves the right to modify these terms at any time. Updated terms will be posted on our website with the revision date.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:hologramview@gmail.com" className="text-blue-600 hover:text-blue-800">hologramview@gmail.com</a></p>
              <p><strong>Company:</strong> Hologramview Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}