import React, { useEffect, useState } from 'react';
import Title from '../atoms/Title';

function CustomerPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Customers');
        const result = await response.json();
        setCustomers(result.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <Title title='Clientes' className='text-4xl font-semibold text-gray-700 p-8' />
      <div className="overflow-x-auto pb-3">
        <div className="max-h-[400px] overflow-y-auto border bg-white border-gray-300 rounded-lg">
          <table className="table-auto w-full">
            <thead className="bg-gray-200 sticky -top-0.5 z-10">
              <tr>
                <th className="p-4 border text-left bg-blue-300">Nombre</th>
                <th className="p-4 border text-left bg-blue-300">Dirección</th>
                <th className="p-4 border text-left bg-blue-300">Ciudad</th>
                <th className="p-4 border text-left bg-blue-300">Código Postal</th>
                <th className="p-4 border text-left bg-blue-300">País</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.CustomerID} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 border">{customer.ContactName}</td>
                  <td className="px-4 py-2 border">{customer.Address}</td>
                  <td className="px-4 py-2 border">{customer.City}</td>
                  <td className="px-4 py-2 border">{customer.PostalCode}</td>
                  <td className="px-4 py-2 border">{customer.Country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomerPage;
