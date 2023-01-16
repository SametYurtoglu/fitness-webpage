import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-amber-500 w-full h-[200px] mt-28 flex justify-between px-20 items-center">
        <div>
          <h1 className="text-4xl font-sansita font-bold">LOGO</h1>
        </div>
        <div>
            <ul className="flex gap-5 font-semibold text-md">
                <li>Home</li>
                <li>Yakında</li>
                <li>Yakında</li>
                <li>Yakında</li>
                <li>Yakında</li>
            </ul>
        </div>
      </div>
        <div className="w-full h-[50px] bg-gray-600 flex items-center justify-center">
            <h1 className="text-white font-bold">Copyright © 2023 all right reserved. Designer and Developer <Link href="https://github.com/SametYurtoglu" target={"_blank"} className="font-sansita text-amber-600">NotFounds</Link></h1>
        </div>
    </div>
  );
};

export default Footer;
