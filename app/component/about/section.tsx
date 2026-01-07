import Image from "next/image"
export default function AboutSection1(){
    return(
        <>
        <div>
            <div  style={{backgroundImage:"url('/images/Group 1000003319.png')", width:"1200px", height:"400px", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
        <h2 className="text-white text-4xl text-bold">About Us</h2>
        <Image src="/images/Group 224.png" alt="check" width={30} height={30}></Image>
        </div>
        </div>
        </>
    )
}