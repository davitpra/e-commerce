import Navbar from "@/components/Navbar"
import NewReleases from "@/components/NewReleases"
import ProductFeature from "@/components/ProductFeature"

const product = {
  title: "The best product",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor. Nunc euismod, enim vitae tincidunt ultricies, metus ipsum tincidunt sapien, eget maximus nisi massa in neque. Donec eget odio eget erat ultricies ultrices. Sed euismod, nisl quis aliquam tincidunt, quam nisl vestibulum diam, vel aliquam nisl urna eget libero. Sed euismod, nisl quis aliquam tincidunt, quam nisl vestibulum diam, vel aliquam nisl urna eget libero.",
  _id: "1"
}

function Home() {
  return (
    <>
      <Navbar />
      <ProductFeature product = {product}/>
      <NewReleases />
    </>
  )
}

export default Home