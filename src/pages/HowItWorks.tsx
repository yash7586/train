import { motion } from 'motion/react';
import { Smartphone, Utensils, Train, Bell, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: 'Customer Orders',
    description: 'Customers place orders via tablet or staff member enters order into the system',
    image: 'https://images.unsplash.com/photo-1713857297379-6fc26e70f581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBzeXN0ZW18ZW58MXx8fHwxNzY1OTUzMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Utensils,
    title: 'Kitchen Prepares',
    description: 'Order is sent to kitchen where chefs prepare fresh food and place on train carriages',
    image: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY1OTUzMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Train,
    title: 'Automated Delivery',
    description: 'AI-powered system routes the train to the correct table via the track network',
    image: 'https://images.unsplash.com/photo-1684050611203-cfd998ca2bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwdHJhY2tzfGVufDF8fHx8MTc2NTk1MzE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    icon: Bell,
    title: 'Customer Receives',
    description: 'Train arrives at table, customer receives food, and empty train returns to kitchen',
    image: 'https://images.unsplash.com/photo-1765055509253-0620d7849767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwdHJhaW4lMjBkZWxpdmVyeXxlbnwxfHx8fDE3NjU5NTMxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const technicalSpecs = [
  {
    title: 'Track System',
    specs: [
      'Stainless steel rails',
      'Modular design',
      'Easy maintenance',
      'Weather resistant',
    ],
  },
  {
    title: 'Train Carriages',
    specs: [
      'Food-grade materials',
      'Temperature controlled',
      'Spill-proof design',
      'LED indicators',
    ],
  },
  {
    title: 'Control System',
    specs: [
      'Cloud-based software',
      'Real-time tracking',
      'Mobile app integration',
      'Analytics dashboard',
    ],
  },
  {
    title: 'Safety Features',
    specs: [
      'Emergency stop button',
      'Collision detection',
      'Speed control',
      'Backup power system',
    ],
  },
];

export default function HowItWorks() {
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
            How It Works
          </h1>
          <p className="text-xl text-gray-400">
            Experience the future of restaurant service with our automated train delivery system
          </p>
        </motion.div>
      </section>

      {/* Process Steps */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-slate-900" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-6xl text-white/20">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full mb-4">
                  <span className="text-amber-400">Step {index + 1}</span>
                </div>
                <h2 className="text-4xl text-white mb-4">{step.title}</h2>
                <p className="text-xl text-gray-400 mb-6">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="flex items-center gap-2 text-amber-400">
                    <span>Next Step</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-400">
            Built with cutting-edge technology and premium materials
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSpecs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
            >
              <h3 className="text-xl text-white mb-4">{spec.title}</h3>
              <ul className="space-y-2">
                {spec.specs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Installation Process */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Installation Process
          </h2>
          <p className="text-xl text-gray-400">
            From consultation to launch, we handle everything
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { day: 'Day 1', title: 'Site Assessment', description: 'Our engineers visit your restaurant to plan the track layout' },
              { day: 'Day 2-3', title: 'Track Installation', description: 'Professional installation of rails and control systems' },
              { day: 'Day 4', title: 'System Testing', description: 'Comprehensive testing of all trains and safety features' },
              { day: 'Day 5', title: 'Staff Training', description: 'Complete training for your team and official launch' },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-6"
              >
                <div className="text-sm text-amber-400 mb-2">{phase.day}</div>
                <h3 className="text-xl text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Watch a live demo of our train delivery system at a partner restaurant
          </p>
          <div className="aspect-video bg-slate-900/50 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-l-[15px] border-l-white border-y-[10px] border-y-transparent ml-1" />
              </div>
              <p className="text-gray-400">Demo video placeholder</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
