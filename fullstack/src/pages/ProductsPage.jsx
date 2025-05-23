import React, { useState, useEffect } from 'react';
import Title from '../atoms/Title'
import ProductsExpensive from './ProductsExpensive';
import ProductsCheap from './ProductsCheap';
import ProductsBestSeller from './ProductsBestSeller';
import ProductsLessSold from './ProductsLessSold'

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Products');
        const results = await response.json()
        setProducts(results.data)
        console.log(results)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <Title title='Productos' className='text-4xl font-semibold text-gray-700 mt-10 mb-4'/>
      
      <div className='flex gap-4'>
        <div className="overflow-x-auto pb-3 w-1/2">
          <div className="max-h-[440px] overflow-y-auto rounded-lg bg-white">
            <table className="table-auto w-full">
              <thead className="sticky -top-0.5 z-0">
                <tr>
                  <th className="px-4 py-2 border text-left bg-blue-300">Todos los productos</th>
                  <th className="px-4 py-2 border text-left bg-blue-300">Precio</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.ProductID} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-1 border">{product.ProductName}</td>
                    <td className="px-4 py-1 border">{product.Price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='w-1/2 flex flex-col gap-3'>
          <ProductsExpensive />
          <ProductsCheap />
        </div>
      </div>

      <Title title='Productos Vendidos' className='text-4xl font-semibold text-gray-700 mt-16 mb-4'/>
      <div className='w-full flex gap-4'>
      <div className='flex-1'>
        <ProductsBestSeller />
      </div>
      <div className='flex-1'>
        <ProductsLessSold />
      </div>
</div>

    </div>

    
  );
  
}

export default ProductsPage
