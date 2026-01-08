import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function ProductSection4(){
    return(
        <>
        <div className="flex">
        <div>
<Image src="/images/Group 268.png" alt="shade" width={500} height={500}></Image>
        </div>
        <div>
            <h2 className="text-2xl">The Shade Array</h2>
            <p>A proprietary design with beefy beams and solid steel connections for a unique structure. When only wood will do, the Shade Array does it best.</p>
        
        <Button>Learn More</Button>
        </div>
        </div>
        
        </>
    )
}