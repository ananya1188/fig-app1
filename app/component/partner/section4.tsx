import Image from "next/image"
import data from "../../data/partner/section4.json"
const {PartnerWhoProvide}=data
export default function PartnerSection4(){
    return(
        <>
        <div>
            <div>
            <h2 className="text-4xl">Partner who provide</h2>
     </div>
     {PartnerWhoProvide.map((PartnerProvide,i)=>(
        <div key={i}>
 <Image src={PartnerProvide.image} alt={PartnerProvide.alt} width={100} height={100}></Image>
        </div>
     ))}
    
        </div>
        </>
    )
}