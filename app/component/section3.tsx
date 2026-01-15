import Image from "next/image";
import {Button} from "../../components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import data from "../data/section3.json"
  import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const {products,accordions}=data
export default function Section3() {
  return (
    <>
    <div>
      <Image src="/images/Border (1).png" alt="three"width={40} height={40}></Image>
      <h5>product</h5>
      <div>
        <Image src="/images/Frame.png" alt="Frame" width={300} height={200} />

      </div>
       <h3> Extruded Aluminum Pergola System </h3>
       <div className="bgrnd-image">
      <div>
        {/* card */}
     <Card className="w-full max-w-sm">
        {products.map((product,i)=>(
            <div key={i}>
  <Image src={product.image}  alt={product.alt}  width={300} height={300} className="rounded-t-lg"/>
      <CardContent className="text-center">
        <h2 className="text-2xl">{product.title}</h2>
        <h6>{product.subtitle}</h6>
        <Button className="mt-4">{product.button}</Button>
      </CardContent>
            </div>
        ))}
    
    </Card>
      </div>
      </div>
      <div>
    <Accordion type="single" collapsible  className="w-full"  defaultValue="items" >
        {accordions.map((accordion,indexx)=>(
            <div key={indexx}>
    <AccordionItem value="items">
        <AccordionTrigger>{accordion.trigger}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
         {accordion.para}
          </p>
        </AccordionContent>
      </AccordionItem>
      </div>
      
        ))}

    </Accordion>


      </div>
      
    </div>
    </>
  );
}
