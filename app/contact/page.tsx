import ContactSection from "../component/contact/section"
import EmailTestPage from "../email-test/page"
import ContactSection3 from "../component/contact/section3"
import ContactSection4 from "../component/contact/section4"
import Footer from "../component/footer"
import Header from "../component/header"

export default function ContactSections(){
    return(
        <>
        <Header/>
      <ContactSection/>
      <EmailTestPage/>
      <ContactSection3/>
      <ContactSection4/>
      <Footer/>
        </>

    )
}