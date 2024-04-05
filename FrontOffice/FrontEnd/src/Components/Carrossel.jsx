import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CardLancamentos from "./CardLancamentos";

function Carrossel() {
	return (
		<Swiper
			spaceBetween={25}
			slidesPerView={3}
			onSlideChange={() => console.log("Slide Change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<CardLancamentos />
			</SwiperSlide>
			<SwiperSlide>
				{" "}
				<CardLancamentos />
			</SwiperSlide>
			<SwiperSlide>
				{" "}
				<CardLancamentos />
			</SwiperSlide>
			<SwiperSlide>
				{" "}
				<CardLancamentos />
			</SwiperSlide>
		</Swiper>
	);
}

export default Carrossel;
