import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import AboutUs from './components/AboutUs'
import OurBrands from './components/OurBrands'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <AboutUs />
        <OurBrands />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
