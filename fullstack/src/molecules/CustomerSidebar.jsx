import React from 'react'
import Title from '../atoms/Title'
import { LogoCustomer, 
    LogoOrders, 
    LogoOrdersDetails, 
    LogoProducts, 
    LogoShipped, 
    LogoSuppliers, 
    LogoEmployers} from '../atoms/LogosSidebar'
    import { Link } from 'react-router-dom'

function CustomerSidebar() {
  return (
    <>
        <Link to='/Customer' className='flex items-center gap-3 px-6 py-3 mt-4'>
            <LogoCustomer />
            <Title title="Clientes" className="text-md" />
        </Link>

        <Link to='/Employees' className='flex items-center gap-3 px-6 py-3 mt-4'>
            <LogoEmployers />
            <Title title="Empleados" className="text-md" />
        </Link>

        <Link to='/orderdetails' className='flex items-center gap-3 px-6 py-3 mt-4'>
            <LogoOrdersDetails />
            <Title title="Detalles de la Orden" className="text-md" />
        </Link>

        <Link to='/orders' className='flex items-center gap-3 px-6 py-3 mt-4'>
            <LogoOrders  />
            <Title title="Ordenes" className="text-md" />
        </Link>

        <Link to='/products' className='flex items-center gap-3 px-6 py-3 mt-4'>
            <LogoProducts />
            <Title title="Productos" className="text-md" />
        </Link>

        <Link to='/shipped' className='flex items-center gap-3 px-6 py-3 mt-4'>
            <LogoShipped />
            <Title title="Transportistas" className="text-md" />
        </Link>

        <Link to='/supplyers' className='flex items-center gap-3 px-6 py-3 mt-4'>
            <LogoSuppliers />
            <Title title="Proveedores" className="text-md" />
        </Link>
    </>
    
  )
}

export default CustomerSidebar