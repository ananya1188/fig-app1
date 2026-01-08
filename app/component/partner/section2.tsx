 import Image from "next/image"
 import data from "../../data/partner/section2.json"
 const {WhyPartner}=data;
export default function PartnerSection2() {
  return (
 <div>
        <h2 className="text-4xl">Why Partner</h2>
        <div className="flex">
            <div>
            {WhyPartner.map((partner,i)=>(
                <div key={i}>
        <Image src={partner.image} alt={partner.alt} width={40} height={40}></Image>
        <h5 className="text-2xl">{partner.title}</h5>
        <p>{partner.para}</p>
        </div>
        ))}
        </div>
        <div>
            <Image src="/images/64a1b5d68197ea4c438e9782_our-firm-story-image-architectr-x-webflow-template-p-800.jpg.png" alt="img" width={500} height={500}></Image>
        </div>
        </div>
     </div>
       )
}