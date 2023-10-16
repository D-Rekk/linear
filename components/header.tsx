"use client"
import Link from "next/link"
import { Container } from "./container"
import { Logo } from "./icons/logo"
import { Button } from "./button";
import HamburgerIcon from "./icons/hamburger"
import { clsx } from "clsx"
import useResizeWindow from "./hooks/hooks"

const navElements = [
  "Features",
  "Methods",
  "Customers",
  "Changelogs",
  "Integrations",
  "Pricing",
  "Company"
]
const itemsToHide = [
  "Customers",
  "Changelogs",
  "Integrations"
]

export default function Header() {

  const {isOpen, handleClick } = useResizeWindow()

  return (
    <header className="h-12 flex border-0 border-b border-white/5 sticky top-0 header-blur z-[1]">
      <Container className="flex mx-0 w-full text-md">
        <section className="flex items-center">
          <Link href="/" className="flex items-center">
            <Logo className="w-[1.8rem] h-[1.8rem] mr-2" />Linear
          </Link>
          <nav className={`h-hamstatic max-md:absolute max-md:invisible max-md:pointer-events-none flex top-12 left-0 w-full`}>
            <ul className="flex md:flex-row gap-4 items-center transition-transform ease-out-slow-in duration-[250ms] delay-[25ms] translate-y-[10px] md:translate-y-0">
              {navElements.map((element) => ( //desktop
                  <li key={element} className={clsx(`ml-6 text-sm h-12  ${itemsToHide.includes(element) ? "md:max-lg:invisible max-lg:absolute lg:translate-y-0" : "max-md:absolute md:translate-y-0"}`)}>
                    <Link href="#" className="hover:text-gray/60 transition-colors inline-flex items-center h-full">{element}</Link>
                  </li>
              ))}
            </ul>
          </nav>
          <nav className={clsx(`h-ham fixed top-12 left-0 w-full transition-all ease-out-slow-in duration-400 bg-background md:opacity-0 md:pointer-events-none md:invisible`, (isOpen ? "max-md:visible max-md:opacity-100 max-md:transform-none": "max-md:invisible max-md:opacity-0 translate-y-[10px]"))}>
            <ul className={clsx(`flex flex-col text-md md:flex-row md:hidden`)}>
              {navElements.map((element) => ( //mobile
                <li key={element} className={`border-b border-white/10 h-12`}>
                  <Link href="#" className="hover:text-gray/60 transition-colors inline-flex items-center h-full px-8">{element}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <div className="ml-auto text-sm flex items-center gap-6">
          <Link href="#">Log In</Link>
          <Button href="#" variant="primary">Sign In</Button>
        </div>

        <button className="md:sr-only ml-6" onClick={handleClick}>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  )
}