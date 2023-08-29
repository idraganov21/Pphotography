import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
import { Detail, Soundcloud } from "./Popup";
import { CldImage } from "next-cloudinary";

const Portfolio = () => {
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef();

  const [filterKey, setFilterKey] = useState("gabriela-and-angel"); // Used to filter out concrete items from <li> elements (pictures) using isotope.

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  useEffect(() => {
    const data = document.querySelector(".item__");

    if (data.length !== 0) {
      setTimeout(() => {
        // Initiliazing Isotope class. It will target the ul (parent) element (gallery zoom).
        // The itemSelector selects class style to specify the li element to filter (.item__).
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);

  useEffect(() => {
    if (isotope.current) {
      // Filter out the specific album
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
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
                    href="#"
                    className="current text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter="*"
                    onClick={handleFilterKeyChange("gabriela-and-angel")}
                  >
                    {`Gabriela & Angel`}
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".vimeo"
                    onClick={handleFilterKeyChange("villy-and-petar")}
                  >
                    {`Villy & Petar`}
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("janet-and-martin")}
                  >
                    {`Janet & Martin`}
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="gallery_zoom ml-[-50px]">
                {/** Gabriela and Angel photo album */}
                <li className="gabriela-and-angel mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/Gabriela and Angel/jtkaimqdigrujiwxr8sk"
                        alt="polinaphotography/Gabriela and Angel/jtkaimqdigrujiwxr8sk"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="gabriela-and-angel mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/Gabriela and Angel/wiwjsr2n1qfnpjon8ejm"
                        alt="polinaphotography/Gabriela and Angel/wiwjsr2n1qfnpjon8ejm"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Kelly Hookin
                        </h3>
                        <span className="text-[14px]">Vimeo</span>
                      </div>
                      <a
                        className="cavani_tm_full_link popup-vimeo"
                        href="#"
                        onClick={() => setIsOpen2(true)}
                      />
                    </div>
                  </div>
                </li>
                <li className="gabriela-and-angel mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/Gabriela and Angel/tv54ty5j1uqguyhalqrr"
                        alt="polinaphotography/Gabriela and Angel/tv54ty5j1uqguyhalqrr"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ashley Flores
                        </h3>
                        <span className="text-[14px]">Soundcloud</span>
                      </div>
                      <a
                        className="cavani_tm_full_link soundcloude_link mfp-iframe audio"
                        href="#"
                        onClick={toggleModalThree}
                      />
                    </div>
                  </div>
                </li>
                <li className="gabriela-and-angel mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/Gabriela and Angel/mr7kegbffjlnmbtujazo"
                        alt="polinaphotography/Gabriela and Angel/mr7kegbffjlnmbtujazo"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Alla Gorova
                        </h3>
                        <span className="text-[14px]">Image</span>
                      </div>
                      <a
                        className="cavani_tm_full_link zoom"
                        href="assets/img/portfolio/4.jpg"
                      />
                    </div>
                  </div>
                </li>
                <li className="gabriela-and-angel mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/Gabriela and Angel/p169fhndezixyziische"
                        alt="polinaphotography/Gabriela and Angel/p169fhndezixyziische"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Fele Sweet
                        </h3>
                        <span className="text-[14px]">Image</span>
                      </div>
                      <a
                        className="cavani_tm_full_link zoom"
                        href="assets/img/portfolio/5.jpg"
                      />
                    </div>
                  </div>
                </li>
                <li className="gabriela-and-angel mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/Gabriela and Angel/vbabphkv8qshas9vrgz3"
                        alt="polinaphotography/Gabriela and Angel/vbabphkv8qshas9vrgz3"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Fele Sweet
                        </h3>
                        <span className="text-[14px]">Image</span>
                      </div>
                      <a
                        className="cavani_tm_full_link zoom"
                        href="assets/img/portfolio/5.jpg"
                      />
                    </div>
                  </div>
                </li>
                <li className="gabriela-and-angel mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/Gabriela and Angel/sgd1xvdrjj9jmntkxxow"
                        alt="polinaphotography/Gabriela and Angel/sgd1xvdrjj9jmntkxxow"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Fele Sweet
                        </h3>
                        <span className="text-[14px]">Image</span>
                      </div>
                      <a
                        className="cavani_tm_full_link zoom"
                        href="assets/img/portfolio/5.jpg"
                      />
                    </div>
                  </div>
                </li>
                <li className="gabriela-and-angel mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/Gabriela and Angel/uwvybbouwtww7vxw4e4v"
                        alt="polinaphotography/Gabriela and Angel/uwvybbouwtww7vxw4e4v"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Alice Moon
                        </h3>
                        <span className="text-[14px]">Detail</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalFour}
                      />
                    </div>
                    {/* <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification. Building mockups strikes the ideal
                              balance ease of modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </li>
                {/** Janet And Martin photo album */}
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/v1wq9hujt0wdwchfrxn7"
                        alt="polinaphotography/janet-and-martin/v1wq9hujt0wdwchfrxn7"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/ntvkejy7ismukrxxye0g"
                        alt="polinaphotography/janet-and-martin/ntvkejy7ismukrxxye0g"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/uggggtymlse5gu1iavr8"
                        alt="polinaphotography/janet-and-martin/uggggtymlse5gu1iavr8"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/osiwj11uhw7ajap1gtjs"
                        alt="polinaphotography/janet-and-martin/osiwj11uhw7ajap1gtjs"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/i1xjgmsezws0fak32gku"
                        alt="polinaphotography/janet-and-martin/i1xjgmsezws0fak32gku"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/u7bdptnbo8dlreykexjk"
                        alt="polinaphotography/janet-and-martin/u7bdptnbo8dlreykexjk"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/bd2bzh04ye9ec6bmppgm"
                        alt="polinaphotography/janet-and-martin/bd2bzh04ye9ec6bmppgm"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/mjgkbovuyzjikki25mti"
                        alt="polinaphotography/janet-and-martin/mjgkbovuyzjikki25mti"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/toithd7z3dwjj6jsvteo"
                        alt="polinaphotography/janet-and-martin/toithd7z3dwjj6jsvteo"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/en4gymgxibkhhgrv3kis"
                        alt="polinaphotography/janet-and-martin/en4gymgxibkhhgrv3kis"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/nggaqvrdrlsk4hqgcrwy"
                        alt="polinaphotography/janet-and-martin/nggaqvrdrlsk4hqgcrwy"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/rhiqmhz67argijnhe74w"
                        alt="polinaphotography/janet-and-martin/rhiqmhz67argijnhe74w"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/ue7jsnbe2j56ywubunxk"
                        alt="polinaphotography/janet-and-martin/ue7jsnbe2j56ywubunxk"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/hjyedy4jam3pfzyivwd6"
                        alt="polinaphotography/janet-and-martin/hjyedy4jam3pfzyivwd6"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/hnun1us86pf2trac45t8"
                        alt="polinaphotography/janet-and-martin/hnun1us86pf2trac45t8"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/z6ebknutul5mrzn381lf"
                        alt="polinaphotography/janet-and-martin/z6ebknutul5mrzn381lf"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/x7nlhcopsqtn5dfe9roe"
                        alt="polinaphotography/janet-and-martin/x7nlhcopsqtn5dfe9roe"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li>
                <li className="janet-and-martin mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <CldImage
                        width="640"
                        height="960"
                        crop="fill"
                        gravity="auto"
                        loading="lazy"
                        src="polinaphotography/janet-and-martin/z15gzhzs8saaeaj20122"
                        alt="polinaphotography/janet-and-martin/z15gzhzs8saaeaj20122"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Alice Moon
                        </h3>
                        <span className="text-[14px]">Detail</span>
                      </div>
                      <a
                        className="cavani_tm_full_link portfolio_popup"
                        href="#"
                        onClick={toggleModalFour}
                      />
                    </div>
                    {/* <div className="hidden_content hidden opacity-0 invisible absolute z-[-111]">
                      <div className="popup_details w-full h-auto clear-both float-left">
                        <div className="main_details w-full h-auto clear-both flex mb-[60px]">
                          <div className="textbox w-[70%] pr-[40px]">
                            <p className="mb-[15px]">
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification. Building mockups strikes the ideal
                              balance ease of modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when you're trying to
                              figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              phase when they will represent the target product.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                          </div>
                          <div className="detailbox w-[30%] pl-[40px]">
                            <ul>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Client
                                </span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Category
                                </span>
                                <span>
                                  <a className="text-[#7d7789]" href="#">
                                    Detail
                                  </a>
                                </span>
                              </li>
                              <li className="mb-[10px] w-full float-left">
                                <span className="first font-bold block">
                                  Date
                                </span>
                                <span>March 07, 2021</span>
                              </li>
                              <li className="w-full float-left">
                                <span className="first font-bold block">
                                  Share
                                </span>
                                <ul className="share relative top-[7px]">
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/facebook.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="mr-[13px] inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/twitter.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                  <li className="inline-block">
                                    <a className="text-[#7d7789]" href="#">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/social/instagram.svg"
                                        alt
                                      />
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images w-full clear-both float-left h-auto">
                          <ul className="ml-[-30px]">
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li className="mb-[30px] float-left pl-[30px]">
                              <div className="list_inner w-full clear-both float-left h-auto relative">
                                <div className="my_image relative">
                                  <img
                                    className="relative opacity-0 min-w-full"
                                    src="assets/img/thumbs/4-2.jpg"
                                    alt
                                  />
                                  <div
                                    className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                                    data-img-url="assets/img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};

export default Portfolio;
