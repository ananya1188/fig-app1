import Image from "next/image"
import {Button} from "../../../components/ui/button"
export default function AboutSection2(){
    return(
        <>
        <div className="flex">
            <div>
                <Image src="/images/Container21.png" alt="shade" width={1200} height={1200}></Image>
            </div>
            <div>
                <h2 className="text-4xl">Everything Shade,PlusSome</h2>
                <p>Our passion is fulfilled when we help our clients truly enjoy the beauty of the outdoors. In a world that's increasingly going inside, there are those who demand the benefits of peace, joy, and fullness of life that only outside sanctuaries can provide. We aim to meet those demands with best-in-class shade solutions.</p>
           <Button>Call for a Quote</Button>
            </div>
        </div> 
        </>
    )
}