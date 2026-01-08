import Image from "next/image";
import data from "../../data/singleProduct/section3.json";
import { Button } from "@/components/ui/button";
const { PowerGazebo } = data;
export default function SingleProductSection3() {
  return (
    <>
      <div className="mt-10">
        <div>
          <h2 className="text-4xl">Shade Your Days Light-Up Your Nights</h2>
          <p>
            ShadePlus is Arizona's premier distributor and installer of the
            nARKA Power Gazebo and Power Patio, providing a full-solar solution
            with systems up to 5kw. Now you can benefit from enjoying a luxury
            shade structure while producing power for your home. Two birds with
            one stone. PLUS, receive a 30% federal tax credit and $1,000 AZ tax
            credit of the total cost of the structure.
          </p>
        </div>
        <div className="flex">
          <div>
            <Image
              src="/images/Container33.png"
              alt="Power Gazebo"
              width={400}
              height={400}
            ></Image>
          </div>
          <div>
            <h2>Power Gazebo</h2>
            <p>
              The Power Gazebo is a freestanding structure designed to create a
              powered luxury oasis anywhere in your yard. Built with
              industry-best solar panels made to resemble real roof tiles,
              you'll enjoy the function of solar with a beautiful aesthetic.
            </p>
            <div>
              {PowerGazebo.map((power, i) => (
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
        </div>
      </div>
    </>
  );
}
