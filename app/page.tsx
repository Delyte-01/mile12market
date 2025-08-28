
import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import BenefitSection from "@/feature/benefits";
import Categorysection from "@/feature/category";
import CallToAction from "@/feature/cta-section";
import FeaturedProductsSection from "@/feature/featured-product";
import HeroSection from "@/feature/hero";


export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <BenefitSection />
      <Categorysection />
      <FeaturedProductsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
