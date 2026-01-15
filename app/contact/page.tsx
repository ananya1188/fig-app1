import ContactSection from "../component/contact/section"
import ContactSection2 from "../component/contact/section2"
import ContactSection3 from "../component/contact/section3"
import ContactSection4 from "../component/contact/section4"
import Footer from "../component/footer"
import Header from "../component/header"

export default function ContactSections(){
    return(
        <>
        <Header/>
      <ContactSection/>
      <ContactSection2/>
      <ContactSection3/>
      <ContactSection4/>
      <Footer/>
        </>

    )
}