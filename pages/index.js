import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Service from "@/src/components/Service";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});

const Home = dynamic(() => import("@/src/components/Home"), {
  ssr: false,
});

const Index = () => {
  const [imageUrl, setImageUrl] = useState("/assets/img/about/1.jpg"); // Default image

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#about') {
        setImageUrl("/assets/img/about/poliprofilna.webp");
      } else {
        setImageUrl("/assets/img/about/1.jpg");
      }
    };

    checkHash();

    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <Layout>
      <div className="cavani_tm_mainpart absolute inset-[70px] overflow-hidden middle:inset-x-0 middle:bottom-0 middle:top-[55px]">
        <div className="author_image absolute top-0 left-0 bottom-0 w-[40%] z-[15]">
          <div
            className="main absolute inset-0 bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
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
      ...await serverSideTranslations(context.locale, ['common']),
    },
  };
}
export default Index;
