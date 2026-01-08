import Image from "next/image"
export default function SingleProductSection(){
    return(
        <>
            <div style={{backgroundImage:"url('/images/Container.png')", width:"1200px", height:"300px"}} >
           <div className="text-center text-white">
            <h2 className="text-4xl">ARKA Power Gazebo</h2>
            <p>The ARKA Power Gazebo adds a luxury oasis to your yard white providing energy savings to your home.</p>
            </div>
            <div>
                <Image src="/images/Group 224.png" alt="check" width={50} height={50}></Image>
            </div>
            </div>
        
        </>
    )
}