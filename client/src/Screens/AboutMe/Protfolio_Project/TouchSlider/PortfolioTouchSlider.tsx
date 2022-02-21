import React, { ReactElement } from "react";
import "./PortfolioTouchSlider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import AboutMeProjects from "../../Projects/AboutMeProjects";
interface Props {
  setShowProj: React.Dispatch<
    React.SetStateAction<"NO" | "KW_EXP" | "CO_LABS">
  >;
}
function PortfolioTouchSlider({ setShowProj }: Props): ReactElement {
  SwiperCore.use([EffectCoverflow, Pagination]);
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      style={{
        paddingLeft: "50px",
      }}
      className="mySwiper"
    >
      <SwiperSlide className="SliderPortfolio">
        <AboutMeProjects
          setShowProj={setShowProj}
          projTitle={"Co-Labs"}
          projDesc={"Social Media For Collaborative Task Management."}
          curProj={"01"}
          projStack={"MERN-GQL | Typescript"}
        />
      </SwiperSlide>
      <SwiperSlide className="SliderPortfolio">
        <AboutMeProjects
          setShowProj={setShowProj}
          projTitle={"Explore Keys"}
          projDesc={"One stop solution for Search Engine Optimization."}
          curProj={"02"}
          projStack={"MERN | PYTHON"}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default PortfolioTouchSlider;
