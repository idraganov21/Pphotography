import { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { imgToSvg } from "../utils";

const Service = () => {
  useEffect(() => {
    imgToSvg();
  }, []);

  const services = [
    {
      img: "assets/img/svg/camera.svg",
      icon: "assets/img/svg/camera.svg",
      text: "Получавате всички сполучливи кадри, селектирани и обработени от мен. Предадени в онлайн галерия",
      title: "Сватбена фотография",
      text1:
        "Получавате всички сполучливи кадри, селектирани и обработени от мен. Предадени в онлайн галерия",
      text2:
        "Aнгажираност - 8 часа.",
      text3:
        "При желание за повече часове се заплаща овъртайм по 80лв/ час -при ангажираност извън гр. Варна - 0,50лв/км",
    },
    {
      img: "assets/img/svg/camera2.svg",
      icon: "assets/img/svg/camera2.svg",
      text: "Получавате всичи сполучливи кадри в онлайн галерия - неограничен брой/над 100 кадъра/",
      date: "August 9, 2021",
      title: "Семейна сесия",
      text1:
        "Получавате всичи сполучливи кадри в онлайн галерия - неограничен брой/над 100 кадъра/ Селектирани и обработени от мен",
      text2:
        "110 лв Времетраене - 60 МИН.",
    },
    {
      img: "assets/img/svg/camera3.svg",
      icon: "assets/img/svg/camera3.svg",
      text: "Получавате всичи сполучливи кадри в онлайн галерия - неограничен брой/над 100 кадъра/",
      date: "August 9, 2021",
      title: "Портретна сесия",
      text1:
        "Получавате всичи сполучливи кадри в онлайн галерия - неограничен брой/над 100 кадъра/ Селектирани и обработени от мен.",
      text2:
        "100 ЛВ./ ВРЕМЕТРАЕНЕ ДО 60 МИН.",
    },
    {
      img: "assets/img/svg/camera4.svg",
      icon: "assets/img/svg/camera4.svg",
      text: "Получавате всичи сполучливи кадри в онлайн галерия - неограничен брой",
      date: "August 9, 2021",
      title: "Заснемане на ритуал Кръщение",
      text1:
        "Заснемане на ритуал Кръщение!",
      text2:
        "120 лв",
    },
  ];

  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }

  return (
    <Fragment>
      <SectionContainer className="cavani_tm_section" navName="service">
        <div className="section_inner">
          <div className="cavani_tm_service w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Services
              </span>
            </div>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src={item.icon}
                        alt="image"
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={item.img}
                        alt="image"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="service_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                    <div
                      className="main"
                      data-img-url={modalContent.img}
                      style={{
                        backgroundImage: `url(${modalContent.img})`,
                        backgroundSize: 'contain',
                      }}
                    />
                  </div>
                  <div className="main_title">
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Service;
