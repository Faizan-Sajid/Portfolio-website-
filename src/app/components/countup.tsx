"use client"
import CountUp from "react-countup";
import background from "../../../public/cover_bg_1.jpg.webp"

function Countup(){
    return(
       <section className="pt-10">
        <div
        className="h-[500px] md:h-[300px] bg-no-repeat bg-cover bg-fixed grid grid-cols-1 md:grid-cols-4 p-20"
        style={{ backgroundImage: `url(${background.src}) ` }}>
           
           <div className="border-r-2 pl-5 border-blue-500">
           <CountUp start={0} end={309} duration={15} className="text-[22px] sm:text-[40px] text-[#121212] font-bold"/>
            <span className="text-[22px] sm:text-[30px] text-white block font-bold tracking-widest font-sans">Cup of <br /> Coffe</span>
            </div>
            <div className="border-r-2 pl-5 border-white">
           <CountUp start={0} end={356} duration={15} className="text-[22px] sm:text-[40px] font-bold text-"/>
            <span className="text-[22px] sm:text-[30px] text-white block font-bold tracking-widest font-sans">Projects</span>
            </div>
            <div className="border-r-2 pl-5 border-white" >
           <CountUp start={0} end={30} duration={5} className="text-[22px] sm:text-[40px] font-bold text-"/>
            <span className="text-[22px] sm:text-[30px] block text-white font-bold tracking-widest font-sans">Clients</span>
            </div>
            <div className=" pl-5 ">
           <CountUp start={0} end={10} duration={5} className="text-[22px] sm:text-[40px] font-bold text-"/>
            <span className="text-[22px] sm:text-[30px] block text-white font-bold tracking-widest font-sans">Partners</span>
            </div>
           
        </div>
        
       </section>

    )
}
export default Countup;