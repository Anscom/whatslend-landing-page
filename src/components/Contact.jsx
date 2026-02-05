import { useState } from 'react'

const initialFormState = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatusMessage(null)

    if (!validate()) return

    setIsSubmitting(true)

    try {
      // Simulate sending – replace with real API call when ready
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent.',
      })
      setFormData(initialFormState)
    } catch (error) {
      setStatusMessage({
        type: 'error',
        text: 'Failed to send message. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg text-slate-600">
            We’re here to help. Send us a message and our team will get back to you soon.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-14 items-start">
          {/* Contact form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  placeholder="Your full name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-sm md:text-base text-slate-900 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none"
                  placeholder="Write your message here..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-lg bg-purple-600 px-4 py-3.5 text-sm md:text-base font-semibold text-white shadow-md transition hover:bg-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>

              {statusMessage && (
                <p
                  className={`text-sm ${
                    statusMessage.type === 'success'
                      ? 'text-emerald-600'
                      : 'text-red-500'
                  }`}
                >
                  {statusMessage.text}
                </p>
              )}
            </form>
          </div>

          {/* Contact info & map */}
          <div className="space-y-6 lg:space-y-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                Contact Information
              </h3>

              <p className="mb-6 text-sm md:text-base text-slate-600">
                Prefer to reach out directly? You can contact us via phone or
                email, or visit us at our office.
              </p>

              <div className="space-y-4 text-sm md:text-base">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                    P
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <a
                      href="tel:+6588670462"
                      className="text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      +65 8867 0462
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                    E
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a
                      href="mailto:contactus@whatslend.com"
                      className="text-slate-600 hover:text-purple-600 transition-colors"
                    >
                      contactus@whatslend.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p className="text-slate-600">
                      38 Jln Pemimpin
                      <br />
                      Singapore 577178
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Find Us
              </h3>
              <div className="overflow-hidden rounded-xl border border-slate-100">
                <iframe
                  src="https://www.google.com/maps?q=38+Jln+Pemimpin,+Singapore+577178&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WhatsLend office location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

