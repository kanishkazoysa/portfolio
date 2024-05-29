import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradeintBg";
import  GlobeDemo  from "./GridGlobe";
// import { useState } from "react";


// Also install this npm i --save-dev @types/react-lottie





// import { BackgroundGradientAnimation } from "./GradientBg";
// import GridGlobe from "./GridGlobe";
// import animationData from "@/data/confetti.json";
// import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // const leftLists = ["ReactJS", "Express", "Typescript"];
  // const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  // const [copied, setCopied] = useState(false);

  // const defaultOptions = {
  //   loop: copied,
  //   autoplay: copied,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  // const handleCopy = () => {
  //   const text = "hsu@jsmastery.pro";
  //   navigator.clipboard.writeText(text);
  //   setCopied(true);
  // };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden  rounded-3xl border border-transparent dark:border-white/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black bg-white  justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={`${id === 6} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex 
              items-center justify-center text-white 
              font-bold"  />
          </BackgroundGradientAnimation>
        )}
      </div>

      <div
        className={cn(
          titleClassName,
          "group-hover/ bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        <div
          className={`font-sans text-lg lg:text-2xl max-w-96 font-bold z-10`}
        >
          {title}
        </div>
      </div>

{id=== 2 && <GlobeDemo />}

{id === 3 && (
  <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
    <div className="flex flex-col gap-3 lg:gap-8">
      {['React.js', 'Next.js', 'TypeScript'].map((item) => (
<span key={item} className="py-2 ">
  {item}
</span>
      ))}
      </div>
    </div>
) }
    </div>
  )
};