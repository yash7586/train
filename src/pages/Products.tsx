import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';
import { Check } from 'lucide-react';

const allProducts = [
  {
    title: 'Basic Train System',
    subtitle: '4 tables • 10m track',
    price: '₹2.5 Lakh',
    image: 'https://images.unsplash.com/photo-1765055509253-0620d7849767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdHJhaW4lMjBkZWxpdmVyeXxlbnwxfHx8fDE3NjU5NTMxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Serves up to 4 tables',
      '10-meter circular track',
      'Basic control system',
      '1-year warranty',
      'Installation included',
    ],
  },
  {
    title: 'Pro Train System',
    subtitle: '12 tables • Kitchen station',
    price: '₹6.5 Lakh',
    image: 'https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1OTI2Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Serves up to 12 tables',
      '25-meter advanced track',
      'Kitchen integration',
      'Smart control panel',
      '2-year warranty',
    ],
    popular: true,
  },
  {
    title: 'Enterprise System',
    subtitle: '50+ tables • Multi-level',
    price: '₹15 Lakh+',
    image: 'https://images.unsplash.com/photo-1623123096729-26b481292919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTk1MzE0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Unlimited tables',
      'Multi-level tracks',
      'AI-powered routing',
      'Complete automation',
      '5-year warranty',
    ],
  },
  {
    title: 'Starter Kit',
    subtitle: '2 tables • 5m track',
    price: '₹1.5 Lakh',
    image: 'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBzeXN0ZW18ZW58MXx8fHwxNzY1OTUzMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Perfect for testing',
      'Compact design',
      'Easy installation',
      '6-month warranty',
      'Training included',
    ],
  },
  {
    title: 'Premium Plus',
    subtitle: '25 tables • Dual track',
    price: '₹10 Lakh',
    image: 'https://images.unsplash.com/photo-1684050611203-cfd998ca2bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwdHJhY2tzfGVufDF8fHx8MTc2NTk1MzE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Dual track system',
      'Serves 25 tables',
      'Advanced sensors',
      '3-year warranty',
      'Priority support',
    ],
  },
  {
    title: 'Custom Solution',
    subtitle: 'Tailored to your needs',
    price: 'Custom Quote',
    image: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1OTUzMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'Fully customizable',
      'Site assessment',
      'Custom track design',
      'Dedicated engineer',
      'Extended warranty',
    ],
  },
];

const comparisonFeatures = [
  'Number of Tables',
  'Track Length',
  'Control System',
  'Kitchen Integration',
  'Mobile App',
  'Analytics Dashboard',
  'Multi-level Support',
  'AI Routing',
  'Warranty Period',
  'Installation',
];

export default function Products() {
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
            Our Product Range
          </h1>
          <p className="text-xl text-gray-400">
            From compact starter kits to enterprise-level automation, find the perfect train delivery system for your restaurant
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, index) => (
            <ProductCard {...product} index={index} key={index} />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Compare Products
          </h2>
          <p className="text-xl text-gray-400">
            Find the right fit for your restaurant size and budget
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-white py-4 px-4">Features</th>
                <th className="text-center text-white py-4 px-4">Basic</th>
                <th className="text-center text-white py-4 px-4">Pro</th>
                <th className="text-center text-white py-4 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="border-b border-white/10">
                  <td className="text-gray-300 py-4 px-4">{feature}</td>
                  <td className="text-center py-4 px-4">
                    <div className="flex justify-center">
                      <Check className="w-5 h-5 text-amber-400" />
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <div className="flex justify-center">
                      <Check className="w-5 h-5 text-amber-400" />
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">
                    <div className="flex justify-center">
                      <Check className="w-5 h-5 text-amber-400" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* Add-ons Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Available Add-ons
          </h2>
          <p className="text-xl text-gray-400">
            Enhance your system with additional features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Track Extension Kit', price: '₹50,000' },
            { name: 'Mobile App Control', price: '₹25,000' },
            { name: 'Analytics Dashboard', price: '₹35,000' },
            { name: 'Voice Command Module', price: '₹45,000' },
            { name: 'Extended Warranty (3 years)', price: '₹75,000' },
            { name: 'Premium Support Package', price: '₹1,00,000/year' },
          ].map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all"
            >
              <h3 className="text-white mb-2">{addon.name}</h3>
              <p className="text-amber-400">{addon.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
