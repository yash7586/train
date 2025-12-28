import { Link } from 'react-router-dom';
import { Train, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <Train className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <div className="text-xl text-white">Aitri Enterprise</div>
                <div className="text-xs text-amber-400">Automated Restaurant Systems</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Revolutionizing restaurant service with automated train delivery systems.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-amber-400 transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-amber-400 transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-amber-400 transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-gray-400 hover:text-amber-400 transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/success-story" className="text-gray-400 hover:text-amber-400 transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Success Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-amber-400 transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">STEAM  ENGINE</li>
              <li className="text-gray-400 text-sm">ELECTRIC  LOCOMOTIVE (WAP 7)</li>
              <li className="text-gray-400 text-sm">ELECTRIC  LOCOMOTIVE (WAG 9)</li>
              <li className="text-gray-400 text-sm">DIESEL LOCOMOTIVE</li>
              <li className="text-gray-400 text-sm">ELECTRIC  LOCOMOTIVE (VANDE  BHARAT)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>60/4/1328, Niranjan Sen Pally, Shyam Nagar, Purbabidyadharpur, Bhatpara, North 24 Paraganas Pincode - 743127, West Bengal</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>+91 9830482239</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>aitrienterprise2018@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 AitriEnterprise. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
