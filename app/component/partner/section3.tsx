 import Image from "next/image"
 import data from "../../data/partner/section3.json"
 const {WaysToPartner}=data;
export default function PartnerSection3() {
  return (
 <div>
        <h2 className="text-4xl">Ways To Partner</h2>
        <div className="flex">
             <div>
            <Image src="/images/Container232.png" alt="img" width={500} height={500}></Image>
        </div>
            <div>
            {WaysToPartner.map((partners,i)=>(
                <div key={i}>
        <Image src={partners.image} alt={partners.alt} width={40} height={40}></Image>
        <h5 className="text-2xl">{partners.title}</h5>
        <p>{partners.para}</p>
        </div>
        ))}
        </div>
       
        </div>
     </div>
       )
}