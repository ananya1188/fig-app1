import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function ProductSection2(){
    return(
        <>
        <div>
        <div>
            <h2 className="text-4xl">The Full Lineup</h2>
            <p>In addition to our flagship ShadeX product line, and our exclusive ARAK Power Gazebo, we've also developed a few other fan favorites for better outdoor living</p>
        </div>
        <div className="flex">
        <div>
<Image src="/images/Group 268.png" alt="shade" width={500} height={500}></Image>
        </div>
        <div>
            <h2 className="text-2xl">ShadeX</h2>
            <p>Our flagship product line with multiple options for any application. Built with an extruded aluminum frame and solid, lattice, or louvered roof options.</p>
        
        <Button>Learn More</Button>
        </div>
        </div>
        </div>
        </>
    )
}