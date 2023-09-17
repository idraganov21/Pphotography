import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import { useTranslation } from "next-i18next";
import ImageCategory from "./ImageCategory/ImageCategory";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Portfolio = () => {
  // Isotope
  // const isotope = useRef();

  const [filterKey, setFilterKey] = useState("weddings"); // Used to filter out concrete items from <li> elements (pictures) using isotope.

  const { t } = useTranslation();

  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //TODO: Use error to render a new html content for failed fetched static data
  const { data, error } = useSWR("/api/staticdata", fetcher);

  let portfolioImagesData = {
    weddings: {},
    family_photosessions: {},
    holy_baptism: {},
    proms: {},
  };

  if (data) {
    portfolioImagesData = JSON.parse(data);
  }

  // useEffect(() => {
  //   const item = document.querySelector(".item__");

  //   console.log("item", item)

  //   if (item.length !== 0) {
  //     setTimeout(() => {
  //       // Initiliazing Isotope class. It will target the ul (parent) element (gallery zoom).
  //       // The itemSelector selects class style to specify the li element to filter (.item__).
  //       isotope.current = new Isotope(".gallery_zoom", {
  //         itemSelector: ".item__",
  //       });
  //     }, 3000);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (isotope.current) {
  //     // Filter out the specific album
  //     isotope.current.arrange({ filter: `.${filterKey}` });
  //   }
  // }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     dataImage();
  //   }, 2000);
  // });

  return (
    <>
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Creative Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#portfolio"
                    className="current text-[#333] font-poppins font-medium transition-all duration-300"
                    onClick={handleFilterKeyChange("weddings")}
                  >
                    {t("weddings")}
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#portfolio"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    onClick={handleFilterKeyChange("familyphotosessions")}
                  >
                    {t("familyphotosessions")}
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#portfolio"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    onClick={handleFilterKeyChange("holybaptism")}
                  >
                    {t("holybaptism")}
                  </a>
                </li>

                <li className="mr-[40px] inline-block">
                  <a
                    href="#portfolio"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    onClick={handleFilterKeyChange("proms")}
                  >
                    {t("proms")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="gallery_zoom ml-[-50px]">
                {filterKey === "weddings" ? (
                  <ImageCategory
                    images={portfolioImagesData.weddings}
                    filterKey={filterKey}
                  />
                ) : (
                  <></>
                )}
                {filterKey === "familyphotosessions" ? (
                  <ImageCategory
                    images={portfolioImagesData.family_photosessions}
                    filterKey={filterKey}
                  />
                ) : (
                  <></>
                )}
                {filterKey === "holybaptism" ? (
                  <ImageCategory
                    images={portfolioImagesData.holy_baptism}
                    filterKey={filterKey}
                  />
                ) : (
                  <></>
                )}
                {filterKey === "proms" ? (
                  <ImageCategory
                    images={portfolioImagesData.proms}
                    filterKey={filterKey}
                  />
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Portfolio;
