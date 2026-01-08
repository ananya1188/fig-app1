import { Button } from "@/components/ui/button";
import Image from "next/image"
export default function SingleProductSection6(){
    return(
        <>
        <div className="flex">
        <div>
            <h2 className="text-3xl">Visit the ARKA Website to Discover All that a Solar Power Gazebo Can Do to Improve Your Lifestyle.</h2>
       <Button>Call for a Quote</Button>
        </div>
        <div>
            <Image src="/images/Container2123.png" alt="ARKA" width={500} height={500}></Image>
        </div>
        </div>
        </>
    )
}