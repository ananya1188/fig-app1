import Image from "next/image"
import data from "../../data/products/section5.json"
const {PatioProducts}=data
export default function ProductSection5(){
    return(
        <>
        <div>
            <h2 className="text-4xl mt-10">Patio Products</h2>
            <div className="flex flex-wrap">
                {PatioProducts.map((PatioProduct,i)=>(
                    <div key={i} >
           <Image src={PatioProduct.image} alt={PatioProduct.alt} width={400} height={400}></Image>
           <h2 className="text-2xl">{PatioProduct.title}</h2>
           <p>{PatioProduct.para}</p>
                    </div>
                ))}
                
            </div>
        </div>
        </>
    )
}