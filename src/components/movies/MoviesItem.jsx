import React, { memo } from "react";

const MoviesItem = ({ title, poster_path }) => {
  return (
    <div className=" w-60 bg-[#000000]   rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt={title}
        className="w-full h-80 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-white">Rating: TBD</p>
      </div>
      
    </div>

  );
};

export default memo(MoviesItem);
