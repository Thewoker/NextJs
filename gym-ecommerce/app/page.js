import MainView from "@/components/main-page/MainView";
import WhyChooseUs from "@/components/main-page/why-choose-us/WhyChooseUs";
import AboutUs from './../components/main-page/about-us/AboutUs';
import OurBestCoaches from "@/components/main-page/our-coaches/OurBestCoaches";
import Calendary from "@/components/main-page/calendary/Calendary";
import Pricing from "@/components/main-page/pricing/Pricing";
import Contact from "@/components/main-page/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full min-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl2">
      <MainView />
      <div className="flex flex-col min-h-full min-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-xl2 bg-black">
        <WhyChooseUs/>
        <AboutUs/>
        <OurBestCoaches/>
        <Calendary/>
        <Pricing/>
        <Contact/>
      </div>
    </main>
  );
}
