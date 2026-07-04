import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PopularDestinations from "../components/home/PopularDestinations";
import LuxuryBanner from "../components/home/LuxuryBanner";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Footer from "../components/layout/Footer";
import CTASection from "../components/home/CTASection";
import FeaturedHotels from "../components/home/FeaturedHotels";
const Home = () => {
    return (
        <>
           <Navbar/>
            <Hero />
            <PopularDestinations />
            <FeaturedHotels />
            <LuxuryBanner />
            <CTASection />
            <Footer />
        </>
    );
};

export default Home;