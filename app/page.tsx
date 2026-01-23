import Header from "../app/component/header" 
import Footer from "./component/footer"
import Section from "./component/section"
import Section10 from "./component/section10"
import Section2 from "./component/section2"
import Section3 from "./component/section3"
import Section4 from "./component/section4"
import Section5 from "./component/section5"
import Section6 from "./component/section6"
import Section7 from "./component/section7"
import Section8 from "./component/section8"
import EmailTestPage from "../app/email-test/page"
export default function Home(){
  return(
    <>
    <Header/>
    <Section/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <EmailTestPage/>
    <Section10/>
    <Footer/>
    </>
  )
}