'use client'

import { useEffect, useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly can we start a program for our team?',
    answer: 'Our enterprise onboarding is designed for speed. From the day you sign the contract, we can deploy your first cohort in as little as 10–14 business days. This includes curriculum customization, LMS setup, faculty assignment, and learner onboarding.',
  },
  {
    question: 'Can programs be customized to our industry or tech stack?',
    answer: 'Absolutely. Every enterprise program is co-designed with your L&D team. We customize case studies, capstone projects, tools, and even assessment criteria to reflect your industry reality, whether you\'re in BFSI, healthcare, e-commerce, or manufacturing.',
  },
  {
    question: 'What is the minimum team size for an enterprise program?',
    answer: 'We work with teams as small as 5 learners and as large as 1,000+. For smaller teams (5–20 people), we offer cohort batching where your team joins alongside learners from other companies in a scheduled batch. For 20+ learners, we offer fully dedicated cohorts.',
  },
  {
    question: 'Are the certifications recognized by employers?',
    answer: 'Yes. Certifications are jointly issued by Accredian and the partnering institution (e.g., IIT Guwahati, IIM Visakhapatnam, XLRI). These carry significant market recognition in India. Many of our learners have used them to unlock promotions and new job offers.',
  },
  {
    question: 'Do you offer a learning management system (LMS)?',
    answer: 'Yes — all enterprise clients get access to our proprietary LMS with real-time progress dashboards, attendance tracking, assignment submissions, live session recordings, and HR-friendly reporting. We can also integrate with your existing LMS via API.',
  },
  {
    question: 'What kind of ROI can we expect?',
    answer: 'Results vary by program and team, but our enterprise clients report an average of 35–60% improvement in relevant skill assessments post-program. Many also report reduced hiring costs, improved retention, and faster project delivery from upskilled teams.',
  },
  {
    question: 'Is there any post-program support for learners?',
    answer: 'Yes. Learners get access to alumni communities, job boards, mentor office hours, and content updates for 12 months post-program. Enterprise clients also get quarterly business reviews to track ongoing impact.',
  },
]

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`animate-on-scroll border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-brand-300 shadow-sm' : 'hover:border-slate-300'}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-800 pr-4 text-sm md:text-base">{question}</span>
        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white">
          <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Common Questions
          </div>
          <h2 className="animate-on-scroll section-heading mb-5" style={{ transitionDelay: '0.1s' }}>
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="animate-on-scroll text-slate-500 text-lg max-w-xl mx-auto" style={{ transitionDelay: '0.15s' }}>
            Everything you need to know before getting started with Accredian Enterprise.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>

        <div className="animate-on-scroll text-center mt-12 p-8 rounded-2xl bg-brand-50 border border-brand-100">
          <p className="text-slate-700 font-medium mb-2">Still have questions?</p>
          <p className="text-slate-500 text-sm mb-5">Our enterprise team is happy to answer anything specific to your organization.</p>
          <a href="#contact" className="btn-primary text-sm py-2.5 px-6 inline-flex">
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
