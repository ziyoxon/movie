import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperComponent = () => {
  return (
    <div className="bg-black ">
      <div className="container rounded-2xl bg-[#000000] mx-auto mb-16 ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="src/image/kunfu.png"
                alt="Kung Fu Panda 4"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-10 text-center left-1/2 transform -translate-x-1/2 text-white">
                <h2 className="text-3xl font-bold">Kung Fu Panda 4</h2>
                <p>2024 · Komediya · 1h 34m · EN · 6+</p>
                <button className="bg-red-500 px-4 py-2 rounded mt-4">
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="src/image/7.webp"
                alt="Second Slide"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-10 text-center left-1/2 transform -translate-x-1/2 text-white">
                <h2 className="text-3xl font-bold">Kung Fu Panda 4</h2>
                <p>2024 · Komediya · 1h 34m · EN · 6+</p>
                <button className="bg-red-500 px-4 py-2 rounded mt-4">
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="src/image/kunfu3.jpg"
                alt="Third Slide"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-10 text-center left-1/2 transform -translate-x-1/2 text-white">
                <h2 className="text-3xl font-bold">Kung Fu Panda 4</h2>
                <p>2024 · Komediya · 1h 34m · EN · 6+</p>
                <button className="bg-red-500 px-4 py-2 rounded mt-4">
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                src="src/image/kunfu4.jpg"
                alt="Third Slide"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-10 text-center left-1/2 transform -translate-x-1/2 text-white">
                <h2 className="text-3xl font-bold">Kung Fu Panda 4</h2>
                <p>2024 · Komediya · 1h 34m · EN · 6+</p>
                <button className="bg-red-500 px-4 py-2 rounded mt-4">
                  Смотреть
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
