import React, { useState, useEffect } from 'react';

function ProductsExpensive() {
  const [productsExpensive, setProductsExpensive] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Products/top-expensive');
        const results = await response.json()
        setProductsExpensive(results.data)
        console.log(results)
      } catch (error) {
        console.error('Error fetching products expensives:', error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto pb-3 w-full">
        <div className="max-h-[470px] overflow-y-auto rounded-lg bg-white">
          <table className="table-auto w-full">
            <thead className="bg-gray-200 sticky -top-0.5 z-10">
              <tr>
                <th className="px-4 py-2 border text-left bg-red-300">Top 5 productos con mayor precio</th>
                <th className="px-4 py-2 border text-left bg-red-300">Precio</th>
              </tr>
            </thead>
            <tbody>
              {productsExpensive.map((productExpensive) => (
                <tr key={productExpensive.ProductID} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-1 border">{productExpensive.ProductName}</td>
                  <td className="px-4 py-1 border">{productExpensive.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
}

export default ProductsExpensive