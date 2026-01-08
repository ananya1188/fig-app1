import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import data from "../../data/about/section9.json";

const { TheBenifits } = data;

export default function AboutSection9() {
  return (
    <section>
      {/* Heading */}
      <div className="text-center mb-8">
        <h6>Make The Decision Easy</h6>
        <h5 className="text-3xl font-semibold">The Benefits</h5>
        <p>
          Our motivation is delighting our clients. When you work with
          ShadePlus you get…
        </p>
      </div>

      {/* Cards */}
      <div>
        {TheBenifits.map((benefit, i) => (
          <Card key={i} className="p-4">
            <CardContent className="p-0 text-center">
              <Image src={benefit.image} alt={benefit.alt} width={40}  height={40} className="mx-auto mb-3" />
              <h5 className="text-lg"> {benefit.title}</h5>
              <p className="text-sm"> {benefit.para} </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
