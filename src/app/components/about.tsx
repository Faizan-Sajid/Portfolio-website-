function About (){
    return(
        <section id="about" className="font-sans bg-[#d2d2d3] p-5">
            <div className="pb-5">
            <h2 className="text-[22px] text-black pt-10 tracking-widest">ABOUT US</h2>
            <h2 className="text-[22px] text-black pl-5 tracking-widest">WHO Am I ?</h2>
            <p className="text-[20px] tracking-wide pt-5 pl-7 font-semibold pb-4">I m Faizan Sajid, a frontend web developer who loves creating clean, responsive, and user-friendly websites. I work with tools like Next.js, Tailwind CSS, and TypeScript to bring ideas to life on the web. I m always learning new things and enjoy keeping up with the latest trends in web development to build better, more engaging experiences.</p>
            <button className="border-2 border-black p-3 rounded-lg  hover:bg-black hover:text-white font-semibold">More Details</button>
            </div>
            <div className="bg-yellow-500 p-7 rounded-lg">
                <p className="text-[20px] sm:text-[24px] font-sans tracking-wider font-semibold pb-3">I am happy to know you <br />
                that 300+ projects done sucessfully!</p>
                <button className="border-2 border-black text-black p-2 w-[100px] rounded-lg hover:bg-black hover:text-white font-semibold">HIRE ME</button>

            </div>
        </section>
    )
}
export default About;