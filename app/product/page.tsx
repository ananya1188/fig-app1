import Footer from "../component/footer"
import Header from "../component/header"
import ProductSection from "../component/product/section"
import ProductSection2 from "../component/product/section2"
import ProductSection3 from "../component/product/section3"
import ProductSection4 from "../component/product/section4"
import ProductSection5 from "../component/product/section5"
import ProductSection6 from "../component/product/section6"
import ProductSection7 from "../component/product/section7"
import EmailTestPage from "../email-test/page"

export default function ProductSections(){
    return(
        <>
        <Header/>
    <ProductSection/>
    <ProductSection2/>
    <ProductSection3/>
    <ProductSection4/>
    <ProductSection5/>
     <ProductSection6/>
     <ProductSection7/>
        <EmailTestPage/>
     <Footer/>
        </>
    )
}
