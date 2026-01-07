import Image from "next/image"
import data from "../../data/shadeX/section4.json"
const {AttentionToDetail}=data
export default function ShadeSection4(){
    return(
        <>
        <div>
            <h3>Attention To Detail</h3>
            <div>
                |{AttentionToDetail.map((detail,i)=>(
                    <div key={i}>
                <Image src={detail.Image} alt={detail.alt} width={200} height={200}></Image>
                <div>
                <h4 className="text-xl">{detail.title}</h4>
                <h5>{detail.subtitle}</h5>
                </div>
                </div>
                  ))}
                
            </div>
        </div>
        </>
    )
}
