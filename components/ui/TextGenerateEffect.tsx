"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let linesArray = words.split("\n");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderLines = () => {
    return (
      <motion.div ref={scope}>
        {linesArray.map((line, lineIdx) => (
          <div key={lineIdx}>
            {line.split(" ").map((word, wordIdx) => (
              <motion.span
                key={word + wordIdx}
                className={`${wordIdx > 2 ? 'text-purple' : 'dark:text-white text-black'} opacity-0`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderLines()}
        </div>
      </div>
    </div>
  );
};