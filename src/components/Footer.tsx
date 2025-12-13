import { Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import logoImage from '../assets/images/WhatsApp Image 2025-12-11 at 5.45.21 PM (1).jpeg';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    company: [
      { label: 'ABOUT', section: 'about' },
      { label: 'CONTACT', section: 'contact' }
    ],
    verticals: [
      { label: 'ESPORTS', section: 'verticals' },
      { label: 'IT & CYBERSECURITY', section: 'verticals' },
      { label: 'MARKETING & CONSULTING', section: 'verticals' },
      { label: 'TRAVEL & TOURISM', section: 'verticals' }
    ],
    more: [
      { label: 'E-COMMERCE', section: 'verticals' },
      { label: 'STREAMING PLATFORM', section: 'verticals' },
      { label: 'SOCIAL MEDIA APP', section: 'verticals' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, link: '#', label: 'LinkedIn' },
    { icon: Twitter, link: '#', label: 'Twitter' },
    { icon: Instagram, link: '#', label: 'Instagram' },
    { icon: Youtube, link: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={logoImage} 
                alt="NEXTOR Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-500 mb-6 max-w-md leading-relaxed">
              A multi-vertical powerhouse delivering esports, immersive entertainment, 
              cybersecurity, travel, marketing, and digital-first ecosystems worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="p-3 border border-gray-800 hover:border-[#ffff00] hover:bg-[#ffff00]/10 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-6 tracking-wider">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-500 hover:text-[#ffff00] transition-colors tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h4 className="mb-6 tracking-wider">VERTICALS</h4>
            <ul className="space-y-3">
              {footerLinks.verticals.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-500 hover:text-[#ffff00] transition-colors tracking-wide text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Verticals */}
          <div>
            <h4 className="mb-6 tracking-wider">MORE</h4>
            <ul className="space-y-3">
              {footerLinks.more.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-500 hover:text-[#ffff00] transition-colors tracking-wide text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800/50 pt-12 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
                <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              </div>
              <h4 className="tracking-wider">STAY UPDATED</h4>
            </div>
            <p className="text-gray-500 mb-6">Get the latest news and updates from Nextor</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[#0a0a0a] border border-gray-800 focus:outline-none focus:border-[#ffff00] transition-colors"
              />
              <button className="px-6 py-3 bg-[#ffff00] text-black tracking-wider hover:bg-white transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 tracking-wide">
            © 2025 NEXTOR. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-[#ffff00] transition-colors tracking-wide">PRIVACY POLICY</a>
            <a href="#" className="hover:text-[#ffff00] transition-colors tracking-wide">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-[#ffff00] transition-colors tracking-wide">COOKIE POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
