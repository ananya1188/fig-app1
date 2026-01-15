import {Button} from "../../components/ui/button"
import Image from "next/image"
import data from "../data/section4.json"
const {ShadePlus} = data;
export default function section4(){
    return(
        <>
        <div>
<Image src="/images/Border (2).png" alt="four" width={40} height={40}></Image>
 <h5>Why Shade plus</h5>
 <div>
    <h2 className="text-2xl">We are shade structures experts with 25+ years of experience</h2>
    <p>We are licensed, bonded, and insured, and have completed over 2,000 projects successfully in the Phoenix metro area. We are an accredited business with an A+ rating at the BBB.</p>
 </div>
 <div className="bgimg" style={{backgroundImage:"url('/images/Container.png')",height:"500px"}} >
    <Button>More about us</Button>
 </div>
 <div>
    {ShadePlus.map((shade,indeex)=>(
        <div key={indeex}>
 <Image src={shade.image} alt={shade.alt} width={400} height={400}/>
    <p>{shade.para}</p>
    </div>
    ))}
   
 </div>
        </div>
        </>
    )
}