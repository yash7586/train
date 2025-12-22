import { motion } from 'motion/react';
import { BannerSlider } from '../components/BannerSlider';
import { ProductCard } from '../components/ProductCard';
import { Zap, Users, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'STEAM  ENGINE',
    subtitle: '410 mm x 115 mm x 160 mm',
    price: '₹46,000.00',
    image: 'S1.png',
    features: [
      '410 mm x 115 mm x 160 mm ',
      '5.5 kg apprx',
      'Motor Drive',
      'DC 12V - Electric / Battery',
      'CHASSIS & WHEEl :  Metal Made. Body & Parts - PVC & Metal made (as required). All the items used, are being manufactured by us with surgicall precision using our very own  3D printer & Laser Cutting Machine.',
      'Quantity: 1',
    ],
  },
  {
    title: 'ELECTRIC  LOCOMOTIVE (WAP 7)',
    subtitle: '425 mm x 115 mm x 165 mm',
    price: '₹47,000.00',
    image: 'S2.jpeg',
    features: [
      '420 mm x 115 mm x 165 mm ',
      '6 kg apprx',
      'Motor Drive',
      ' DC 12V - Electric / Battery',
      'CHASSIS & WHEEl :  Metal Made. Body & Parts - PVC & Metal made (as required). All the items used, are being manufactured by us with surgicall precision using our very own  3D printer & Laser Cutting Machine.',
      'Quantity: 1',
    ],
    popular: true,
  },
  {
    title: 'ELECTRIC  LOCOMOTIVE (WAG 9)',
    subtitle: '420 mm x 115 mm x 165 mm ',
    price: '₹47,000.00',
    image: 'S3.jpeg',
    features: [
      '420 mm x 115 mm x 165 mm ',
      '6 kg apprx ',
      'Motor Drive',
      ' DC 12V - Electric / Battery',
      'CHASSIS & WHEEl :  Metal Made. Body & Parts - PVC & Metal made (as required). All the items used, are being manufactured by us with surgicall precision using our very own  3D printer & Laser Cutting Machine.',
      'Quantity: 1',
    ],
  },
];

const features = [
  {
    icon: Zap,
    title: '60% Faster Service',
    description: 'Deliver food in half the time compared to traditional service',
  },
  {
    icon: Users,
    title: 'Reduce Staff by 40%',
    description: 'Lower operational costs with automated delivery',
  },
  {
    icon: TrendingUp,
    title: '35% More Tables',
    description: 'Increase capacity without expanding your space',
  },
  {
    icon: Shield,
    title: 'Hygiene Guaranteed',
    description: 'Contactless delivery ensures food safety',
  },
  {
    icon: Clock,
    title: '24/7 Operation',
    description: 'Consistent service quality round the clock',
  },
  {
    icon: Sparkles,
    title: 'Unique Experience',
    description: 'Create memorable dining moments for customers',
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="container mx-auto px-4 py-12">
        <BannerSlider />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Why Choose TrainDeliver?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your restaurant with cutting-edge automation technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-slate-900" />
              </div>
              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Preview */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            From small cafes to large restaurants, we have the perfect solution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/products"
            className="inline-block px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Ready to Transform Your Restaurant?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and custom quote for your restaurant
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 rounded-lg hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/50"
            >
              Get Free Quote
            </Link>
            <Link
              to="/how-it-works"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              See How It Works
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
