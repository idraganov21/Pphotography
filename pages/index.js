import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Service from "@/src/components/Service";
import Layout from "@/src/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});

const Home = dynamic(() => import("@/src/components/Home"), {
  ssr: false,
});

const Index = () => {
  const imageUrl = "/assets/img/about/poliprofilna.webp";
  const slides = [0, 1, 2, 3, 4];
  const [showCarousel, setShowCarousel] = useState(true);
  const [hideAuthorImage, setHideAuthorImage] = useState(false);

  const imageByIndex = (index) => `/assets/img/about/${index + 1}.webp`;

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === "#about") {
        setShowCarousel(false);
      } else {
        console.log('odjobo');
        setShowCarousel(true);
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  useEffect(() => {
    // Function to check and set state based on hash
    const checkHash = () => {
      if (window.location.hash !== '#home' && window.location.hash !== '#') {
        console.log("bachish li");
        setHideAuthorImage(true);
      } else {
        setHideAuthorImage(false);
      }
    };

    // Initial check
    checkHash();

    // Add event listener for hash changes
    window.addEventListener('hashchange', checkHash);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
      <div className={`author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15] ${hideAuthorImage ? 'mobile-hidden' : ''}`}>
        <div className="main absolute inset-0 bg-no-repeat bg-cover">
      {showCarousel ? (
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <img
                    className="embla__slide__img"
                    src={imageByIndex(index)}
                    alt="odjobo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <img src={imageUrl} alt="poly" className="poly-image" />
      )}
    </div>
          {/* <img src={imageUrl} className="main absolute inset-0 bg-no-repeat bg-cover" /> */}
        </div>
        <div className="main_content absolute top-0 right-0 bottom-0 w-[60%]">
          {/* HOME */}
          <Home />
          {/* HOME */}
          {/* ABOUT */}
          <About />
          {/* ABOUT */}
          {/* PORTFOLIO */}
          <Portfolio />
          {/* /PORTFOLIO */}
          {/* SERVICE */}
          <Service />
          {/* SERVICE */}
          {/* NEWS */}
          {/* <News /> */}
          {/* NEWS */}
          {/* CONTACT */}
          <Contact />
          {/* CONTACT */}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  console.log(context.locale);
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common"])),
    },
  };
}
export default Index;
