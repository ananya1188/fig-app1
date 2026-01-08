import Image from "next/image"
export default function PartnerSection() {
  return (
    <div style={{  backgroundImage: "url('/images/Group 1000003301.png')", height: "500px",   backgroundSize: "cover",  backgroundPosition: "center", }}>
      <div>
        <Image src="/images/Frame.png" alt="frame" width={200} height={200}></Image>
        <h2 className="text-white text-4xl text-center">Become a Partner</h2>
        <p>Contractors, architects, pool builders, homebuilders, retailers, franchisees, and dealers… We want to work with you to expand your offerings and grow your business.</p>
      </div>
   
    </div>
  )
}
