import Image from "next/image";
import ProductsList from "./ProductsList.js";
import products from "./products.js";

export default function Home() {
  const shopName = (
    <h1 className="text-4xl font-bold font-serif">Cookies and Beyond</h1>
  );
  const shopDescription = (
    <p className="text-lg font-bold font-serif">Where cookie maniacs gather</p>
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
      {shopName}
      {shopDescription}
      <Image
        src="/Storefront1.png"
        width={700}
        height={500}
        alt="Picture of my store"
      />
      <ProductsList />
      {/* {productsList} */} 
    </div>
  );
}
