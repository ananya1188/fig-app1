import Image from "next/image"
import data from "../data/section6.json"
import {Button} from "../../components/ui/button"
const {AboutUs}=data;
export default function Section6(){
    return(
    <>
    <Image src="/images/Border (4).png" alt="six" width={40} height={40}></Image>
    <h5>About Us</h5>
    <div className="bgImg" style={{backgroundImage:"url('/images/about.png')", height:"600px",width:"1200px"}}>
   
    <div>
    <h2 className="text-4xl">Quality work done with passion and care</h2>
    <p>Long-lasting craftsmanship, innovation, and creativity - that's what we bring to the table. No one offers as many pergola types, custom solutions, and affordable options as us. We know shade!</p>
    </div>
    <div className="flex">
        {AboutUs.map((about,i)=>(
<div key={i}>
 <div>
        <Image src={about.Image} alt={about.alt} width={30} height={30}/>
        <h6>{about.title}</h6>
    </div>

</div>

        ))}
   
<Button>Call for a Quote</Button>
    </div>
    </div>
    </>
    )
}