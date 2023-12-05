'use client'
import React from 'react'
import Center from '../Center'
import { H2, ProductsGrid } from './style'
import ProductCard from '../ProductCard'

function NewReleases({products}) {

  const listOfProducts = products.slice(0, 4)
  return (
    <Center>
      <H2>New Releases</H2>
      <ProductsGrid>
        { listOfProducts?.length === 0 && <p>No products</p>}
        { listOfProducts?.length > 0 && listOfProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsGrid>
    </Center>
  )
}

export default NewReleases