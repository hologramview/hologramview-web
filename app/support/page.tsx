'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We specialize in custom software development, web applications, mobile apps (iOS & Android), AI implementation, and complex software systems for businesses.',
  },
  {
    question: 'How do I get started with a project?',
    answer: 'Contact us through the form below or email us directly at hologramview@gmail.com. We\'ll schedule a consultation to discuss your requirements and provide a project proposal.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development approach with regular client communication, milestone deliveries, and iterative feedback to ensure your project meets your exact needs.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer comprehensive post-launch support including bug fixes, updates, maintenance, and feature enhancements based on your needs.',
  },
  {
    question: 'What technologies do you work with?',
    answer: 'We work with modern technologies including React, Next.js, Node.js, Python, Swift, Kotlin, AI/ML frameworks, and various databases and cloud platforms.',
  },
]

export default function Support() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Create mailto link with form data
    const mailtoLink = `mailto:hologramview@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`
    
    // Open default email client
    window.location.href = mailtoLink
    
    // Reset form and show success message
    setTimeout(() => {
      setStatus('success')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, 500)
  }

  return (
    <div className="bg-white pt-40">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 sm:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 relative">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Need help with your project? We're here to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Full Name *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email Address *
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                  Subject *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message *
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="Please describe your project or inquiry in detail..."
                    required
                  />
                </div>
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                  <div className="text-green-800 text-sm font-medium">
                    ✅ Your email client should open with your message. If not, please email us directly at hologramview@gmail.com
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Opening Email...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Direct Email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:pl-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Direct Email</h3>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <a 
                    href="mailto:hologramview@gmail.com"
                    className="text-xl text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                  >
                    hologramview@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Click to open your email client
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Response Time</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">⚡</span>
                  General inquiries: Within 24 hours
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Project consultations: Within 48 hours
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">🔧</span>
                  Technical support: Within 12 hours
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="mx-auto mt-32 max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>
          <dl className="mt-10 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Documentation Link */}
        <div className="hidden mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Need More Help?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out our detailed documentation for guides, tutorials, and API references.
          </p>
          <a
            href="/docs"
            className="mt-8 inline-block rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500"
          >
            View Documentation
          </a>
        </div>
      </div>
    </div>
  )
}
