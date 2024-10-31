import { Lightbulb,Database,SquareCode } from "lucide-react";



const cardData =[
    {icons:<Lightbulb size={48} className="text-white bg-[#055178] rounded-full p-2 mx-auto" />,heading:"Innovative Ideas",p:"Separated they live in Bookmarksgrove right at the coast of the Semantics" },
    {icons:<Database size={48} className="text-white bg-[#088178] rounded-full p-2 mx-auto" />,heading:"Software",p:"Separated they live in Bookmarksgrove right at the coast of the Semantics" },
    {icons:<SquareCode size={48} className="text-white bg-yellow-400 rounded-full p-2 mx-auto" />,heading:"Developer",p:"Separated they live in Bookmarksgrove right at the coast of the Semantics" }
    
]


function Services (){
    return(
        <section id="services" className="pt-[100px]">
            <div className="p-5">
                <h2 className="text-[20px] font-serif tracking-widest">WHAT I DO </h2>
                <h1 className="text-[24px] sm:text-[30px] text-[#454545] font-serif tracking-widest pt-2">HERE ARE SOME MY <br /> EXPERTISE</h1>
            </div>
           {/* cards div start */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">
                    {cardData.map((i,index)=>(
                        <div
                        key={index}
                        className="w-[255px] h-[230px] border-2 p-5 rounded-xl font-sans tracking-wider text-center border-t-0 border-l-0 border-r-2 border-b-2 border-black">
                          {i.icons}

                        <h1 className="text-[22px] text-black font-semibold">{i.heading}</h1>
                        <p className="text-lg text-black"> {i.p} </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>

    )
}
export default Services;