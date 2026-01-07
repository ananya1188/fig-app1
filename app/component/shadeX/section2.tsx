import Image from "next/image"
import {Button} from "../../../components/ui/button"


export default function ShadeSection2(){
    return(
        <>
        
            <div className="flex">
        <div>
<h3 className="text-3xl">Expect More</h3>
<p>A complete shade system designed and made in the USA The apex of structural integrity, modern luxury, and affordability. More options, more confidence, more of what you want.</p>
        <Button>Call for a Quote </Button>
        </div>
        <div>
            <Image src="/images/Group 1000003302.png" alt="imgg" width={500} height={500}></Image>
        </div>
        </div>
       
        
        </>
    )
}