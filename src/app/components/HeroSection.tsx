import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-borde";

const HeroSection = () => {
  return (
    <div className="h-auto w-full md:h-[40rem] flex rounded-md
    items-center justify-center relative overflow-hidden mx-auto py-10 md:py-2">
       <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      
      <div className="w-full p-4 text-center relative z-10">
        <h1 className="text-4xl capitalize md:text-7xl mt-20 md:mt-0 font-bold 
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2">
          Master the art of the Music
          </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 
        max-w-lg mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae a commodi aperiam accusantium blanditiis temporibus odit voluptas maiores facilis consequuntur, omnis fuga voluptatem aut quis!</p>
        <div className="mt-4">
          <Link href={"/courses"}>
          <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore Courses
         </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
