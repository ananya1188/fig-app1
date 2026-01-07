import data from "../../data/about/section4.json"
import Image from "next/image"
const {ModelmakesDiffrence}=data;
export default function AboutSection4(){
return(
    <>
    <div>
<div>
    <h2>The Model Makes The Difference</h2>
    <p>As Arizona's only manufacturer and installer of our own line of extruded aluminum pergolas and shade structures, our model is different. By cutting out the middlemen and focusing on product and service quality, we make attainable outdoor luxury a pleasant reality.</p>

</div>
<div className="flex">
<div>
    {ModelmakesDiffrence.map((modelMakes,i)=>(
        <div key={i}>
<Image src={modelMakes.image} alt={modelMakes.alt} width={40} height={30}></Image>
<h4>{modelMakes.title}</h4>
<p>{modelMakes.para}</p>
        </div>
    ))}

</div>
</div>
    </div>
    </>
)
}