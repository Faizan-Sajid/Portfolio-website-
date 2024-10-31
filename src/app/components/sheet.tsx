import Link from "next/link";

import pic from "../../../public/pic.jpg"
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu  } from "lucide-react";




const navItems = [
  { href: "./", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
  ];


function Menuu (){
    return(
      <div>

<div className="md:hidden bg-black">
        <Sheet>
          <SheetTrigger className="text-yellow-400 ">
          <Menu size={44} />
          </SheetTrigger>
          <SheetContent>
            <div className="text-center">
              <Image
                src="/pic.jpg"
                alt="pic"
                width={150}
                height={150}
                className="rounded-full mx-auto"
              />
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
                    className="text-black font-semibold  hover:text-blue-500 pb-2"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-500">
                © Copyright ©2024 All rights reserved | This template is made
                with
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>


    </div>
    )
}
export default Menuu;