import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Service from "@/src/components/Service";
import Layout from "@/src/layout/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

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
      const hash = window.location.hash;

      // Show/hide Carousel based on hash
      if (hash === "#about") {
        setShowCarousel(false);
      } else {
        setShowCarousel(true);
      }

      // Show/hide Author Image based on hash
      if (hash === "#portfolio") {
        document.getElementById("author_image").style.display = "none";
      } else if (hash !== "#home" && hash !== "" && hash !== "#") {
        document.getElementById("author_image").style.display = ""; // Reset inline style
        setHideAuthorImage(true);
      } else {
        document.getElementById("author_image").style.display = ""; // Reset inline style
        setHideAuthorImage(false);
      }
    };

    checkHash();

    window.addEventListener("hashchange", checkHash);

    return () => {
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  const { data, error } = useSWR("/api/staticdata", fetcher);

  return (
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
        <div
          id="author_image"
          className={`author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15] ${
            hideAuthorImage ? "mobile-hidden" : ""
          }`}
        >
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
          <Home />
          <About />
          <Service />
          <Contact />
        </div>
        <div className="main_content absolute top-0 right-0 bottom-0 w-full">
          {/** TODO: Create a Fallback page (error page) when json is failed to fetch. */}
          <Portfolio portfolioImages={data} />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common"])),
    },
  };
}

export default Index;
