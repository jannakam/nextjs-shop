import { React } from "react";
import Image from "next/image";
import VisitorCount from "./VisitorCount.js"

function Header() {
  const shopName = (
    <h1 className="text-4xl font-bold font-sans text-pink-500">
      crumbl cookie
    </h1>
  );
  const shopDescription = (
    <p className="text-lg font-bold font-sans">new flavors every week!</p>
  );

  return (
    <div className="justify-center flex items-center flex-col space-y-6">
      <Image
        src="/logo.png"
        width={200}
        height={500}
        alt="Picture of my store"
      />
      {shopName}
      {shopDescription}
      <VisitorCount />
      <Image
        className="rounded-2xl"
        src="/storefront.png"
        width={750}
        height={500}
        alt="Picture of my store"
      />
    </div>
  );
}

export default Header;
