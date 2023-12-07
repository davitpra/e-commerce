'use client'
import Navbar from "@/components/Navbar";
import Center from "@/components/Center";
import ProductCard from "@/components/ProductCard";

import { H2, ProductsGrid } from './style'

import products from "@/store/products.json"

export default function category({params}) {
  const {category} = params
  const productsFiltered = products.filter(product => product.category === decodeURIComponent(category));
  return (
    <>
      <Center>
        <H2>{decodeURIComponent(category)}</H2>
        <ProductsGrid>
        { productsFiltered?.length === 0 && <p>No products</p>}
        { productsFiltered?.length > 0 && productsFiltered.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsGrid>
      </Center>
    </>
  );
}