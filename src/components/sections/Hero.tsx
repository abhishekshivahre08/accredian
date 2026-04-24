'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const badges = ['IIT Guwahati', 'IIM Lucknow', 'IIM Visakhapatnam', 'XLRI Jamshedpur', 'SP Jain']

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-brand-950 to-slate-900 pt-16"
    >
      {/* 1. Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="z-20">
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Trusted by 500+ companies across India
            </div>

            <h1 className="animate-on-scroll font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6" style={{ transitionDelay: '0.1s' }}>
              Upskill Your{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                Workforce
              </span>{' '}
              at Scale
            </h1>

            <p className="animate-on-scroll text-lg text-slate-300 leading-relaxed mb-8 max-w-xl" style={{ transitionDelay: '0.2s' }}>
              World-class corporate training programs co-created with IITs & IIMs.
              Transform your team's capabilities in Data Science, AI, Product Management
              and more — with measurable outcomes guaranteed.
            </p>

            <ul className="animate-on-scroll space-y-3 mb-10" style={{ transitionDelay: '0.3s' }}>
              {[
                '100% live instructor-led sessions',
                'Custom curriculum for your team',
                'Dedicated enterprise success manager',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="animate-on-scroll flex flex-wrap gap-4" style={{ transitionDelay: '0.4s' }}>
              <Link href="#contact" className="btn-primary text-base py-3.5 px-7">
                Get a Free Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-3 px-6 py-3.5 text-white font-semibold rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            <div className="animate-on-scroll mt-12" style={{ transitionDelay: '0.5s' }}>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">Programs by</p>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span key={badge} className="px-3 py-1.5 bg-white/8 border border-white/15 text-slate-300 text-xs font-medium rounded-lg">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Image & Badge */}
          <div className="hidden lg:block relative z-20">
            <div className="relative h-full flex items-center justify-center">
              
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-500/20 blur-[120px] rounded-full" />

              {/* Animated Hero Image */}
              <motion.img
                src="/corporate-big-hero-v4.webp"
                alt="Corporate Training Professionals"
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                className="relative z-10 w-full max-w-[550px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              />

              {/* Animated Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="absolute bottom-12 -right-4 z-20 bg-gradient-to-r from-brand-600 to-violet-600 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-lg">🏆</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[10px] uppercase tracking-wider font-bold opacity-80">Ranked #1</span>
                  <span className="text-white text-sm font-bold whitespace-nowrap">
                    India's Best Enterprise L&D
                  </span>
                </div>
              </motion.div>

              {/* Decorative light streak */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-500/10 blur-3xl rounded-full" />
            </div>
          </div>

        </div> {/* End of Grid */}
      </div> {/* End of Container */}

      {/* 2. Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
