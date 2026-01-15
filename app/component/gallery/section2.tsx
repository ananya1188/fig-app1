import Image from "next/image"
import data from "../../data/gallery/section2.json"
const {OurFinestWork1}=data
export default function GallerySection2(){
    return(
        <>
        <div className="mt-10 flex">
            {OurFinestWork1.map((FinestWork,i)=>(
                <div key={i}>
  <Image src={FinestWork.image} alt={FinestWork.alt} width={400} height={400}></Image>
                </div>
            ))}
          
        </div>
        </>
    )
}