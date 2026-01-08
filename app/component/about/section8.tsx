import { Button } from "@/components/ui/button"
import data from "../../data/about/section8.json"
import Image from "next/image"
const {MakesYou}=data
export default function AboutSection8(){
    return(
        <>
        <div>
 <div>
    {MakesYou.map((makes,i)=>(
        <div key={i}>
    <h6 className="text-sm">{makes.text}</h6>
    <h2 className="text-4xl">{makes.head}</h2>
    <p>{makes.para}</p>
    </div>

    ))}
    <Button>Learn More</Button>
 </div>
 <div>
    <Image src="/images/Group 221.png" alt="" width={400} height={400}></Image>
 </div>
        </div>
        </>
    )
}