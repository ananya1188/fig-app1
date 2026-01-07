import Image from "next/image"
import data from "../../data/shadeX/section6.json"
const {bests}= data;
export default function ShadeSection6(){
    return(
        <>
        <div>
            {bests.map((best,i)=>(
                <div key={i}>
            <h2>{best.text}</h2>
<Image src={best.image} alt={best.alt} width={80} height={80}></Image>
                </div>
            ))}
<p>When you want the best, but you have a budget to consider.</p>
        </div>
        </>
    )
}