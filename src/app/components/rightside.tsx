
import Image from "next/image";
import image from "../../../public/main_photo.jpg";
import Menuu from "./sheet";



function Hero (){
    return(
        <section>
          <Menuu/>


<div className="bg-black p-10  md:p-[100px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  <div className="flex justify-center">
    <Image
      src={image}
      alt="pic"
      width={400}
      height={400}
      className="rounded-full border-2 border-black max-w-[80%] sm:max-w-[60%] md:max-w-full"
    />
  </div>
  <div className="text-center md:text-left">
    <h1 className="text-white text-[30px] md:text-[40px]">
      Hi, I am a{" "}
      <span className="text-[#06b3f7] font-bold">
        Frontend Web-Developer
      </span>
    </h1>
    <p className="text-white text-[18px] md:text-[24px]">
      Passionate frontend developer turning ideas into sleek, responsive websites with modern tools like Next.js and Tailwind CSS.
    </p>
  </div>
  </div>            
        </section>

    )
}
export default Hero;