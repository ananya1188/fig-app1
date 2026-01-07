import Image from "next/image"
import data from "../../data/about/section3.json"
const {AboutUss}=data
export default function AboutSection3(){
    return(
        <>
        <div>
            {AboutUss.map((About,i)=>(
                <div key={i} style={{backgroundColor:"black"}}>
                     <Image src={About.image} alt={About.alt} width={40} height={40}></Image>
                     <p>{About.text}</p>
                </div>
            ))}
           
        </div>
        </>
    )
}