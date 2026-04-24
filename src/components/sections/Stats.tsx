'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 10000, suffix: '+', label: 'Professionals Trained', description: 'Across India and Southeast Asia' },
  { value: 500, suffix: '+', label: 'Partner Companies', description: 'From startups to Fortune 500' },
  { value: 60, suffix: '%', label: 'Average Salary Hike', description: 'Reported by our alumni' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate', description: 'From enterprise clients' },
  { value: 15, suffix: '+', label: 'Programs Offered', description: 'Across multiple domains' },
  { value: 5, suffix: '+', label: 'Years of Excellence', description: 'Delivering quality education' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCard({ value, suffix, label, description, index }: {
  value: number; suffix: string; label: string; description: string; index: number
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(value, 2000, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="animate-on-scroll text-center p-8 rounded-2xl bg-white/8 border border-white/10 hover:bg-white/12 transition-all duration-300"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <p className="font-display text-5xl font-bold text-white mb-2">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="font-semibold text-brand-300 text-base mb-1">{label}</p>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  )
}

export default function Stats() {
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
    <section ref={ref} className="py-24 bg-gradient-to-br from-brand-900 via-brand-950 to-slate-900 relative overflow-hidden">
      {/* BG decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll font-display text-4xl md:text-5xl text-white mb-4">
            Impact That Speaks for Itself
          </h2>
          <p className="animate-on-scroll text-slate-400 text-lg max-w-xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            Numbers that reflect years of commitment to quality education
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
