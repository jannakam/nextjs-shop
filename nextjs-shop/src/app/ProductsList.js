import products from './products.js'

const ProductsList = () => {
    return (
      <div className='flex space-x-3 justify-center'>
        {products.map((product) => (
          <div key={product.id}>
            <img className='overflow-clip h-60' src={product.image} alt={product.name} />
            <h2 className='font-bold font-serif text-xl'>{product.name}</h2>
            <h3 className='font-bold font-serif text-lg'>{product.price}</h3>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductsList;