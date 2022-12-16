import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold  px-10 py-5 ">
      <div className="flex items-center space-x-2">
        <Link href={"/"}>
          <Image
            src={"https://links.papareact.com/1m8"}
            width={50}
            height={50}
            alt="logo"
            className="rounded-full"
          />
        </Link>
        <h1>The FLASH</h1>
      </div>
      <div>
        <Link
          href={"/"}
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#789ff0] rounded-full flex items-center"
        >
          Sign up to the University of Code
        </Link>
      </div>
    </header>
  );
};

export default Header;
