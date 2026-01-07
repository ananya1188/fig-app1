import { Button } from "@/components/ui/button";
import Image from "next/image"
export default function AboutSection5(){
    return(
        <>
        <div className="flex">
        <div>
            <h2 className="text-2xl">25+ Years of Shade Innovation: Our Journey at ShadePlus</h2>
            <p>ShadePlus has been designing and building unique shade structures for over 25 years. It started as a labor of love with our parent company. Years later that passion morphed into a new division with a singular focus to provide the best shade solutions, plus accessory pro</p>
       <Button> Call for a Quote</Button>
        </div>
        <div>
            <Image src="/images/Container34.png" alt="shadeplus" width={900} height={900}></Image>
        </div>
        </div>
        </>
    )
}