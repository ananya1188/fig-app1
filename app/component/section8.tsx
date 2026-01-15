import Image from "next/image"
import data from "../data/section8.json"
const {galleryimages}= data;
export default function Section8(){
    return(
        <>
        <div>
           <Image src="/images/Border (6).png" alt="eight" width={40} height={40}></Image>
            <h5>Gallery</h5>
            <div>
            <h2>A Gallery of Our Finest Work</h2>
            <div>
                {galleryimages.map((galleryimage,i)=>(
                    <div key={i}>
          <Image src={galleryimage.Image} alt={galleryimage.alt} width={200} height={100}></Image>
              
                        </div>
                ))}
           
           
        </div>
        </div>
        </div>
        </>
    )
}