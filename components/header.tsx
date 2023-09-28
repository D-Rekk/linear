import Link from "next/link"
import { Container } from "./container"
import { Logo } from "./icons/logo"

const navElements = [
  "Features",
  "Methods",
  "Customers",
  "Changelogs",
  "Integrations",
  "Pricing",
  "Company"
]

export default function Header() {
  return (
    <header className="h-12 flex border-b border-white/5 sticky top-0 header-blur">
      <Container className="flex mx-0 w-full">
        <section className="flex items-center text-md">
          <Link href="/" className="flex items-center">
            <Logo className="w-[1.8rem] h-[1.8rem] mr-2" />Linear
          </Link>

          <nav className="flex">
            <ul className="flex flex-row mx-4 gap-4 items-center">
              {navElements.map((element) =>
                <li key={element} className="hover:text-linkHover medium ml-6 text-sm">
                  <Link href="#">{element}</Link>
                </li>
              )}
            </ul>
          </nav>
        </section>

        <div className="ml-auto text-sm flex items-center gap-6">
          <Link href="#">Log In</Link>
          <Link href="#" className="rounded-full bg-brand-bg">Sign In</Link>
        </div>
      </Container>
    </header>
  )
}