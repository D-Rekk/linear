import Link from "next/link";
import { Logo } from "./icons/logo";
import { TwitterIcon, GithubIcon, SlackIcon } from "./icons/socials";
import { Loader } from "./loader";

export function FooterBranding() {
  return (
    <section className="flex flex-row justify-between mr-auto lg:flex-col max-lg:w-full ">
      <Link href="/" className="flex items-center text-gray/60 hover:text-hover transition-color-hover font-medium">
        <Logo className="w-[1.8rem] h-[1.8rem] mr-2" />
        <p id="logotype" className="background-clip logotype lg:animate-logotype md:max-lg:animate-none max-md:animate-logotype transition-medium">Linear - Designed Worldwide</p>
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
