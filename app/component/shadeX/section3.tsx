 import Image from "next/image"

 import data from "../../data/shadeX/section3.json"
 const {ExpectMore}=data;
 export default function ShadeSection3(){
    return(
 <div className="flex">
            <div>
                <Image src="/images/Group 1000003303.png" alt="imgg" width={500} height={500}></Image>
            </div>
            <div className="p-6">
                {ExpectMore.map((expect,i)=>(
                    <div key={i}>
          <Image src={expect.Image} alt={expect.alt} width={13} height={13}></Image>
          <h6>{expect.title}</h6>
          </div>
                ))}
                
            </div>
        </div>
            )
}