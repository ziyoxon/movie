import Movies from "@/components/movies/Movies";
import React, { memo, useEffect } from "react";
import { request } from "@/api";
import { useState } from "react";
import Header from "@/components/Header/Header";
import SwiperComponent from "@/components/Swiper/Swiper";
const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    request("/discover/movie").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Header/>
      <SwiperComponent/>
      <Movies data={data} />
    </div>
  );
};

export default memo(Home);
