"use client";
import { CSSProperties, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { ClassChildren } from "@/app/types";
import clsx from "clsx";

type Line = {
  id: string;
  direction: "horizontal" | "vertical";
  size: number;
  duration: number;
}


export function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { isIntersecting } = useIntersectionObserver(ref, { threshold: 0.3 });
  const { isIntersecting: isStrictInterecting } = useIntersectionObserver(ref);
  let [isVisible, setIsVisible] = useState<boolean>(false);

  const [lines, setLines] = useState<Line[]>([]);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  useEffect(() => {
    if (!isVisible) return;

    const renderLine = (timeout: number) => {
      timeoutRef.current = setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.75 ? "horizontal" : "vertical",
            duration: randomNumberBetween(200, 600),
            size: randomNumberBetween(60, 160),
            id: Math.random().toString(36).substring(7),
          },
        ]);

        renderLine(randomNumberBetween(1200, 2500));
      }, timeout);
    };

    renderLine(randomNumberBetween(800, 1300));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isVisible, setLines]);

  useEffect(() => {
    if (isIntersecting && !isVisible) {
      // Component enters viewport by 30%
      console.log("It's intersecting we add style");
      setIsVisible((isVisible) => true)
    } else if (!isStrictInterecting && isVisible) {
      //Left completely
      console.log("We removing Style brr");
      setIsVisible((isVisible) => false);
    }
  }, [isIntersecting, isStrictInterecting]);

  return (
    <section className="hero [perspective:200rem] mt-[12.8rem] pb-[25.6rem] -mb-[16.4rem]">
      <div className={clsx("glow-base",
      isVisible ? "glow" : "")} />
      <div
        ref={ref}
        className={clsx(
          `hero-image-wrapper bg-hero-gradient bg-white/[0.01] grid
        rounded-lg  animation-duration-[1.4s] animation-delay-[400ms]`,
          isVisible ? "hero-image-animation" : ""
        )}
      >
         <div className="hero-strokes">
          {lines.map((line) => (
            <span key={line.id} onAnimationEnd={() => removeLine(line.id)}
              style={{
                "--duration": line.direction == "vertical" ? (Math.round(line.duration/0.5625)+"ms") : line.duration+"ms",
                "--size": line.size } as CSSProperties
              }
              className={line.direction} />
          ))}
        </div>
        <ImageOutLine className={clsx("silhouette-base w-full h-full", isVisible ? "silhouette" : "")} />
        <img
          className={clsx(
            "opacity-0 hero-image border border-white/5",
            isVisible ? "toggle-opacity" : ""
          )}
          src="/img/hero.webp"
          alt={"hero-img"}
        />
      </div>
    </section>
  );
}
const ImageOutLine = ({ className }: ClassChildren) => (
  <svg width="100%" fill="none" className={className}>
    <path pathLength="1" d="M1500 72L220 72"></path>
    <path pathLength="1" d="M1500 128L220 128"></path>
    <path pathLength="1" d="M1500 189L220 189"></path>
    <path pathLength="1" d="M220 777L220 1"></path>
    <path pathLength="1" d="M538 777L538 128"></path>
  </svg>
);

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};