import Image from 'next/image'
import Banner from '@/components/banner-main-page/Banner';
import Presentation from '@/components/main-content/Presentation';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';


export default function Home() {
  return (
    <main>
      <Banner/>
      <Presentation/>
      <Contact/>
      <Footer/>
    </main>
  )
}
