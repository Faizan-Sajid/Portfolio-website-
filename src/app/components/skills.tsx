import { Slider } from "@/components/ui/slider";


function Skill() {
  return (
    <section>
      <div id="skills" className="font-serif p-6">
        <h3 className="text-[16px] text-gray-400 tracking-widest pb-4">
          MY SPECIALTY
        </h3>
        <h3 className="text-[30px] text-black tracking-widest font-bold">
          MY SKILLS
        </h3>
        <p className="text-[20px] font-sans tracking-wider pb-5">
          As a frontend developer, I specialize in creating visually appealing
          and user-friendly web interfaces. My skills include HTML, CSS, and
          JavaScript, along with frameworks like React and Next.js. I focus on
          responsive design to ensure websites look great on all devices. I also
          use tools like Tailwind CSS for styling and libraries like react-slick
          to enhance functionality. My goal is to blend creativity with code to
          build seamless digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8 max-w-screen-lg mx-auto">
        <div className="font-serif flex flex-col items-start space-y-2">
          <div className="flex justify-between w-full">
            <span className="text-[22px] sm:text-[26px] tracking-widest text-green-500 font-bold">
              HTML
            </span>
            <span className="font-sans font-bold text-green-500">90%</span>
          </div>
          <Slider
            defaultValue={[85]}
            max={100}
            step={1}
            disabled
            className="w-full bg-green-500"
          />
        </div>

        <div className="font-serif flex flex-col items-start space-y-2">
          <div className="flex justify-between w-full">
            <span className="text-[22px] sm:text-[26px] tracking-widest text-blue-500 font-bold">
              CSS
            </span>
            <span className="font-sans font-bold text-blue-500">90%</span>
          </div>
          <Slider
            defaultValue={[80]}
            max={100}
            step={1}
            disabled
            className="w-full bg-blue-500"
          />
        </div>

        <div className="font-serif flex flex-col items-start space-y-2">
          <div className="flex justify-between w-full">
            <span className="text-[20px] sm:text-[22px] tracking-widest text-yellow-500 font-bold">
              JAVA-SCRIPT
            </span>
            <span className="font-sans font-bold text-yellow-500">80%</span>
          </div>
          <Slider
            defaultValue={[80]}
            max={100}
            step={1}
            disabled
            className="w-full bg-yellow-500"
          />
        </div>

        <div className="font-serif flex flex-col items-start space-y-2">
          <div className="flex justify-between w-full">
            <span className="text-[20px] sm:text-[22px] tracking-widest text-teal-500 font-bold">
              TAILWIND-CSS
            </span>
            <span className="font-sans font-bold text-teal-500">75%</span>
          </div>
          <Slider
            defaultValue={[75]}
            max={100}
            step={1}
            disabled
            className="w-full bg-teal-500"
          />
        </div>

        <div className="font-serif flex flex-col items-start space-y-2">
          <div className="flex justify-between w-full">
            <span className="text-[20px] sm:text-[22px] tracking-widest text-red-500 font-bold">
              REACT-JS
            </span>
            <span className="font-sans font-bold text-red-500">70%</span>
          </div>
          <Slider
            defaultValue={[65]}
            max={100}
            step={1}
            disabled
            className="w-full bg-red-500"
          />
        </div>

        <div className="font-serif flex flex-col items-start space-y-2">
          <div className="flex justify-between w-full">
            <span className="text-[20px] sm:text-[22px] tracking-widest text-purple-500 font-bold">
              NEXT-JS
            </span>
            <span className="font-sans font-bold text-purple-500">70%</span>
          </div>
          <Slider
            defaultValue={[65]}
            max={100}
            step={1}
            disabled
            className="w-full bg-purple-500"
          />
        </div>
      </div>
    </section>
  );
}
export default Skill;
