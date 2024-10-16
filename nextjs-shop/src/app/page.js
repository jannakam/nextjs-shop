import ProductList from "./components/ProductList.js"
import products from "../data/products.js";
import Header from "./components/Header.js"

export default function Home() {

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
      <Header />
      <ProductList />
      {/* {productsList} */}
    </div>
  );
}
