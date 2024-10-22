import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import MusicTestiCards from "./components/MusicTestiCards";
import Webinars from "./components/ui/Webinars";
import WhyUs from "./components/WhyUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/10 antialiased bg-grid-white/[0.02]">
      <h2 className="text-center mt-2 text-2xl  font-bold">Next JS</h2>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyUs/>
      <MusicTestiCards/>
      <Webinars/>
    </main>
    
  );
}
