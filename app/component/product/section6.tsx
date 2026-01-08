import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function ProductSection6(){
    return(
        <>
        <div className="flex">
        <div>
            <h2 className="text-2xl">Custom Builds</h2>
            <p>Need something for your commercial project or custom home that you don't see here? He have a full-service fabrication shop to build exactly what you envision..</p>
        
        <Button>Learn More</Button>
        </div>
         <div>
      <Image src="/images/Container243.png" alt="shade" width={500} height={500}></Image>
        </div>
        </div>
        
        </>
    )
}