"use client";
import Image from "next/image";
import pic from "../../../../public/about.jpg.webp"
import pic1 from "../../../../public/1709152804915.jpeg";
import pic2 from "../../../../public/1712789639976.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Clients({ deviceType }: { deviceType: string }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="pt-10 px-5 md:pt-28 md:px-28">
      <div>
        <h2 className="text-xl text-center md:text-2xl font-bold tracking-wide">
          WHAT MY CLIENTS ARE SAYING
        </h2>
      </div>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={1000}
      >
        <div className="w-full max-w-sm border-2 border-t-0 border-l-0 border-teal-500 border-r-0 p-5 flex gap-4 mx-auto mt-8 md:w-[500px]">
          <Image
            src={pic}
            alt="image"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[150px] md:h-[150px] rounded-full"
          />
          <p className="text-sm sm:text-base md:text-lg">
            Highly skilled frontend developer with a keen eye for detail and a strong grasp of modern web technologies. Delivers clean, effective designs every time! <br />
            <span className="text-sm sm:text-base md:text-lg text-blue-500 font-bold">
              JOHN D.
            </span>
          </p>
        </div>
        <div className="w-full max-w-sm border-2 border-t-0 border-l-0 border-teal-500 border-r-0 p-5 flex gap-4 mx-auto mt-8 md:w-[500px]">
          <Image
            src={pic1}
            alt="image"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px] rounded-full"
          />
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nam culpa repudiandae modi iusto sequi accusamus similique repellendus tempora. <br />
            <span className="text-sm sm:text-base md:text-lg text-blue-500 font-bold">
              JOHN D.
            </span>
          </p>
        </div>
        <div className="w-full max-w-sm border-2 border-t-0 border-l-0 border-teal-500 border-r-0 p-5 flex gap-4 mx-auto mt-8 md:w-[500px]">
          <Image
            src={pic2}
            alt="image"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[150px] md:h-[150px] rounded-full"
          />
          <p className="text-sm sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore esse voluptates hic reprehenderit ratione nulla at recusandae ut in enim. <br />
            <span className="text-sm sm:text-base md:text-lg text-blue-500 font-bold">
              JOHN D.
            </span>
          </p>
        </div>
        <div className="w-full max-w-sm border-2 border-t-0 border-l-0 border-teal-500 border-r-0 p-5 flex gap-4 mx-auto mt-8 md:w-[500px]">
          <Image
            src={pic}
            alt="image"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[150px] md:h-[150px] rounded-full"
          />
          <p className="text-sm sm:text-base md:text-lg">
            Highly skilled frontend developer with a keen eye for detail and a strong grasp of modern web technologies. Delivers clean, effective designs every time! <br />
            <span className="text-sm sm:text-base md:text-lg text-blue-500 font-bold">
              JOHN D.
            </span>
          </p>
        </div>
      </Carousel>
    </section>
  );
}
export default Clients;
