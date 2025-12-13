import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    vertical: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', vertical: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'EMAIL',
      value: 'nishant@nextor.live',
      link: 'mailto:nishant@nextor.live'
    },
    {
      icon: Mail,
      title: 'EMAIL',
      value: 'operations@nextor.live',
      link: 'mailto:operations@nextor.live'
    },
    {
      icon: Phone,
      title: 'PHONE',
      value: '+91 98869 77722',
      link: 'tel:+919886977722'
    },
    {
      icon: Phone,
      title: 'PHONE',
      value: '+91 80735 91399',
      link: 'tel:+918073591399'
    },
    {
      icon: MapPin,
      title: 'OFFICE',
      value: 'Bengaluru, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, link: '#', label: 'LinkedIn' },
    { icon: Twitter, link: '#', label: 'Twitter' },
    { icon: Instagram, link: '#', label: 'Instagram' },
    { icon: Youtube, link: '#', label: 'YouTube' }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
            </div>
            <span className="text-[#ffff00] tracking-[0.3em] uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            LET'S BUILD SOMETHING<br />
            <span className="text-[#ffff00]">AMAZING TOGETHER</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black border border-gray-800/50 p-8">
            <h3 className="mb-8 tracking-wider">SEND US A MESSAGE</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500 mb-2 tracking-wider uppercase">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 focus:outline-none focus:border-[#ffff00] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-500 mb-2 tracking-wider uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 focus:outline-none focus:border-[#ffff00] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-500 mb-2 tracking-wider uppercase">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 focus:outline-none focus:border-[#ffff00] transition-colors"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="vertical" className="block text-sm text-gray-500 mb-2 tracking-wider uppercase">
                  Interested Vertical
                </label>
                <select
                  id="vertical"
                  name="vertical"
                  value={formData.vertical}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 focus:outline-none focus:border-[#ffff00] transition-colors"
                >
                  <option value="">Select a vertical</option>
                  <option value="esports">Esports</option>
                  <option value="cybersecurity">IT & Cybersecurity</option>
                  <option value="marketing">Marketing & Consulting</option>
                  <option value="travel">Travel & Tourism</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="streaming">Streaming Platform</option>
                  <option value="social">Social Media App</option>
                  <option value="hackonx">HackonX</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-500 mb-2 tracking-wider uppercase">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-800 focus:outline-none focus:border-[#ffff00] transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-4 bg-[#ffff00] text-black tracking-wider overflow-hidden"
              >
                <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-2">
                  SEND MESSAGE
                  <Send className="w-5 h-5" />
                </div>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 tracking-wider">CONTACT INFORMATION</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="group flex items-start gap-4 p-6 bg-black border border-gray-800/50 hover:border-[#ffff00]/50 transition-all"
                    >
                      <div className="p-3 border border-gray-800 group-hover:border-[#ffff00] group-hover:bg-[#ffff00]/10 transition-all">
                        <Icon className="w-6 h-6 text-[#ffff00]" />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1 tracking-wider text-sm">{info.title}</p>
                        <p className="group-hover:text-[#ffff00] transition-colors">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="mb-6 tracking-wider">FOLLOW US</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      aria-label={social.label}
                      className="p-4 bg-black border border-gray-800/50 hover:border-[#ffff00] hover:bg-[#ffff00]/10 transition-all"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-black border-2 border-[#ffff00]/30 p-6">
              <h4 className="mb-2 tracking-wider text-[#ffff00]">READY TO PARTNER?</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Join leading brands working with Nextor to create exceptional experiences across multiple verticals.
              </p>
              <p className="text-sm text-gray-600 tracking-wide">
                WE TYPICALLY RESPOND WITHIN 24 HOURS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
