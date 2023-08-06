import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import ProgressBar from "./progressBar";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";

const About = () => {
  const circleProgressData = [
    { language: "English", progress: 95 },
    { language: "Russian", progress: 80 },
    { language: "Arabic", progress: 90 },
  ];

  const progressBarData = [
    { bgcolor: "#7d7789", completed: 60, title: "HTML & CSS" },
    { bgcolor: "#7d7789", completed: 85, title: "Javascript" },
    { bgcolor: "#7d7789", completed: 90, title: "WordPress" },
  ];

  const services = [
    {
      desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
      img: "img/testimonials/1.jpg",
      info1: "Alexander Walker",
      info2: "Graphics Designer",
    },
    {
      desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
      img: "img/testimonials/2.jpg",
      info1: "Baraka Clinton",
      info2: "Construction Engineering",
    },
    {
      desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
      img: "img/testimonials/3.jpg",
      info1: "Armin Van Buuren",
      info2: "Content Manager",
    },
  ];

  const descriptions = [
    {
      title: "Сватбена фотография",
      content:
        "- Получавате всички сполучливи кадри, селектирани и обработени от мен. Предадени в онлайн галерия. Aнгажираност - 8 часа. При желание за повече часове се заплаща овъртайм по 80лв/ час -при ангажираност извън гр. Варна - 0,50лв/км",
    },
    {
      title: "Семейна сесия",
      content:
        "- Получавате всичи сполучливи кадри в онлайн галерия - неограничен брой/над 100 кадъра/ Селектирани и обработени от мен - 110лв. Времетраене - 60 МИН.",
    },
    {
      title: "Портретна сесия",
      content:
        "- Получавате всичи сполучливи кадри в онлайн галерия - неограничен брой/над 100 кадъра/ Селектирани и обработени от мен. ВРЕМЕТРАЕНЕ ДО 60 МИН.",
    },
    {
      title: "Заснемане на ритуал Кръщение",
      content: "",
    },
    // Add other descriptions here
  ];

  return (
    <SectionContainer navName="about">
      <div className="section_inner">
        <div className="cavani_tm_about w-full h-auto clear-both float-left">
          <div className="biography w-full h-auto clear-both float-left mb-[87px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                About Me
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%] w-full">
                <p className="mb-[15px]">
                  Здравейте ! Казвам се Полина и ако четете това , значи че сте
                  решили заедно да разкажем вашата история в най-чистият й и
                  съвършен вид! Значи , че ще ми позволите да вникна в във вашия
                  живот, във вашите мечти , да погледна през вашите очи .
                  Спомням си , че когато бях дете се възхищавах как е възможно
                  само с натискането на едно копче да запазиш един миг във
                  вечността, такъв какъвто е . Да запазиш спомена за хората, за
                  тези преживявания , които да топлят сърцето ти години наред.
                </p>
                <p>
                  Защото за мен това е фотографията, изкуство, начин да спреш
                  времето , противно на всички теореми и закони . Да спреш
                  времето там , където си се чувствал щастлив и да осъзнаеш как
                  с всяка изминала година този спомен става все по-ценен и
                  по-ценен за теб. Аз няма да ви карам да позирате , да гледате
                  право към обектива, а напротив…
                </p>
                <p>
                  Ще опитам да ви накарам да погледнете в себе си и в човека до
                  вас, да бъдете такива каквито сте, щури, естествени и красиви.
                  Толкова истински , колкото сте сутрин, когато си правите чаша
                  кафе и вечер, когато мечтаете и се разхождате край брега.
                  Защото както е казал Бернис Абът ,, Фотографията помага на
                  хората да видят. “
                </p>
              </div>
              {/* <div className="right w-[50%]">
                <ul>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Name:
                    </span>
                    <span className="second inline-block">Полина Иванова</span>
                  </li>
                  <li className="mb-[8px] w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Mail:
                    </span>
                    <span className="second inline-block">
                      <a
                        className="text-[#7d7789] transition-all duration-300 hover:text-[#333]"
                        href="#"
                      >
                        poli110356@gmail.com
                      </a>
                    </span>
                  </li>
                  <li className="w-full float-left">
                    <span className="first inline-block min-w-[100px] font-bold">
                      Phone:
                    </span>
                    <span className="second inline-block">
                      +77 022 444 05 05
                    </span>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div className="services w-full h-auto clear-both float-left mb-[87px]">
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between">
              <div className="service_list w-[40%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Services
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    {descriptions.map((item, index) => (
                      <Disclosure
                        as="li"
                        className="mb-[8px] w-full float-left relative pl-[25px]"
                        key={index}
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="text-xl">
                              {item.title}
                            </Disclosure.Button>
                            <Disclosure.Panel>
                              <p>{item.content}</p>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="service_list w-[50%]">
                <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
                  <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                    Prices
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      100лв/час
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      110лв/час
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      100лв/60 мин
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      120лв/час
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default About;
