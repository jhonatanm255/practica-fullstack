import React from 'react'
import { 
  UserCheck, 
  ListOrdered, 
  NotebookPen, 
  ShoppingBasket, 
  Truck, 
  Container, 
  Users } from 'lucide-react'

export function LogoCustomer() {
  return (
    <div>
        <UserCheck />   
    </div>
  )
}

export function LogoOrders() {
    return (
      <div>
          <ListOrdered />   
      </div>
    )
  }

  export function LogoOrdersDetails() {
    return (
      <div>
          <NotebookPen />   
      </div>
    )
  }

  export function LogoProducts() {
    return (
      <div>
          <ShoppingBasket />   
      </div>
    )
  }

  export function LogoShipped() {
    return (
      <div>
          <Truck />   
      </div>
    )
  }

  export function LogoSuppliers() {
    return (
      <div>
          <Container />   
      </div>
    )
  }

  export function LogoEmployers() {
    return (
      <div>
          <Users />   
      </div>
    )
  }

