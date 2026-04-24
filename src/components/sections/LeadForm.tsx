'use client'

import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'
import { ArrowRight, Loader2, CheckCircle2, Building2, User, Mail, Phone, Briefcase, Users, BookOpen, MessageSquare } from 'lucide-react'

const schema = z.object({
  fullName: z.string().min(2, 'At least 2 characters'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'At least 10 digits'),
  company: z.string().min(2, 'Company name required'),
  designation: z.string().min(2, 'Designation required'),
  teamSize: z.enum(['1-10', '11-50', '51-200', '201-500', '500+'], {
    errorMap: () => ({ message: 'Select team size' }),
  }),
  trainingNeeds: z.string().min(1, 'Select a training area'),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const trainingOptions = [
  'Data Science & AI', 'Machine Learning', 'Product Management',
  'Business Analytics', 'Leadership & Management', 'FinTech & Finance',
  'Digital Transformation', 'Custom Program',
]

export default function LeadForm() {
  const ref = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success) {
        setSubmitted(true)
        toast.success(result.message)
        reset()
      } else {
        toast.error(result.message || 'Something went wrong')
      }
    } catch {
      toast.error('Network error. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left info */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
              Get Started Today
            </div>
            <h2 className="animate-on-scroll font-display text-4xl md:text-5xl text-white leading-tight mb-6" style={{ transitionDelay: '0.1s' }}>
              Ready to Transform Your Team's{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                Future?
              </span>
            </h2>
            <p className="animate-on-scroll text-slate-300 text-lg leading-relaxed mb-10" style={{ transitionDelay: '0.15s' }}>
              Fill out the form and our enterprise team will get back to you within 24 hours with a customized proposal.
            </p>

            {/* Benefits */}
            <ul className="animate-on-scroll space-y-4" style={{ transitionDelay: '0.2s' }}>
              {[
                'Free consultation with L&D expert',
                'Custom program proposal within 48 hrs',
                'No commitment required',
                'Flexible payment & batch options',
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-brand-400" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="animate-on-scroll" style={{ transitionDelay: '0.25s' }}>
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">Thank You!</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Our enterprise team will reach out within 24 hours with a customized proposal for your organization.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-sm"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/30 space-y-5"
              >
                <h3 className="font-display text-2xl text-slate-800 mb-6">Contact Our Enterprise Team</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input {...register('fullName')} placeholder="John Smith" className="input-field pl-9" />
                    </div>
                    {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Work Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input {...register('email')} type="email" placeholder="john@company.com" className="input-field pl-9" />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input {...register('phone')} placeholder="+91 98765 43210" className="input-field pl-9" />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Company *</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input {...register('company')} placeholder="Acme Corp" className="input-field pl-9" />
                    </div>
                    {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Designation *</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input {...register('designation')} placeholder="Head of L&D" className="input-field pl-9" />
                    </div>
                    {errors.designation && <p className="text-xs text-red-500 mt-1">{errors.designation.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Team Size *</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select {...register('teamSize')} className="input-field pl-9 appearance-none bg-white">
                        <option value="">Select size</option>
                        {['1-10', '11-50', '51-200', '201-500', '500+'].map((s) => (
                          <option key={s} value={s}>{s} employees</option>
                        ))}
                      </select>
                    </div>
                    {errors.teamSize && <p className="text-xs text-red-500 mt-1">{errors.teamSize.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Training Needs *</label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select {...register('trainingNeeds')} className="input-field pl-9 appearance-none bg-white">
                      <option value="">Select area of interest</option>
                      {trainingOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  {errors.trainingNeeds && <p className="text-xs text-red-500 mt-1">{errors.trainingNeeds.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Additional Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                    <textarea
                      {...register('message')}
                      rows={3}
                      placeholder="Tell us more about your requirements..."
                      className="input-field pl-9 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit Inquiry <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  By submitting, you agree to our Privacy Policy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
