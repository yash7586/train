import { useState } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Heart,
  Sparkles,
  BarChart,
  Shield,
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: '35% Higher Revenue',
    description: 'Serve more customers with faster table turnover and increased capacity',
    stat: '+35%',
  },
  {
    icon: Users,
    title: '40% Labor Cost Reduction',
    description: 'Reduce waitstaff needs while maintaining excellent service quality',
    stat: '-40%',
  },
  {
    icon: Clock,
    title: '60% Faster Service',
    description: 'Deliver food in half the time compared to traditional table service',
    stat: '60%',
  },
  {
    icon: DollarSign,
    title: 'ROI in 12-18 Months',
    description: 'Quick return on investment through operational efficiency',
    stat: '12-18mo',
  },
  {
    icon: Heart,
    title: '95% Customer Satisfaction',
    description: 'Unique dining experience that customers love and share',
    stat: '95%',
  },
  {
    icon: Sparkles,
    title: '50% Social Media Reach',
    description: 'Generate organic marketing through viral-worthy dining experience',
    stat: '+50%',
  },
  {
    icon: BarChart,
    title: 'Real-Time Analytics',
    description: 'Track performance, optimize operations, and make data-driven decisions',
    stat: '24/7',
  },
  {
    icon: Shield,
    title: '100% Contactless',
    description: 'Enhanced hygiene and safety with minimal human contact',
    stat: '100%',
  },
];

const caseStudies = [
  {
    name: 'The Train Carnival',
    location: 'Pune maharashtra',
    size: '12 tables',
    result: '45% revenue increase in 6 months',
    quote: 'Our customers love the train system. It\'s become our signature feature and we\'re fully booked every weekend.',
    image: 'https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY1OTI2Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The  Platform 55',
    location: 'Faridcort punjab',
    size: '25 tables',
    result: '60% reduction in service time',
    quote: 'The system paid for itself in 14 months. Staff productivity is up and our customers are happier than ever.',
    image: 'https://images.unsplash.com/photo-1765055509253-0620d7849767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdHJhaW4lMjBkZWxpdmVyeXxlbnwxfHx8fDE3NjU5NTMxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'The Train Restuarant Buxer',
    location: 'Buxer Bihar',
    size: '50 tables',
    result: '70% increase in table turnover',
    quote: 'Best investment we\'ve made. The enterprise system handles our high volume seamlessly.',
    image: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1OTUzMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export default function Benefits() {
  const [investment, setInvestment] = useState(650000);
  const [tables, setTables] = useState(12);
  const [avgBill, setAvgBill] = useState(500);

  // ROI Calculator Logic
  const currentMonthlyRevenue = tables * 4 * avgBill * 30; // 4 turns per day
  const withTrainRevenue = tables * 6 * avgBill * 30; // 6 turns per day with train
  const additionalRevenue = withTrainRevenue - currentMonthlyRevenue;
  const laborSavings = 40000; // Average savings per month
  const monthlyGain = additionalRevenue + laborSavings;
  const roiMonths = Math.ceil(investment / monthlyGain);

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
            Benefits & ROI
          </h1>
          <p className="text-xl text-gray-400">
            Discover how train delivery systems transform restaurant operations and profitability
          </p>
        </motion.div>
      </section>

      {/* Benefits Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-slate-900" />
                </div>
                <div className="text-2xl text-amber-400">{benefit.stat}</div>
              </div>
              <h3 className="text-xl text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            ROI Calculator
          </h2>
          <p className="text-xl text-gray-400">
            Calculate your potential return on investment
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-white mb-2">System Investment</label>
              <input
                type="range"
                min="150000"
                max="2000000"
                step="50000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-amber-400 mt-2">₹{investment.toLocaleString('en-IN')}</div>
            </div>

            <div>
              <label className="block text-white mb-2">Number of Tables</label>
              <input
                type="range"
                min="4"
                max="50"
                step="1"
                value={tables}
                onChange={(e) => setTables(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-amber-400 mt-2">{tables} tables</div>
            </div>

            <div>
              <label className="block text-white mb-2">Average Bill (₹)</label>
              <input
                type="range"
                min="200"
                max="2000"
                step="50"
                value={avgBill}
                onChange={(e) => setAvgBill(Number(e.target.value))}
                className="w-full"
              />
              <div className="text-amber-400 mt-2">₹{avgBill}</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">Monthly Revenue Gain</div>
              <div className="text-3xl text-white">₹{additionalRevenue.toLocaleString('en-IN')}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">Monthly Labor Savings</div>
              <div className="text-3xl text-white">₹{laborSavings.toLocaleString('en-IN')}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-2">ROI Timeline</div>
              <div className="text-3xl text-amber-400">{roiMonths} months</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              * Calculations based on industry averages. Actual results may vary.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400">
            See how restaurants are thriving with TrainDeliver
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-white mb-2">{study.name}</h3>
                <div className="text-amber-400 text-sm mb-4">{study.location} • {study.size}</div>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <div className="text-green-400">{study.result}</div>
                </div>
                <p className="text-gray-400 italic">"{study.quote}"</p>
              </div>
            </motion.div>
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
            Before vs After
          </h2>
          <p className="text-xl text-gray-400">
            See the transformation in key metrics
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left text-white py-4 px-6">Metric</th>
                  <th className="text-center text-red-400 py-4 px-6">Before</th>
                  <th className="text-center text-green-400 py-4 px-6">After</th>
                  <th className="text-center text-amber-400 py-4 px-6">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Service Time', before: '15 min', after: '6 min', improvement: '60%' },
                  { metric: 'Table Turnover', before: '4x/day', after: '6x/day', improvement: '50%' },
                  { metric: 'Staff Required', before: '8 people', after: '5 people', improvement: '38%' },
                  { metric: 'Monthly Revenue', before: '₹8L', after: '₹12L', improvement: '50%' },
                  { metric: 'Customer Satisfaction', before: '3.8/5', after: '4.7/5', improvement: '24%' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="text-white py-4 px-6">{row.metric}</td>
                    <td className="text-center text-gray-400 py-4 px-6">{row.before}</td>
                    <td className="text-center text-white py-4 px-6">{row.after}</td>
                    <td className="text-center text-amber-400 py-4 px-6">+{row.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
