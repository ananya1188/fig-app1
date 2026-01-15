import Image from "next/image"
import data from "../../data/gallery/section3.json"
const {OurFinestWork2}=data
export default function GallerySection3(){
    return(
        <>
        <div className="mt-10 flex">
            {OurFinestWork2.map((FinestWork,i)=>(
                <div key={i}>
  <Image src={FinestWork.image} alt={FinestWork.alt} width={400} height={400}></Image>
                </div>
            ))}
          
        </div>
        </>
    )
}