import Navbar from "@/components/Navbar"
import NewReleases from "@/components/NewReleases"
import ProductFeature from "@/components/ProductFeature"
import products from "@/store/products.json"



function Home() {
  return (
    <>
      <ProductFeature product = {products[0]}/>
      <NewReleases products= {products}/>
    </>
  )
}

export default Home