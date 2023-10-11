"use client"
import Link from "next/link";
import { Logo } from "./icons/logo";
import { TwitterIcon, GithubIcon, SlackIcon } from "./icons/socials";
import { Loader } from "./loader";
import { useEffect, useRef } from "react"

let previousWidth: number | null = null

export function FooterBranding() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const updateTextWidth = () => {
      if (textRef.current) {
        const width = textRef.current.offsetWidth;
        if (width !== previousWidth) {
          previousWidth = width
          document.documentElement.style.setProperty('--logotype', `${width}px`);
        }
      }
    };
    window.addEventListener('resize', updateTextWidth);
    updateTextWidth();

    return () => {
      window.removeEventListener('resize', updateTextWidth);
    };
  }, []);

  return (
    <section className="flex flex-row justify-between mr-auto lg:flex-col max-lg:w-full ">
      <Link href="/" className="flex items-center text-gray/60 hover:text-hover transition-color-hover font-medium">
        <Logo className="w-[1.8rem] h-[1.8rem] mr-2" />
        <p ref={textRef} className="max-md:branding lg:branding animate-logotype ease-cubic hover:animate-pause">Linear - Designed Worldwide</p>
      </Link>
      <Loader />
      <div className="flex gap-6">
        <Link href={"#"}>
          <TwitterIcon className="w-6 md:w-[1.8rem] fill-gray/60 hover:fill-hover transition-color-hover" />
        </Link>
        <Link href={"#"}>
          <GithubIcon className="w-6 md:w-[1.8rem] fill-gray/60 hover:fill-hover transition-color-hover" />
        </Link>
        <Link href={"#"}>
          <SlackIcon className="w-6 md:w-[1.8rem] fill-gray/60 hover:fill-hover transition-color-hover" />
        </Link>
      </div>
    </section>
  );
}
