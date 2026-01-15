import Image from "next/image"
import data from "../../data/gallery/section5.json"
const {OurFinestWork5}=data
export default function GallerySection5(){
    return(
        <>
        <div className="mt-10 flex">
            {OurFinestWork5.map((FinestWork,i)=>(
                <div key={i}>
  <Image src={FinestWork.image} alt={FinestWork.alt} width={400} height={400}></Image>
                </div>
            ))}
          
        </div>
        </>
    )
}