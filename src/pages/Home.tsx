import { motion } from 'motion/react';
import { BannerSlider } from '../components/BannerSlider';
import { ProductCard } from '../components/ProductCard';
import { Zap, Users, TrendingUp, Shield, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
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
