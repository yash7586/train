import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Check } from 'lucide-react';
import { useLeads } from '../context/LeadContext';
import { useLocation } from 'react-router-dom';

export function ContactForm() {
  const location = useLocation();
  const { addLead } = useLeads();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    product: (location.state as any)?.product || '',
    message: '',
  });

  // ---------------- HANDLE CHANGE ----------------
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- HANDLE SUBMIT ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to save lead');
      }

      // optional: save in context
      addLead(formData);

      setIsSubmitted(true);
      setIsLoading(false);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          restaurantName: '',
          product: '',
          message: '',
        });
      }, 3000);
    } catch (error) {
      setIsLoading(false);
      alert('Server error. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl text-white mb-4">Thank You!</h3>
            <p className="text-gray-300">
              We've received your request. Our team will contact you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME & EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@restaurant.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* PHONE & RESTAURANT */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 xxxxx xxxxx"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-white mb-2">
                  Restaurant Name *
                </label>
                <input
                  type="text"
                  name="restaurantName"
                  required
                  value={formData.restaurantName}
                  onChange={handleChange}
                  placeholder="The Food House"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* PRODUCT */}
            <div>
              <label className="block text-white mb-2">
                Interested Product *
              </label>
              <select
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="" className="bg-slate-900">
                  Select a product
                </option>
                <option value="Custom Solution" className="bg-slate-900">
                  Custom Solution
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-white mb-2">
                Additional Requirements
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your restaurant and specific requirements..."
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors resize-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 rounded-lg hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/50 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Request'}
              <Send className="w-5 h-5" />
            </button>

            <p className="text-sm text-gray-400 text-center">
              We respect your privacy. Your information will not be shared with third parties.
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}