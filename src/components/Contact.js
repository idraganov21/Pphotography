import { useTranslation } from "next-i18next";
import SectionContainer from "../layout/SectionContainer";


const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionContainer navName="contact">
      <div className="section_inner">
        <div className="cavani_tm_contact w-full h-auto clear-both float-left mb-[100px]">
          <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
            <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
              {t('getintouch')}
            </span>
          </div>
          <div className="short_info w-full h-auto clear-both float-left mt-[62px]">
            <ul className="ml-[-30px] flex flex-wrap">
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/location.svg"
                    alt="image"
                  />
                  <span className="block">{t('varna')}</span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/mail.svg"
                    alt="image"
                  />
                  <span className="block">
                    <a
                      className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                      href="#"
                    >
                      poli110356@gmail.com
                    </a>
                  </span>
                </div>
              </li>
              <li className="mb-[30px] w-1/3 pl-[30px]">
                <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.07)] border text-center py-[32px] px-[25px]">
                  <img
                    className="svg inline-block w-[18px] h-[18px] mb-[10px]"
                    src="assets/img/svg/call.svg"
                    alt="image"
                  />
                  <span className="block">+359 88 8487712</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="form w-full h-auto clear-both flex">
            <div className="left w-1/2 pr-[15px]">
              <div className="fields w-full h-auto clear-both float-left">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>{t('req')}</span>
                  </div>
                  <div className="first w-full float-left">
                    <ul>
                      <li className="w-full mb-[30px] float-left">
                        <input
                          id="name"
                          type="text"
                          placeholder={t('name')}
                          autoComplete="off"
                        />
                      </li>
                      <li className="w-full mb-[30px] float-left">
                        <input
                          id="email"
                          type="text"
                          placeholder={t('email')}
                          autoComplete="off"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="last">
                    <textarea
                      id="message"
                      placeholder= {t('message')}
                      defaultValue={""}
                    />
                  </div>
                  <div className="cavani_tm_button">
                    <a id="send_message" href="#">
                      {t('send')}
                    </a>
                  </div>
                  {/* If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  */}
                </form>
              </div>
            </div>
            <div className="right w-1/2 pl-[15px] relative">
              <div className="map_wrap">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186126.54361124095!2d27.778100640491733!3d43.20472281741597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538baaf3d7a1%3A0x5727941c71a58b7c!2sVarna!5e0!3m2!1sen!2sbg!4v1691313980675!5m2!1sen!2sbg"
                      width="100%"
                      height={355}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <a href="https://fmovies-online.net">fmovies</a>
                    <br />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".mapouter{position:relative;text-align:right;height:355px;width:100%;}",
                      }}
                    />
                    <a href="https://www.embedgooglemap.net">
                      embedgooglemap.net
                    </a>
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}",
                      }}
                    />
                  </div>
                </div>
                {/* Get your API here https://www.embedgooglemap.net */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
