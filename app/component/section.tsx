import { Button } from "../../components/ui/button"
export default function Section() {
  return (
    <div style={{  backgroundImage: "url('/images/Group 1000003294.png')", height: "500px",   backgroundSize: "cover",  backgroundPosition: "center", }}>
      <div className="text-white">
        <h1 className="text-4xl font-bold mb-4">Elevate Your Outdoor Space with Better Shade</h1>
        <p> Discover the perfect blend of style and function for your backyard with our custom pergolas and shade solutions. Stunning designs, myriad options, and unequaled service. When only the best will do... but you have a budget to consider. </p>
      </div>
      <div>
      <Button>Call for a Quote</Button>
      </div>
      <div>
        <Button>Download for Brochure</Button>
      </div>
    </div>
  )
}
