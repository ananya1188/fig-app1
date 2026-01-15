import Image from "next/image"
import data from "../data/section7.json"
const {WhoWeAre}=data;
export default function Section7(){
    return(
        <>
        <div>
       <Image src="/images/Border (5).png" alt="seven" width={40} height={40}></Image>
        <h5>Who we are</h5>
        <div className="text-white">
<h2>The Model Makes The Difference</h2>
<p>As Arizona's only manufacturer and installer of our own line of extruded aluminum pergolas and shade structures, our model is different. By cutting out the middlemen and focusing on product and service quality, we make attainable outdoor luxury a pleasant reality.</p>
        </div>
        <div className="flex">
            {WhoWeAre.map((weAre,i)=>(
                <div key={i}>
<Image src={weAre.Image} alt ={weAre.alt} width={40} height={40}></Image>
<h5 className="text-2xl">{weAre.title}</h5>
<p>{weAre.para}</p>
</div>
            ))}
            
        </div>
        </div>
        </>
    )
}