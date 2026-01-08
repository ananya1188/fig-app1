import Image from "next/image";
import data from "../../data/singleProduct/section4.json";
import { Button } from "@/components/ui/button";
const { PowerPatio } = data;
export default function SingleProductSection4() {
  return (
    <>
      <div className="mt-10 flex">
        <div>
          <h2>Power Gazebo</h2>
          <p>
            The Power Gazebo is a freestanding structure designed to create a
            powered luxury oasis anywhere in your yard. Built with industry-best
            solar panels made to resemble real roof tiles, you'll enjoy the
            function of solar with a beautiful aesthetic.
          </p>
          <div>
            {PowerPatio.map((power, i) => (
              <div key={i}>
                <Image
                  src={power.image}
                  alt={power.alt}
                  width={15}
                  height={15}
                ></Image>
                <h5>{power.text}</h5>
              </div>
            ))}
          </div>
          <Button>Call for a Quote</Button>
        </div>
        <div>
          <Image
            src="/images/Container348.png"
            alt="Power Patio"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </>
  );
}
