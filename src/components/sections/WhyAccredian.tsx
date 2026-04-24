'use client'

import { useEffect, useRef } from 'react'
import { BookOpen, Users, Award, BarChart3, Headphones, Zap } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Custom Curriculum Design',
    description: 'Tailor-made learning paths designed around your industry, tech stack, and team skill gaps.',
    color: 'bg-brand-100 text-brand-600',
  },
  {
    icon: Users,
    title: 'Live Instructor-Led Training',
    description: '100% live sessions with industry experts from IITs, IIMs, and top tech companies.',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Award,
    title: 'Prestigious Certifications',
    description: 'Certificates co-branded with IIT Guwahati, IIM Visakhapatnam, XLRI, and more.',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: BarChart3,
    title: 'Measurable ROI',
    description: 'Track learning outcomes, completion rates, and skill improvement with real-time dashboards.',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'An enterprise success manager assigned to your account for seamless program delivery.',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'Go from contract to first session in less than 2 weeks with our streamlined onboarding.',
    color: 'bg-cyan-100 text-cyan-600',
  },
]

export default function WhyAccredian() {
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
    <section id="why-accredian" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Why Leading Companies Choose Us
          </div>
          <h2 className="animate-on-scroll section-heading mb-5" style={{ transitionDelay: '0.1s' }}>
            Built for Enterprise{' '}
            <span className="gradient-text">Learning & Development</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed" style={{ transitionDelay: '0.15s' }}>
            We go beyond traditional training platforms to deliver programs that create
            real, lasting career impact for your employees.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="animate-on-scroll card p-7 group hover:border-brand-200 hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg text-slate-800 mb-3 group-hover:text-brand-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
