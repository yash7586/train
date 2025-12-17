import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: string;
  image: string;
  features: string[];
  popular?: boolean;
  index: number;
}

export function ProductCard({ title, subtitle, price, image, features, popular, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 rounded-full text-sm">
            Most Popular
          </div>
        </div>
      )}

      <div className="relative h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-amber-500/30 rounded-lg">
            <div className="text-xs text-gray-400 mb-1">Starting at</div>
            <div className="text-xl text-amber-400">{price}</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-sm text-amber-400 mb-2">{subtitle}</div>
          <h3 className="text-2xl text-white mb-4">{title}</h3>

          {/* Features */}
          <ul className="space-y-3 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-300">
                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            to="/contact"
            state={{ product: title }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 rounded-lg hover:from-amber-400 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50"
          >
            Get Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
