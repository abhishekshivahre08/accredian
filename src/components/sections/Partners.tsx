'use client'

import { useEffect, useRef } from 'react'

const partners = [
  { name: 'IIT Guwahati', abbr: 'IIT-G', color: 'from-blue-600 to-blue-800', programs: '3 Programs' },
  { name: 'IIM Lucknow', abbr: 'IIM-L', color: 'from-red-600 to-red-800', programs: '2 Programs' },
  { name: 'IIM Visakhapatnam', abbr: 'IIM-V', color: 'from-purple-600 to-purple-800', programs: '3 Programs' },
  { name: 'IIM Trichy', abbr: 'IIM-T', color: 'from-green-600 to-green-800', programs: '2 Programs' },
  { name: 'XLRI Jamshedpur', abbr: 'XLRI', color: 'from-amber-600 to-amber-800', programs: '2 Programs' },
  { name: 'SP Jain', abbr: 'SP Jain', color: 'from-teal-600 to-teal-800', programs: '1 Program' },
  { name: 'E&ICT IIT Kanpur', abbr: 'IIT-K', color: 'from-indigo-600 to-indigo-800', programs: '2 Programs' },
  { name: 'IIM Nagpur', abbr: 'IIM-N', color: 'from-rose-600 to-rose-800', programs: '1 Program' },
]

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="partners" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Institute Partners
          </div>
          <h2 className="animate-on-scroll section-heading mb-5" style={{ transitionDelay: '0.1s' }}>
            Powered by India's{' '}
            <span className="gradient-text">Finest Institutions</span>
          </h2>
          <p className="animate-on-scroll text-slate-500 text-lg max-w-2xl mx-auto" style={{ transitionDelay: '0.15s' }}>
            Our programs are co-created with and certified by the country's most prestigious academic institutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className="animate-on-scroll card p-6 text-center hover:-translate-y-1 transition-all duration-300 group cursor-default"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                <span className="text-white font-bold text-xs text-center leading-tight px-1">{partner.abbr}</span>
              </div>
              <p className="font-semibold text-slate-800 text-sm leading-snug mb-1.5">{partner.name}</p>
              <p className="text-xs text-slate-400">{partner.programs}</p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-100 shadow-sm p-8 flex flex-wrap gap-8 justify-center items-center">
          {[
            { value: '100%', label: 'Live Classes' },
            { value: 'Industry', label: 'Expert Faculty' },
            { value: 'Dual', label: 'Certification' },
            { value: '24/7', label: 'Learning Support' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-2xl text-brand-700 font-bold">{item.value}</p>
              <p className="text-sm text-slate-500 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
