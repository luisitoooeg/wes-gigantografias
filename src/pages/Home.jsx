import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/hero/Hero"
import Services from "@/components/sections/Services"
import Portfolio from "@/components/sections/Portfolio"
import WhyChooseUs from "@/components/sections/WhyChooseUs"
import CTA from "@/components/sections/CTA"
import Footer from "@/components/layout/Footer"

function Home() {
  return (
    <main className="bg-[#02040b] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  )
}

export default Home