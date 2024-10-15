import Image from "next/image";

export default function Home() {
  const shopName = <h1 className="text-4xl font-bold">Cookies and Beyond</h1>
  const shopDescription = <p className="text-lg font-bold">Where cookie maniacs gather</p>
  return (
    <div className="justify-center flex items-center flex-col space-y-6">
    {shopName}
    {shopDescription}
    <Image 
    src="/Storefront1.png"
    width={700}
    height={500}
    alt="Picture of my store"
    />
    </div>
  );
}