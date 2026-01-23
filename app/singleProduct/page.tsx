import Footer from "../component/footer"
import Header from "../component/header"
import SingleProductSection from "../component/singleProduct/section"
import SingleProductSection2 from "../component/singleProduct/section2"
import SingleProductSection3 from "../component/singleProduct/section3"
import SingleProductSection4 from "../component/singleProduct/section4"
import SingleProductSection5 from "../component/singleProduct/section5"
import SingleProductSection6 from "../component/singleProduct/section6"
import Section9 from "../component/section9"

export default function SingleProductSections(){
    return(
        <>
        <Header/>
        <SingleProductSection/>
        <SingleProductSection2/>
        <SingleProductSection3/>
         <SingleProductSection4/>
         <SingleProductSection5/>
         <SingleProductSection6/>
       <Section9/>
         <Footer/>
        </>
    )
}