import Image from "next/image";
import gig from "../../../public/kaus-UI.gif"
import gif from "../../../public/betterme-web.gif"
import gif3 from "../../../public/Website-Development-2.gif"
import Link from "next/link";


function Projects (){
    return(
        <section id="work">
            <div className="pt-20 p-12 text-center md:text-left">
                <h3 className="text-lg text-gray-400 tracking-widest font-serif">MY WORK</h3>
                <h1 className="text-lg sm:text-[30px] text-black tracking-widest font-serif pt-2 pl-3">RECENT WORK</h1>
                </div>

                <div className="font-serif grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <Link href="https://e-commerce-website-ten-opal.vercel.app">
                        <Image
                        src={gig}
                        alt="gif-img"
                        className="w-[400px] mix-blend-multiply"/>
                        </Link>
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg sm:text-[30px] text-green-500 tracking-widest font-sans font-bold">E-COMMERCE WEBSITE</h2>
                        <p className="text-lg sm:text-[28px] tracking-wider font-sans text-gray-400 pb-3">This project is a modern e-commerce website UI designed using Next.js and Tailwind CSS. </p>
                        
                    </div>
                </div>
                {/* 2nd project */}
                <div className="font-serif grid grid-cols-1 md:grid-cols-2">

                <div>
                    <Link href="https://taiwind-css-website.vercel.app">
                        <Image
                        src={gif}
                        alt="gif-img"
                        className="w-[400px] mix-blend-multiply"/>
                        </Link>
                    </div>
                    
                    <div className="p-5">
                        <h2 className="text-lg sm:text-[30px] text-yellow-500 tracking-widest font-sans font-bold">GLINT WEBSITE </h2>
                        <p className="text-lg sm:text-[28px] tracking-wider font-sans text-gray-400 pb-3">A responsive and modern website built with Next.js and Tailwind CSS. This project showcases a sleek frontend design with optimized performance and smooth user interactions. </p>
                     </div>
                   
                </div>
                {/* 3rd -project */}

                <div className="font-serif grid grid-cols-1 md:grid-cols-2">

                <div>
                    <Link href="https://frontend-project-three-black.vercel.app">
                        <Image
                        src={gif3}
                        alt="gif-img"
                        className="w-[400px] mix-blend-multiply rounded-2xl"/>
                        </Link>
                    </div>
                    
                    <div className="p-5">
                        <h2 className="text-lg sm:text-[30px] text-blue-500 tracking-widest font-sans font-bold">Single-Page-Website </h2>
                        <p className="text-lg sm:text-[28px] tracking-wider font-sans text-gray-400 pb-3">A responsive and modern website built with Next.js and Tailwind CSS. This project showcases a sleek frontend design with optimized performance and smooth user interactions. </p>
                     </div>
                   
                </div>
        </section>
        
    )
}
export default Projects;