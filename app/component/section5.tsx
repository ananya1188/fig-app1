import Image from "next/image";

export default function Section5() {
  return (
    <section>
     <Image src="/images/Border (3).png" alt="five" width={40} height={40}></Image>
      <h2 className="text-4xl font-bold mb-10">
        Don't take our word, take theirs
      </h2>

      <div>
        {/* slide button previous */}
        <button>
             <Image src="/images/Button - previous slide.png" alt="Previous slide"  width={70} height={30}/>
        </button>

        <div>

          {/* background image 1 */}
          <div className="bg1"  style={{  backgroundImage: "url(/images/Container2.png)",  height: "500px",  width: "500px",  backgroundSize: "cover", backgroundPosition: "center", }}  />
        {/* contant */}
          <div>
            <h2 className="text-3xl font-semibold mb-4"> Our garden looks amazing thanks to you </h2>
            <p className="mb-6">We love our new shade structure. Sean and his crew at ShadePlus  were incredible. Construction was perfectly planned and  performed exactly as we were told. Their professionalism and  dedication to making us happy went over the top... </p>
            <div className="flex items-center gap-4">
              <p>Jeff Black</p>
              <span className="blank"/>
              <p>Phoenix, AZ</p>
            </div>
          </div>

          {/* background image 2 */}
          <div className="bg2" style={{ backgroundImage:"url(/images/649dfc4c1c6bb70aa8f6dcd9_testimonial-right-image-architectr-x-webflow-template.svg.png)", height: "500px", width: "500px",   backgroundRepeat: "no-repeat"}}/>
        </div>
        {/* slide button next */}
        <button>
          <Image src="/images/Button - next slide.png"  alt="Next slide"  width={70} height={30} />
        </button>

      </div>
    </section>
  );
}

  