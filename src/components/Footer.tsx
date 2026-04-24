import Link from 'next/link'
import { GraduationCap, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Programs: [
    'Data Science & AI',
    'Product Management',
    'Business Analytics',
    'Machine Learning',
    'Leadership Program',
    'FinTech Analytics',
  ],
  Company: [
    'About Us',
    'Careers',
    'Blog',
    'Press',
    'Partners',
    'Contact',
  ],
  Resources: [
    'Enterprise Brochure',
    'Case Studies',
    'White Papers',
    'Learning Pathways',
    'Faculty Network',
    'Alumni Stories',
  ],
  Legal: [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Refund Policy',
  ],
}

const socials = [
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Youtube, href: '#', label: 'YouTube' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 flex items-center justify-center shadow-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-xl text-white">Accredian</span>
                <span className="ml-1.5 text-xs font-semibold bg-brand-900 text-brand-400 px-1.5 py-0.5 rounded-md">
                  Enterprise
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-6">
              India's leading enterprise learning platform. Co-created with IITs & IIMs to deliver measurable upskilling outcomes for your workforce.
            </p>

            {/* Contact info */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="mailto:enterprise@accredian.com" className="hover:text-white transition-colors">
                  enterprise@accredian.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href="tel:+911800123456" className="hover:text-white transition-colors">
                  1800-123-4567
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>82/A, Udyog Vihar Phase IV,<br />Gurugram, Haryana 122015</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-3 mt-8">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 hover:border-brand-600 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Fullstack Education Pvt. Ltd. (Accredian). All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-slate-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
