import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import data from "../../data/contact/section4.json";

const { accordian } = data;

export default function ContactSection4() {
  return (
    <section>
        <div>
      <span className="text-muted">FAQ</span>

      <h2 className="text-3xl font-bold mt-2 mb-4">
        Frequently Asked Questions
      </h2>

      <p className="text-muted">
        A few commonly asked questions our clients ask. Feel free to reach out
        and ask anything else regarding your shade options and installation.
      </p>

<Accordion type="single" collapsible  className="w-full"  defaultValue="items" >
        {accordian.map((item,indexx)=>(
            <div key={indexx}>
    <AccordionItem value="items">
        <AccordionTrigger>{item.trigger}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
         {item.content}
          </p>
        </AccordionContent>
      </AccordionItem>
      </div>
      
        ))}

    </Accordion>
    </div>
    <div>
        <Image src="/images/Group 1000003312.png" alt="" width={600} height={600}></Image>
    </div>
    </section>
  );
}
