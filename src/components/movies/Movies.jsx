import React, { memo } from "react";
import MoviesItem from "./MoviesItem";

const Movies = ({ data }) => {
  console.log(data);

  return (
    <div className="bg-black">
      <div className="flex gap-2 justify-center bg-black flex-wrap container   ">
        {data?.results?.map((movie) => (
          <MoviesItem key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default memo(Movies);
