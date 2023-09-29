"use client"
import Link from "next/link"
import { Container } from "./container"
import { Logo } from "./icons/logo"
import Button from "./button"
import HamburgerIcon from "./icons/hamburger"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
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
    <header className="h-12 flex border-0 md:border-b border-white/5 sticky top-0 header-blur">
      <Container className="flex mx-0 w-full">
        <section className="flex items-center text-md">
          <Link href="/" className="flex items-center">
            <Logo className="w-[1.8rem] h-[1.8rem] mr-2" />Linear
          </Link>
          <nav className={twMerge(`max-md:h-ham max-md:fixed md:static md:flex top-12 left-0 w-full ease-out-slow-in duration-400 max:md:transition-opacity max-md:duration-400 max-md:bg-background `, (isOpen ? "max-md:visible max-md:opacity-100 transform-none": "max-md:invisible max-md:opacity-0 translate-y-[10px]"))}>
            <ul className="flex flex-col md:flex-row md:gap-4 md:items-center">
              {navElements.map((element) => (
                  <li key={element} className={twMerge(`max-md:border-b border-white/10 md:ml-6 text-md md:text-sm h-12 ${itemsToHide.includes(element) ? "md:max-lg:hidden" : ""}`)}>
                    <Link href="#" className="hover:text-gray transition-colors inline-flex items-center h-full max-md:px-8">{element}</Link>
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