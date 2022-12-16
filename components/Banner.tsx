import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between px-10 py-5 font-bold">
      <div className="flex flex-col">
        <h1 className="text-7xl">Flash's Daily Blog</h1>
        <p className="mt-5 md:mt-0">Welcome to Every Developer Favorite blog in the Developers</p>
      </div>
      <div className="text-gray-400 max-w-sm mt-5 md:mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur
        enim voluptates laborum tempore porro eum rem, tempora asperiores
        suscipit!
      </div>
    </div>
  );
};

export default Banner;
