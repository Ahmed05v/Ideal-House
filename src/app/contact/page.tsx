'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <h1 className="text-5xl font-serif font-bold mb-4 text-center text-dark">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2 text-dark">📍 Address</h3>
              <p className="text-gray-600">
                123 Furniture Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-dark">📞 Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+15551234567" className="hover:text-primary transition">
                  (555) 123-4567
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-dark">📧 Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@idealhouse.com" className="hover:text-primary transition">
                  info@idealhouse.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-dark">🕐 Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-dark">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-dark">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-dark">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-dark">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-primary"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
