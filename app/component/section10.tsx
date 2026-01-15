import {Button} from "../../components/ui/button"
import Image from "next/image"
export default function Section10(){
    return(
        <>
        <div>
            <Image src="/images/Border (8).png" alt="ten" width={40} height={40}></Image>
            <h5>Download Our Brochure</h5>
            <div>
                <div className="bggrnd" style={{backgroundImage:"url('/images/Container345.png')", height:"600px", width:"1200px"}}>
                <h2 className="text-white text-4xl">Shades structures and more. Download our products brochure.</h2>
                <Button>Download Our Brochure</Button>
                </div>
            </div>
        </div>
        </>
    )
}