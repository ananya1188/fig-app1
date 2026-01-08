import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function ProductSection3(){
    return(
        <>
        <div className="flex">
        <div>
            <h2 className="text-2xl">ARKA Power Gazebo</h2>
            <p>A full-solar patio cover that pays for itself while powering your home. Solid steel construction for a luxury look and fantastic function.</p>
        <Button>Learn More</Button>
        </div>
         <div>
      <Image src="/images/Group 270.png" alt="shade" width={500} height={500}></Image>
        </div>
        </div>
        
        </>
    )
}