import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Timeline from '@/components/sections/Timeline'
import Stonewood from '@/components/sections/Stonewood'
import KeyCapital from '@/components/sections/KeyCapital'
import Philosophy from '@/components/sections/Philosophy'
import Vision from '@/components/sections/Vision'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Stonewood />
      <KeyCapital />
      <Philosophy />
      <Vision />
      <Contact />
    </main>
  )
}
