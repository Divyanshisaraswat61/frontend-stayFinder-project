import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import hero from "../../assets/images/hero.jpg";
import SearchBar from "./SearchBar";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

    
      <div  
        ref={heroRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <p className="mb-3 uppercase tracking-[6px] text-yellow-400">
          Luxury Hotels
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
          Find Your Perfect Stay Anywhere
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-gray-200">
          Discover luxury hotels, resorts and villas with the best prices and
          premium facilities.
        </p>

        <div
          id="search"
          className="mt-12 w-full max-w-6xl"
        >
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;