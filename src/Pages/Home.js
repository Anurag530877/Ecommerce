import TopNav from "../components/Navbar"
import HeroCarousel from "../components/Crousel"
import ProductSection from "../components/Product"
import WatchSection from "../components/Watch"
import ProductCards from "../components/ProductCard"
import ClothSection from "../components/Cloth"
import Footer from "../components/Footer"
export default function HomePage(){
    return(<>
   <TopNav/>
   <HeroCarousel/>
   <ProductSection/>
   <WatchSection/>
   <ProductCards/>
   <ClothSection/>
   <Footer/>
    </>)
}