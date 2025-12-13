import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/images/WhatsApp Image 2025-12-11 at 5.45.21 PM (1).jpeg';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', section: 'home' },
    { label: 'ABOUT', section: 'about' },
    { label: 'VERTICALS', section: 'verticals' },
    { label: 'CONTACT', section: 'contact' }
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logoImage} 
              alt="NEXTOR Logo" 
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className={`tracking-wider transition-colors relative group ${
                  activeSection === item.section ? 'text-[#ffff00]' : 'text-white hover:text-[#ffff00]'
                }`}
              >
                {item.label}
                {activeSection === item.section && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ffff00]"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className={`text-left tracking-wider transition-colors ${
                    activeSection === item.section ? 'text-[#ffff00]' : 'text-white hover:text-[#ffff00]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}