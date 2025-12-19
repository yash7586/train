import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Check } from 'lucide-react';
import { useLeads } from '../context/LeadContext';
import { useLocation } from 'react-router-dom';

export function ContactForm() {
  const location = useLocation();
  const { addLead } = useLeads();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    product: (location.state as any)?.product || '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ YOUR GOOGLE FORM SUBMIT URL
    const googleFormURL =
      'https://docs.google.com/forms/d/e/1FAIpQLSeKHDK177EXtiO_jJrupl-wUF_lpUYVjTGE2zChvlFBHn44Ng/viewform?usp=header';

    // ✅ POSITIONAL FORM DATA (NO entry.xxxxx needed)
    const data = new FormData();
    data.append('entry.0', formData.name);
    data.append('entry.1', formData.email);
    data.append('entry.2', formData.phone);
    data.append('entry.3', formData.restaurantName);
    data.append('entry.4', formData.product);
    data.append('entry.5', formData.message);

    await fetch(googleFormURL, {
      method: 'POST',
      mode: 'no-cors',
      body: data,
    });

    // ✅ Keep your existing lead logic
    addLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      restaurantName: formData.restaurantName,
      product: formData.product,
    });

    setIsSubmitted(true);

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
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
            />

            <input
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              required
              placeholder="Restaurant Name"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
            />

            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
            >
              <option value="" className="bg-slate-900">Select Product</option>
              <option value="Custom Solution" className="bg-slate-900">
                Custom Solution
              </option>
            </select>

            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Additional Requirements"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 rounded-lg hover:scale-105 transition-all"
            >
              Send Request <Send className="w-5 h-5" />
            </button>

            <p className="text-sm text-gray-400 text-center">
              We respect your privacy. Your information will not be shared.
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}