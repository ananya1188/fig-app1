
import Image from "next/image"
export default function ShadeSection() {
  return (
    <div style={{  backgroundImage: "url('/images/Group 1000003301.png')", height: "500px",   backgroundSize: "cover",  backgroundPosition: "center", }}>
      <div>
        <Image src="/images/Frame.png" alt="frame" width={200} height={200}></Image>
        <h2 className="text-white text-4xl text-center"> Louvers - Solid - Lattice </h2>
      </div>
     
    </div>
  )
}
