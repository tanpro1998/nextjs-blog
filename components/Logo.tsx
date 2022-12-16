import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { defaultProps, title } = props;
  return (
    <div className="flex items-center gap-4">
      <Image
        width={50}
        height={50}
        src="https://links.papareact.com/1m8"
        alt="logo"
        className=""
      />
      <p className="font-bold">Flash Blog</p>
    </div>
  );
};

export default Logo;
