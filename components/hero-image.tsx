"use client"
import { useEffect, useRef } from "react"
import useIntersectionObserver from "@react-hook/intersection-observer"

export function HeroImage () {
  const ref = useRef<HTMLDivElement>(null)
  const {isIntersecting} = useIntersectionObserver(ref, {threshold : 0.3})
  const {isIntersecting: isStrictInterecting} = useIntersectionObserver(ref)
  let isApplied = useRef<boolean>(false)

  useEffect(() => {
    if(isIntersecting && !isApplied.current) { // Component enters viewport by 30%
      console.log("It's intersecting we add style");
      ref.current?.classList.add('hero-image-animation');
      isApplied.current = true
    }
    else if (!isStrictInterecting && isApplied.current){ //Left completely
      console.log("We removing Style brr");
      ref.current?.classList.remove('hero-image-animation');
      isApplied.current = false
    }
  }, [isIntersecting, isStrictInterecting])

  return (
    <div ref={ref} className="hero-image-start bg-hero-gradient bg-white/[0.01] mt-[12.8rem] rounded-lg animation-duration-[1.4s] animation-delay-[400ms]">
      <img className="mt-[12.8rem] opacity-0" src="/img/hero.webp" alt={"hero-img"} />
    </div>
  );
}

