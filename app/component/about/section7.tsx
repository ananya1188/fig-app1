import Image from "next/image"
import data from "../../data/about/section7.json"
const {TheProcess1,TheProcess2}=data;
export default function AboutSection7(){
    return(
        <>
        <div className="flex">
            {/* 1st side */}
                <div>
                    {TheProcess1.map((process1,i)=>(
                        <div key={i}>
                            <p>{process1.para}</p>
                        </div>
                    ))}
                    
                </div>
            {/* image */}
            <div>
            <Image src="/images/Group 4.png" alt="imagge" width={80} height={500}></Image>
            </div>
            {/* 2nd side */}
 <div>
         {TheProcess2.map((process1,i)=>(
                        <div key={i}>
                            <p>{process1.para}</p>
                        </div>
                    ))}
                    
                </div>
        </div>
        </>
    )
}