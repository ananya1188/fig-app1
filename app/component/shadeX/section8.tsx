import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "../../data/shadeX/section8.json";

const { OptionsUpgrades } = data;

export default function ShadeSection8() {
  return (
    <section className="py-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">Options & Upgrades</h2>
        <p className="text-muted-foreground mt-2">
          Make it your own with exceptional add-ons and customizations
        </p>
      </div>

      {/* Cards */}
      <div className="flex">
        {OptionsUpgrades.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image src={item.image} alt={item.title} width={200} height={200}/>
            </CardHeader>
<div>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">
                {item.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground"> {item.para} </p>
            </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
