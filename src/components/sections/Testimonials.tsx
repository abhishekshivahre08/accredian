'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    title: 'Head of L&D, Wipro Technologies',
    content: 'Accredian Enterprise transformed how we approach upskilling. The custom curriculum they built for our data teams was precisely aligned with our tech stack. The ROI has been exceptional — our team\'s productivity metrics improved by over 40% post-program.',
    rating: 5,
    avatar: 'PS',
    color: 'bg-brand-600',
    program: 'Data Science & AI Program',
  },
  {
    name: 'Rajesh Kumar',
    title: 'VP Engineering, Infosys',
    content: 'What sets Accredian apart is the quality of instruction. Having IIT faculty conduct live sessions for our engineers gave them exposure to cutting-edge research alongside practical application. Several team members received promotions within 6 months of completing the program.',
    rating: 5,
    avatar: 'RK',
    color: 'bg-violet-600',
    program: 'ML & Deep Learning',
  },
  {
    name: 'Ananya Mehta',
    title: 'Director of People, Razorpay',
    content: 'We enrolled 150 product managers across all seniority levels. The program structure accommodated everyone from APMs to Directors. The IIM certificate was a huge motivation boost for the team and helped us with retention too.',
    rating: 5,
    avatar: 'AM',
    color: 'bg-amber-600',
    program: 'Product Management Program',
  },
  {
    name: 'Suresh Patel',
    title: 'CTO, HDFC Bank Digital',
    content: 'The fintech analytics program was tailor-made for our risk and analytics teams. The instructors understood our regulatory constraints and built case studies around real banking scenarios. Highly recommended for BFSI organizations.',
    rating: 5,
    avatar: 'SP',
    color: 'bg-emerald-600',
    program: 'FinTech & Financial Analytics',
  },
  {
    name: 'Kavitha Reddy',
    title: 'Senior Manager, Accenture',
    content: 'From onboarding to delivery, the enterprise team was incredibly professional. They set up everything in 10 days and our cohort of 80 people was live in no time. The dedicated success manager proactively resolved every issue.',
    rating: 5,
    avatar: 'KR',
    color: 'bg-rose-600',
    program: 'Business Analytics',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const navigate = (dir: 'prev' | 'next') => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrent((c) => dir === 'next'
        ? (c + 1) % testimonials.length
        : (c - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const timer = setInterval(() => navigate('next'), 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const t = testimonials[current]

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Client Stories
          </div>
          <h2 className="animate-on-scroll section-heading mb-5" style={{ transitionDelay: '0.1s' }}>
            Hear From Our{' '}
            <span className="gradient-text">Enterprise Clients</span>
          </h2>
        </div>

        <div className="animate-on-scroll max-w-4xl mx-auto" style={{ transitionDelay: '0.2s' }}>
          {/* Main testimonial */}
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <div className="card p-10 relative overflow-hidden">
              {/* BG quote */}
              <Quote className="absolute top-6 right-8 w-20 h-20 text-brand-100" />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className={`w-16 h-16 rounded-2xl ${t.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {t.avatar}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">
                    "{t.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-slate-800">{t.name}</p>
                    <p className="text-slate-500 text-sm">{t.title}</p>
                    <span className="mt-2 inline-block text-xs bg-brand-50 text-brand-700 border border-brand-200 px-2.5 py-1 rounded-lg font-medium">
                      {t.program}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-2.5 bg-brand-600' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigate('prev')}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-brand-50 hover:border-brand-300 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={() => navigate('next')}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-brand-50 hover:border-brand-300 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini cards below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {testimonials.slice(0, 4).map((t, i) => (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              className={`card p-4 text-left transition-all duration-200 hover:-translate-y-0.5 ${current === i ? 'border-brand-300 bg-brand-50' : ''}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-lg ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-700">{t.name.split(' ')[0]}</p>
                  <p className="text-xs text-slate-400">{t.title.split(',')[1]?.trim()}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
