import Image from "next/image"
import data from "../../data/shadeX/section5.json"
const {TwoLouveredOption}=data;
export default function ShadeSection5(){
    return(
        <>
        <div>
        <div>
            <h3 className="text-4xl">One Product with Two Louvered Options</h3>
            <p>Whether you need a small and simple shade structure or an elaborate and exquisite outdoor living space, the ShadeX system will exceed your demands.</p>
        </div>
        <div>
            {TwoLouveredOption.map((LouveredOption,i)=>(
                <div key={i}>
                     <Image src={LouveredOption.Image} alt={LouveredOption.alt} width={500} height={500}></Image>
                     <div>
                        <h2 className="text-3xl">{LouveredOption.title}</h2>
                        <p>{LouveredOption.para}</p>
                     </div>
                     <div>
                        <div>
                        <h6 className="text-xl">{LouveredOption.color}</h6>
                        <p>{LouveredOption.ColorValue}</p>
                        </div>
                        <div>
                        <h6 className="text-xl">{LouveredOption.size}</h6>
                        <p>{LouveredOption.SizeValue}</p>
                        <div>
                            <Image src= {LouveredOption.imageMan} alt={LouveredOption.alt} width={60} height={60}></Image>
                        </div>
                        </div>
                     </div>
                </div>
            ))}
           
        </div>
        </div>
        </>
    )
}