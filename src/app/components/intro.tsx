import Link from "next/link";

import pic from "../../../public/pic.jpg"
import Image from "next/image";
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
//   } from "@/components/ui/sheet";
//   import { Menu } from "lucide-react";




const navItems = [
    { href: "./", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  


function Intro (){
    return(
        <section>
            <div className="bg-gray-100 text-white h-[606px] sticky top-0 overflow-scroll hidden sm:block">
        <div className="text-center p-10">
            <Image 
            src={pic}
            alt="pic"
            width={150}
            height={150}
            className="rounded-full mx-auto"/>
         
          <h1 className="font-sans text-[20px] text-black font-bold">
            Faizan Sajid
          </h1>
          <h1 className="text-[14px] text-black">
            <span className="text-blue-500 font-semibold">
              Frontend Developer/
            </span>
            in Pakistan
          </h1>
          <ul className="font-sans p-3">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-black  font-sans font-bold tracking-widest hover:text-blue-500 pb-4"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <p className="text-lg text-gray-500">
            © Copyright ©2024 All rights reserved | This template is made with
          </p>
        </div>
      </div>
</section>

    )
}
export default Intro;