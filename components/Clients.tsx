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
  { icon: "/node.png", name: "NodeJs" },
  { icon: "/mongoDb.png", name: "MongoDB" },
  { icon: "/cloud.svg", name: "React" },
  // Add more tech stack icons as needed
];

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Tech Stack</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techStackIcons}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
