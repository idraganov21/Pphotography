import { Fragment, useContext, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CavaniContext } from "../Context";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { navChange, nav: activeNav } = useContext(CavaniContext);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const newLocale = router.locale === "bg" ? "en" : "bg";
    router.push(router.pathname, router.pathname, { locale: newLocale });
  };

  const navs = [
    { id: 1, name: t("home"), href: "home" },
    { id: 2, name: t("about"), href: "about" },
    { id: 3, name: t("portfolio"), href: "portfolio" },
    { id: 4, name: t("service"), href: "service" },
    { id: 6, name: t("contact"), href: "contact" },
  ];
  return (
    <Fragment>
      <div className="cavani_tm_topbar fixed top-0 left-0 right-0 h-[50px] bg-white z-[15] hidden middle:block">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
          <div className="logo" data-type="image">
            {" "}
            {/* You can use text or image as logo. data-type values are: "image" and "text"  */}
            <a className="image" href="#">
              <img
                className="max-w-[250px] max-h-[210px]"
                src="assets/img/svg/polisvg.svg"
                alt="image"
              />
            </a>
            <a
              className="text text-black uppercase font-poppins text-[22px] font-extrabold tracking-[2px] leading-[50px]"
              href="#"
            >
              <span>Polina</span>
            </a>
          </div>
          <div className="trigger relative top-[5px]">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`cavani_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ${
          toggle ? "opened" : ""
        }`}
      >
        <div className="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
          <div className="wrapper">
            <div className="avatar w-[70px] h-[70px] relative float-right mb-[60px]">
            <div className=" float-left switch">
                <input
                  id="language-toggle"
                  className="check-toggle check-toggle-round-flat"
                  type="checkbox"
                  checked={i18n.language === "bg"}
                  onChange={handleLanguageSwitch}
                />
                <label htmlFor="language-toggle" className="leading-10"></label>
                <span className="on">EN</span>
                <span className="off">BG</span>
              </div>
            </div>
            <div className="menu_list w-full h-auto clear-both float-left mb-[50px]">
              <ul className="transition_link">
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      activeNav == nav.href ? "active" : ""
                    } mb-[7px]`}
                  >
                    <a
                      onClick={() => {
                        navChange(nav.href);
                        setToggle(false);
                      }}
                      className="text-[#333] font-poppins"
                      href={`#${nav.href}`}
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="social w-full float-left mb-[5px]">
              <ul>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="https://www.facebook.com/profile.php?id=100063701725113" target="_blank">
                    <img
                      className="svg"
                      src="assets/img/svg/social/facebook.svg"
                      alt="image"
                    />
                  </a>
                </li>
                {/* <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/twitter.svg"
                      alt="image"
                    />
                  </a>
                </li> */}
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="https://instagram.com/polinaivanovaphotos?igshid=MzRlODBiNWFlZA==" target="_blank">
                    <img
                      className="svg"
                      src="assets/img/svg/social/instagram.svg"
                      alt="image"
                    />
                  </a>
                </li>
                {/* <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/dribbble.svg"
                      alt="image"
                    />
                  </a>
                </li> */}
                {/* <li className="inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/tik-tok.svg"
                      alt="image"
                    />
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="copyright w-full float-left">
              <p className="text-[#333] font-poppins">Copyright © 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cavani_tm_header fixed top-0 left-0 right-0 h-[70px] leading-[70px] bg-white z-[10] flex items-center justify-between py-0 px-[70px] middle:hidden">
        <div className="logo" data-type="image">
          {" "}
          {/* You can use text or image as logo. data-type values are: "image" and "text"  */}
          <a className="image" href="#">
            <img
              className="max-w-[110px] max-h-[65px] inline-block"
              src="assets/img/svg/polisvg.svg"
              alt="image"
            />
          </a>
          <a
            className="text no-underline text-black uppercase font-poppins text-[25px] font-extrabold tracking-[2px] leading-[70px]"
            href="#"
          >
            <span className="relative top-[2px]">Polina</span>
          </a>
        </div>
        {/* <button onClick={handleLanguageSwitch}>click me</button> */}
        <div className="menu relative">
          <ul className="transition_link">
            {navs.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  activeNav == nav.href ? "active" : ""
                } float-left`}
              >
                <a
                  onClick={() => navChange(nav.href)}
                  className="text-[#333] font-poppins font-medium py-0 px-[30px] inline-block transition-all duration-300"
                  href={`#${nav.href}`}
                >
                  {nav.name}
                </a>
              </li>
            ))}
              <div className=" float-left switch">
                <input
                  id="language-toggle"
                  className="check-toggle check-toggle-round-flat"
                  type="checkbox"
                  checked={i18n.language === "bg"}
                  onChange={handleLanguageSwitch}
                />
                <label htmlFor="language-toggle" className="leading-10"></label>
                <span className="on">EN</span>
                <span className="off">BG</span>
              </div>
          </ul>

          <span className="ccc absolute block top-[15px] bottom-[15px] bg-[#333] z-[-1] transition-all duration-500" />
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
