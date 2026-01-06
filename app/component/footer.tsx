import Image from "next/image"
import Link from "next/link"
import {Button} from "../../components/ui/button"
import data from "../data/footer.json"
const {OurServices,Shades,FollowUs}=data
export default function Footer(){
    return(
        <>
        <div>
            <div>
            <Image src="/images/Group.svg" alt="footer logo" width={100} height={100}></Image>
            <p>A fantastic design plus unparalleled craftsmanship are just the beginning. Attainable Outdoor Luxury.</p>
       <Button>Call for a Quote</Button>
        </div>
        <div>
            <h4 className="text-2xl">Our Services</h4>
            <div></div>
            <div className="pt-4">
                {OurServices.map((service,i)=>(
                    <div key={i}>
               <Link href={service.link} className="text-sm">{service.name}</Link>
           
         </div>     
 ))}
          </div>
        </div>
        <div>
            <h4 className="text-2xl">Let's talk shades</h4>
               <div className="pt-4">
                {Shades.map((shade,i)=>(
                    <div key={i}>

             <Link href={shade.link} className="text-sm">{shade.name}</Link>
                    </div>
                ))}
             
              
        </div>   
        </div>
        <div>
            <h2 className="text-2xl">Follow us on</h2>
            <div className="pt-4">
                {FollowUs.map((follow,i)=>(
                    <div key={i} style={{backgroundColor:"black"}}>
        <Image src={follow.image} alt="image" width={30} height={40}></Image>
                    </div>
                ))}

            </div>
        </div>
        </div>
        </>
    )
}