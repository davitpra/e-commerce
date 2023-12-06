'use client'
import Navbar from "@/components/Navbar";
import Center from "@/components/Center";
import { H2, ProductsGrid } from './style'
import products from "@/libs/products.json"
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <>
      <Center>
        <H2>All products</H2>
        <ProductsGrid>
        { products?.length === 0 && <p>No products</p>}
        { products?.length > 0 && products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsGrid>
      </Center>
    </>
  );
}
