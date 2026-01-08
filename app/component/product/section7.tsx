import Image from "next/image"
import data from "../../data/products/section7.json"
const {OtherServices}=data
export default function ProductSection7(){
    return(
        <>
        <div>
            <div className="text-center">
            <h2 className="text-4xl mt-10">Other Services</h2>
            <p>Landscape design and construction encompass shade structures and custom masonry. We collaborate closely with our clients to bridge the gap between their needs and astonishing architecture.</p>
           </div>
            <div className="flex flex-wrap">
                {OtherServices.map((OtherService,i)=>(
                    <div key={i} >
           <Image src={OtherService.image} alt={OtherService.alt} width={400} height={400}></Image>
           <h2 className="text-2xl">{OtherService.title}</h2>
           
                    </div>
                ))}
                
            </div>
        </div>
        </>
    )
}