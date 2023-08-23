import { Disclosure } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import SectionContainer from "../layout/SectionContainer";


const About = () => {
  const { t } = useTranslation();


  const descriptions = [
    {
      title: t('svatba'),
      content:
        t('tsvatba'),
    },
    {
      title: t('fsession'),
      content:
        t('tfsession'),
    },
    {
      title: t('psession'),
      content:
        t('tpsession'),
    },
    {
      title: t('krushtene'),
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
                {t('aboutme')}
              </span>
            </div>
            <div className="wrapper w-full h-auto clear-both float-left flex justify-between mt-[55px]">
              <div className="left w-[40%] w-full">
                <p className="mb-[15px]">
                  {t('aboutftext')}
                </p>
                <p>
                  {t('aboutstext')}
                </p>
                <p>
                  {t('aboutttext')}
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
                    {t('services')}
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
                    {t('prices')}
                  </span>
                </div>
                <div className="list w-full h-auto clear-both float-left mt-[55px]">
                  <ul>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                      {t('100lv')}
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    {t('110lv')}
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    {t('100lv')}
                    </li>
                    <li className="mb-[8px] w-full float-left relative pl-[25px]">
                    {t('120lv')}
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
