import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import WhyAccredian from '@/components/sections/WhyAccredian'
import Programs from '@/components/sections/Programs'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import Stats from '@/components/sections/Stats'
import Partners from '@/components/sections/Partners'
import LeadForm from '@/components/sections/LeadForm'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <WhyAccredian />
      <Stats />
      <Programs />
      <HowItWorks />
      <Partners />
      <Testimonials />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  )
}
