import Nav from "@/components/nav";
import StickyNav from "@/components/sticky-nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import FeaturedListings from "@/components/listings";
import Services from "@/components/services";
import Neighborhoods from "@/components/neighborhoods";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <StickyNav />
      <Hero />
      <About />
      <Services />
      <FeaturedListings />
      <Neighborhoods />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
