"use client"
import { useEffect, useRef } from "react"
import useIntersectionObserver from "@react-hook/intersection-observer"

export function HeroImage () {
  const ref = useRef<HTMLDivElement>(null)
  const {isIntersecting} = useIntersectionObserver(ref, {threshold : 0.3})
  const {isIntersecting: isStrictInterecting} = useIntersectionObserver(ref)
  let isApplied = useRef<boolean>(false)

  useEffect(() => {
    if (isIntersecting && !isApplied.current) { // Component enters viewport by 30%
      console.log("It's intersecting we add style");
      ref.current?.classList.add("hero-image-animation");
      ref.current?.previousElementSibling?.classList.add("glow");
      ref.current?.firstElementChild?.classList.add("toggle-opacity");
      isApplied.current = true;
    } else if (!isStrictInterecting && isApplied.current) { //Left completely
      console.log("We removing Style brr");
      ref.current?.classList.remove("hero-image-animation");
      ref.current?.previousElementSibling?.classList.remove("glow");
      ref.current?.firstElementChild?.classList.remove("toggle-opacity");
      isApplied.current = false;
    }
  }, [isIntersecting, isStrictInterecting])

  return (
    <div className="hero [perspective:200rem] mt-[12.8rem]">
      <div className="glow-base" />
      <div
        ref={ref}
        className="hero-image-wrapper bg-hero-gradient bg-white/[0.01] rounded-lg border border-white/5
        animation-duration-[1.4s] animation-delay-[400ms]"
      >
        <img
          className="opacity-0 hero-image"
          src="/img/hero.webp"
          alt={"hero-img"}
        />
      </div>
    </div>
  );
}

