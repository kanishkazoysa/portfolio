"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const techStackIcons = [
  { icon: "/react.png", name: "React" },
  { icon: "/git.svg", name: "GitHub" },
  { icon: "/react.png", name: "ReactNative" },
  { icon: "/js.png", name: "JavaScript" },
  { icon: "/ts.png", name: "TypeScript" },
  { icon: "/java.png", name: "Java" },
  { icon: "/c.png", name: "C" },
  { icon: "/c1.png", name: "C#" },
  { icon: "/nodejs.png", name: "NodeJs" },
  { icon: "/mongoDb.png", name: "MongoDB" },
  { icon: "/nextjs.png", name: "NexJs" },
  { icon: "/azure.png", name: "Azure" },
  { icon: "/aws.png", name: "Aws" },
  { icon: "/docker.png", name: "Docker" },
  { icon: "/net.png", name: ".NET" },
  { icon: "/postgresql.png", name: "Postgre SQL" },
  { icon: "/mysql.png", name: "MySQL" },
  { icon: "/css.png", name: "CSS" },
  { icon: "/tailwind.png", name: "Tailwind" },
  { icon: "/wordpress.png", name: "WordPress" },
  { icon: "/expo.png", name: "EXPO" },
  { icon: "/visual-studio.png", name: "Visual-Studio" },
  { icon: "/threejs.png", name: "ThreeJs" },
  { icon: "/vite.png", name: "VITE" },
  { icon: "/appwrite.png", name: "AppWrite" },
  { icon: "/arduino.png", name: "Arduino" },
  { icon: "/GCP.png", name: "Google Cloud" },
  { icon: "/html.png", name: "HTML" },
  // Add more tech stack icons as needed
];

const TechStack = () => {
  return (
    <section className="py-10">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[40vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techStackIcons}
            direction="right"
            speed="very-slow"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;
