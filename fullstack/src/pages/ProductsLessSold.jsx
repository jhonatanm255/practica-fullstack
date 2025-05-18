import React, { useState, useEffect } from 'react';

function ProductsLessSold() {
  const [productsLessSold, setProductsLessSold] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Products/less-sold');
        const results = await response.json()
        setProductsLessSold(results.data)
        console.log(results)
      } catch (error) {
        console.error('Error fetching products best sellers:', error);
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
                <th className="px-4 py-2 border text-left bg-red-300">Top 10 productos menos vendidos</th>
                <th className="px-4 py-2 border text-left bg-red-300">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {productsLessSold.map((product) => (
                <tr key={product.ProductID} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-1 border">{product.ProductName}</td>
                  <td className="px-4 py-1 border">{product.TotalSold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
}

export default ProductsLessSold