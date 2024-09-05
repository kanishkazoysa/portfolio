"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: string; // Use icons for your tech stack
    name: string; // Display the name below the icon
  }[];
  direction?: "left" | "right";
  speed?: "very-fast" | "fast" | "normal" | "slow" | "very-slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate the content to make it scroll as two rows
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      switch (speed) {
        case "very-fast":
          containerRef.current.style.setProperty("--animation-duration", "20s");
          break;
        case "fast":
          containerRef.current.style.setProperty("--animation-duration", "40s");
          break;
        case "normal":
          containerRef.current.style.setProperty("--animation-duration", "60s");
          break;
        case "slow":
          containerRef.current.style.setProperty("--animation-duration", "80s");
          break;
        case "very-slow":
          containerRef.current.style.setProperty("--animation-duration", "200s");
          break;
        default:
          containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden mx-auto", // Modified width to 100% and center the section
        className
      )}
      style={{ maxWidth: "1400px" }} // Reduced maxWidth to 800px for a narrower section
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-wrap gap-7 py-4 w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ display: "flex", flexWrap: "wrap", maxHeight: "210px" }} // Added maxHeight to control rows
      >
        {items.concat(items).map((item, idx) => (
          <li
            key={idx}
            className="w-[120px] h-[120px] flex-shrink-0 relative rounded-lg border border-slate-800 p-2 flex flex-col items-center justify-center"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <img src={item.icon} alt={item.name} className="w-20 h-20 mb-2" />
            <span className="text-sm text-white text-center">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
