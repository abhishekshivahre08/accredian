'use client'

import { useState } from 'react'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Data & AI', 'Product', 'Management', 'Analytics', 'Finance']

const programs = [
  {
    category: 'Data & AI',
    title: 'Executive Program in Data Science & AI',
    institute: 'IIT Guwahati',
    duration: '6 Months',
    teamSize: '10-200',
    rating: 4.9,
    reviews: 1240,
    tag: 'Most Popular',
    tagColor: 'bg-brand-100 text-brand-700',
    highlights: ['Python & ML', 'Deep Learning', 'Real Projects', 'IIT Certificate'],
    color: 'border-brand-200 hover:border-brand-400',
    accent: 'text-brand-600',
  },
  {
    category: 'Product',
    title: 'Product Management Certification Program',
    institute: 'IIM Visakhapatnam',
    duration: '4 Months',
    teamSize: '5-100',
    rating: 4.8,
    reviews: 876,
    tag: 'Trending',
    tagColor: 'bg-amber-100 text-amber-700',
    highlights: ['PM Frameworks', 'User Research', 'Roadmapping', 'IIM Certificate'],
    color: 'border-amber-200 hover:border-amber-400',
    accent: 'text-amber-600',
  },
  {
    category: 'Management',
    title: 'CXO Leadership & Management Program',
    institute: 'XLRI Jamshedpur',
    duration: '8 Months',
    teamSize: '20-500',
    rating: 4.9,
    reviews: 543,
    tag: 'Premium',
    tagColor: 'bg-violet-100 text-violet-700',
    highlights: ['Strategic Thinking', 'Leadership', 'Change Mgmt', 'XLRI Certificate'],
    color: 'border-violet-200 hover:border-violet-400',
    accent: 'text-violet-600',
  },
  {
    category: 'Analytics',
    title: 'Business Analytics & Intelligence',
    institute: 'IIM Lucknow',
    duration: '5 Months',
    teamSize: '10-150',
    rating: 4.7,
    reviews: 692,
    tag: 'New',
    tagColor: 'bg-emerald-100 text-emerald-700',
    highlights: ['SQL & Power BI', 'Statistics', 'Dashboards', 'IIM Certificate'],
    color: 'border-emerald-200 hover:border-emerald-400',
    accent: 'text-emerald-600',
  },
  {
    category: 'Data & AI',
    title: 'Machine Learning & Deep Learning',
    institute: 'IIT Guwahati',
    duration: '6 Months',
    teamSize: '10-100',
    rating: 4.8,
    reviews: 410,
    tag: 'Technical',
    tagColor: 'bg-cyan-100 text-cyan-700',
    highlights: ['PyTorch', 'NLP', 'Computer Vision', 'IIT Certificate'],
    color: 'border-cyan-200 hover:border-cyan-400',
    accent: 'text-cyan-600',
  },
  {
    category: 'Finance',
    title: 'FinTech & Financial Analytics',
    institute: 'SP Jain',
    duration: '4 Months',
    teamSize: '5-80',
    rating: 4.7,
    reviews: 320,
    tag: 'Finance',
    tagColor: 'bg-rose-100 text-rose-700',
    highlights: ['FinTech Trends', 'Risk Analytics', 'Blockchain', 'SP Jain Certificate'],
    color: 'border-rose-200 hover:border-rose-400',
    accent: 'text-rose-600',
  },
]

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' 
    ? programs 
    : programs.filter((p) => p.category === activeCategory)

  return (
    <section id="programs" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Enterprise Programs
          </div>
          <h2 className="section-heading mb-5">
            Programs Your Team Will{' '}
            <span className="gradient-text">Love</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Choose from 15+ programs designed for working professionals, backed by India's premier institutes.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid with Framer Motion Layout Animation */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((program) => (
              <motion.div
                layout
                key={program.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                className={`card p-6 border-2 ${program.color} bg-white transition-all duration-300 hover:-translate-y-1 group relative`}
              >
                {/* Tag + institute */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${program.tagColor}`}>
                    {program.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {program.institute}
                  </span>
                </div>

                <h3 className={`font-display text-xl text-slate-800 mb-3 group-hover:${program.accent} transition-colors leading-snug`}>
                  {program.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" /> {program.teamSize}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {program.rating}
                    <span className="text-slate-400">({program.reviews})</span>
                  </span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {program.highlights.map((h) => (
                    <span key={h} className="text-xs bg-slate-50 text-slate-600 border border-slate-100 px-2.5 py-1 rounded-lg">
                      {h}
                    </span>
                  ))}
                </div>

                <button className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border-2 ${program.color} ${program.accent} hover:bg-slate-50 transition-all`}>
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-flex">
            Request Custom Program <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}