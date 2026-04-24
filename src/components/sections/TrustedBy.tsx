'use client'

const companies = [
  'Wipro', 'Infosys', 'TCS', 'HCL Technologies', 'Cognizant',
  'Accenture', 'Capgemini', 'IBM India', 'Deloitte', 'KPMG',
  'Amazon India', 'Flipkart', 'Swiggy', 'Zomato', 'Paytm',
  'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bajaj Finance', 'Reliance',
]

export default function TrustedBy() {
  const doubled = [...companies, ...companies]

  return (
    <section className="py-14 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Trusted by professionals at 500+ companies
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {doubled.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="inline-flex items-center gap-3 px-8 py-3 mx-1 bg-slate-50 rounded-xl border border-slate-100 shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-brand-400" />
              <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">{company}</span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
