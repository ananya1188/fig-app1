import Image from "next/image"
import data from "../../data/gallery/section4.json"
const {OurFinestWork3}=data
export default function GallerySection4(){
    return(
        <>
        <div className="mt-10 flex">
            {OurFinestWork3.map((FinestWork,i)=>(
                <div key={i}>
  <Image src={FinestWork.image} alt={FinestWork.alt} width={400} height={400}></Image>
                </div>
            ))}
          
        </div>
        </>
    )
}