import { motion } from 'motion/react';
import { ProductCard } from '../components/ProductCard';

const allProducts = [
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
      'DC 12V - Electric / Battery',
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
  {
    title: 'DIESEL LOCOMOTIVE',
    subtitle: '425 mm x 115 mm x 165 mm',
    price: '₹47,500.00',
    image: 'S4.jpeg',
    features: [
      '425 mm x 115 mm x 165 mm',
      '6 kg apprx',
      ' Motor Drive ',
      'DC 12V - Electric / Battery',
      'CHASSIS & WHEEl :  Metal Made. Body & Parts - PVC & Metal made (as required). All the items used, are being manufactured by us with surgicall precision using our very own  3D printer & Laser Cutting Machine.',
      'Quantity: 1',
    ],
  },
  {
    title: 'ELECTRIC  LOCOMOTIVE (VANDE  BHARAT)',
    subtitle: '425 mm x 115 mm x 165 mm',
    price: '₹51,000.00',
    image: 'S5.jpeg',
    features: [
      '420 mm x 115 mm x 165 mm ',
      '6 kg apprx ',
      'Motor Drive ',
      'DC 12V - Electric / Battery',
      'CHASSIS & WHEEl :  Metal Made. Body & Parts - PVC & Metal made (as required). All the items used, are being manufactured by us with surgicall precision using our very own  3D printer & Laser Cutting Machine.',
      'Quantity: 1',
    ],
  },
  {
    title: 'FREIGHT  WAGON',
    subtitle: '350 mm x 155 mm x 65 mm',
    price: '₹10,000.00',
    image: 'S6.jpeg',
    features: [
      '350 mm x 155 mm x 65 mm ',
      '2 kg apprx',
      ' Nil',
      ' Attached  to  Engine',
      'Metal made',
      'Quantity: 1',
    ],
  },
  {
    title: 'RAIL TRACK',
    subtitle: '80 mm gap - Throughout',
    price: '₹700.00',
    image: 'S7.jpeg',
    features: [
      '80 mm gap - Throughout',
      ' 0.8 kg / ft apprx',
      ' Nil',
      ' Nil',
      'Metal track .Wooden sleeper , mounted on top of plywood',
      'Quantity: 1',
    ],
  },
  {
    title: 'CROSSING',
    subtitle: 'Created as per requirement',
    price: '₹12,000.00',
    image: 'S8.jpeg',
    features: [
      'Created as per requirement ',
      'Nil ',
      'SERVO Motor',
      'Driven by cercuit as per requirement',
      'Metal track .Wooden sleeper , mounted on top of plywood ',
      'Quantity: 1',
    ],
  },
  {
    title: 'CERCUIT BOX (for 1-6 tables) & Operating Panel Box  ',
    subtitle: '350 mm x 260 mm x 135 mm & 200 mm x 150 mm x  40 mm',
    price: '₹30,000.00',
    image: 'S9.jpeg',
    features: [
     '350 mm x 260 mm x 135 mm & 200 mm x 150 mm x  40 mm ',
     '5 kg apprx & 0.5 kg apprx',
     ' Nil',
     ' AC 220  /  DC  12V',
     'Various brancded material used - as per requirement & programming controller',
     'Quantity: 1',
    ],
  },
  {
    title: 'SERVO - Track Changer Cercuit',
    subtitle: '120 mm x 140 mm x 50 mm',
    price: '₹4,500.00',
    image: 'S10.jpeg',
    features: [
      '120 mm x 140 mm x 50 mm',
      ' 0.25 kg apprx',
      ' Nil',
      ' DC  12V',
      'Programming Controller',
      'Quantity: 1',
    ],
  },
  {
    title: 'DISPLAY  PLATFORM  BOARD  (Stations name board)',
    subtitle: '140 mm x 30 mm x 200 mm',
    price: '₹1,500.00',
    image: 'https://images.unsplash.com/photo-1684050611203-cfd998ca2bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwdHJhY2tzfGVufDF8fHx8MTc2NTk1MzE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      'DIMENSION (L x W x H): 140 mm x 30 mm x 200 mm ',
      '0.1 kg apprx',
      'Strip Light (LED)',
      'DC  12V ',
      '3D printed frame, acryiic board engraving',
      'Quantity: 1',
    ],
  },
  {
    title: 'SYGNALLING  SYSTEM',
    subtitle: '25 mm x 25 mm x 200 mm',
    price: '₹1,250.00',
    image: 'S12.jpeg',
    features: [
      'DIMENSION (L x W x H): 25 mm x 25 mm x 200 mm ',
      '50 grm apprx',
      ' LED light- 2 Nos (Green & Red)',
      'DC  12V',
      '3D printed Socket & Base , Brass made hallow pole , 2 Nos of  Light as per requirement',
      'Quantity: 1',
    ],
  },
  {
    title: 'SOUND  SYSTEM ',
    subtitle: '150 mm x 200 mm x 40 mm',
    price: '₹20,000.00',
    image: 'https://images.unsplash.com/photo-1684050611203-cfd998ca2bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlsd2F5JTIwdHJhY2tzfGVufDF8fHx8MTc2NTk1MzE0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      '150 mm x 200 mm x 40 mm ',
      '0.2 kg apprx',
      ' 6 channels programmed sound card',
      ' DC  12V',
      'Sound Controller ( Pre praogrammed )',
      'Quantity: 1',
    ],
  },
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
