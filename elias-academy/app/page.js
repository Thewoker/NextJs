import Image from 'next/image'
import MainPresentation from '@/components/main-page/main-content/MainPresentation';
import Header from '@/components/main-page/header/Header';
import Courses from '@/components/main-page/courses-main-page/Courses';
import FAQ from '@/components/main-page/faq/FAQ';
import ChooseUs from '@/components/main-page/choose-us/ChooseUs';
import ContactUs from '@/components/main-page/contact-us/ContactUs';



export default function Home() {
  return (
    <main className="">
      <Header/>
      <MainPresentation/>
      <Courses/>
      <FAQ/>
      <ChooseUs/>
      <ContactUs/>
    </main>
  )
}
