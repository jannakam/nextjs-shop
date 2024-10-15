import Image from "next/image";
import ProductItem from "./components/ProductItem.js";
import products from "../data/products.js";

export default function Home() {
  const shopName = (
    <h1 className="text-4xl font-bold font-serif text-pink-500">
      crumbl cookie
    </h1>
  );
  const shopDescription = (
    <p className="text-lg font-bold font-serif">new flavors every week!</p>
  );

  //This is the method of doing it in the file as suggested by the task, but to keep things cleaner I also isolated the function as its own component

  // const productsList = (
  //   <div className="flex space-x-3 justify-center">
  //     {products.map((product) => (
  //       <div key={product.id}>
  //         <img
  //           className="overflow-clip h-60"
  //           src={product.image}
  //           alt={product.name}
  //         />
  //         <h2 className="font-bold font-serif text-xl">{product.name}</h2>
  //         <h3 className="font-bold font-serif text-lg">{product.price}</h3>
  //       </div>
  //     ))}
  //   </div>
  // );

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
      <Image
        src="/Storefront1.png"
        width={700}
        height={500}
        alt="Picture of my store"
      />
      <ProductItem />
      {/* {productsList} */}
    </div>
  );
}
