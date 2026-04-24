'use client'

import { useEffect, useRef } from 'react'
import { ClipboardList, Users, Rocket, Trophy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Share Your Requirements',
    description: 'Fill out our enterprise form or book a call. Tell us about your team size, skill gaps, and learning objectives.',
    color: 'bg-brand-600',
    lightColor: 'bg-brand-50 border-brand-200 text-brand-600',
  },
  {
    number: '02',
    icon: Users,
    title: 'Custom Program Design',
    description: 'Our L&D experts design a tailored curriculum in collaboration with institute faculty — built specifically for your team.',
    color: 'bg-violet-600',
    lightColor: 'bg-violet-50 border-violet-200 text-violet-600',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch in 2 Weeks',
    description: 'We onboard your team, set up the learning platform, and kick off live sessions with expert instructors.',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50 border-amber-200 text-amber-600',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Track Outcomes & Certify',
    description: 'Monitor real-time progress on our enterprise dashboard. Top performers receive certificates from IITs & IIMs.',
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-50 border-emerald-200 text-emerald-600',
  },
]

export default function HowItWorks() {
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
    <section id="how-it-works" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Simple Onboarding
          </div>
          <h2 className="animate-on-scroll section-heading mb-5" style={{ transitionDelay: '0.1s' }}>
            From Inquiry to{' '}
            <span className="gradient-text">Certified Team</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-500 max-w-2xl mx-auto" style={{ transitionDelay: '0.15s' }}>
            A streamlined process designed to get your team learning as fast as possible.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-200 via-violet-200 via-amber-200 to-emerald-200 mx-24" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="animate-on-scroll text-center lg:text-left group"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Icon circle */}
                <div className={`relative mx-auto lg:mx-0 w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  <step.icon className="w-7 h-7 text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-slate-100 rounded-full text-xs font-bold text-slate-700 flex items-center justify-center shadow-sm">
                    {i + 1}
                  </span>
                </div>

                <div className={`inline-flex items-center gap-1.5 border text-xs font-bold px-3 py-1 rounded-full ${step.lightColor} mb-4`}>
                  Step {step.number}
                </div>

                <h3 className="font-display text-xl text-slate-800 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-10 lg:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="relative">
            <h3 className="font-display text-3xl lg:text-4xl text-white mb-4">
              Ready to Upskill Your Team?
            </h3>
            <p className="text-brand-200 text-lg mb-8 max-w-lg mx-auto">
              Join 500+ companies that trust Accredian Enterprise for their L&D needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#contact" className="bg-white text-brand-700 font-bold px-8 py-3.5 rounded-xl hover:bg-brand-50 transition-colors shadow-lg">
                Start for Free
              </a>
              <a href="#contact" className="border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
