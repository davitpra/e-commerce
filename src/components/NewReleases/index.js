'use client'
import React from 'react'
import Center from '../Center'
import { H2, ProductsGrid } from './style'
import ProductCard from '../ProductCard'

const product = {
  title: "The best product",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor. Nunc euismod, enim vitae tincidunt ultricies, metus ipsum tincidunt sapien, eget maximus nisi massa in neque. Donec eget odio eget erat ultricies ultrices. Sed euismod, nisl quis aliquam tincidunt, quam nisl vestibulum diam, vel aliquam nisl urna eget libero. Sed euismod, nisl quis aliquam tincidunt, quam nisl vestibulum diam, vel aliquam nisl urna eget libero.",
  _id: "1",
  image: "https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png",
  alt: "The best product",
  price: 100
}


function NewReleases() {
  return (
    <Center>
      <H2>New Releases</H2>
      <ProductsGrid>
        {/* { products?.length === 0 && <p>No products</p>} */}
        {/* { products?.length > 0 && products.map(product => ( */}
        { [1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsGrid>
    </Center>
  )
}

export default NewReleases