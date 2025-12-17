import { motion } from 'motion/react';
import { ContactForm } from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-400">
            Ready to revolutionize your restaurant? Fill out the form below and our team will contact you within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: MapPin,
              title: 'Visit Us',
              content: '123 Tech Park, Innovation Hub, Mumbai 400001',
            },
            {
              icon: Phone,
              title: 'Call Us',
              content: '+91 98765 43210',
            },
            {
              icon: Mail,
              title: 'Email Us',
              content: 'contact@traindeliver.com',
            },
            {
              icon: Clock,
              title: 'Working Hours',
              content: 'Mon-Sat: 9AM - 6PM',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-slate-900" />
              </div>
              <h3 className="text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-4 py-12">
        <ContactForm />
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden h-96"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64283396756!2d72.74109995!3d19.08219695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-400">
            Get quick answers to frequently asked questions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: 'How long does installation take?',
              answer: 'Installation typically takes 3-5 days depending on the system size. Our team handles everything from track setup to staff training.',
            },
            {
              question: 'What is the ROI timeline?',
              answer: 'Most restaurants see ROI within 12-18 months through reduced labor costs and increased table turnover.',
            },
            {
              question: 'Do you provide maintenance?',
              answer: 'Yes, all systems come with warranty and we offer annual maintenance packages for ongoing support.',
            },
            {
              question: 'Can the system work in small spaces?',
              answer: 'Absolutely! Our Starter and Basic systems are designed for compact restaurant spaces starting from 500 sq ft.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
