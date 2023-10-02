import Link from "next/link"
import { Container } from "./container"
import { Logo } from "./icons/logo"
import { GithubIcon, SlackIcon, TwitterIcon } from "./icons/socials"


const list = [
  {
      title: "Product",
      contents: ["Features","Integrations","Pricing","Changelog","Docs","Linear Method","Download"]
  },
  {
    title: "Company",
    contents: ["About us", "Blog", "Careers", "Customers", "Brand"],
  },
  {
    title: "Resources",
    contents: ["Community", "Contact","DPA","Privacy Policy","Terms of service","Report a vulnerability"],
  },
  { title: "Developers",
    contents: ["API", "Status", "GitHub", "Magic"]
  },
]
export default function Footer() {
  return (
    <footer className="border-t border-white/5 text-md lg:text-sm ">
      <Container className="flex flex-col lg:flex-row py-13 w-full ">
        <section className="flex flex-row justify-between mr-auto lg:flex-col max-lg:w-full ">
          <Link href="/" className="flex items-center text-gray hover:text-hover transition-color-hover">
            <Logo className="w-[1.8rem] h-[1.8rem] mr-2" />Linear - Designed Worldwide
          </Link>
          <div className="flex">
            <Link href={"#"} className="w-[1.8rem] h-[1.8rem] mr-2 p-3">
              <GithubIcon className="fill-gray hover:fill-hover transition-color-hover" />
            </Link>
            <Link href={"#"} className="w-[1.8rem] h-[1.8rem] mr-2">
              <TwitterIcon className="fill-gray hover:fill-hover transition-color-hover" />
            </Link>
            <Link href={"#"} className="w-[1.8rem] h-[1.8rem] mr-2">
              <SlackIcon className="fill-gray hover:fill-hover transition-color-hover" />
            </Link>
          </div>
        </section>
        <div className="flex flex-row lg:gap-13 flex-wrap">
          {list.map(({ title, contents }, i) => (
            <section key={title + '' + i} className="min-w-[50%] lg:min-w-sections max-lg:mt-10 flex-1">
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul>
                {contents.map((content) => (
                  <li key={content} className="mb-3 text-secondary">
                    <Link href={"#"} className="text-gray hover:text-hover transition-color-hover mb-4">
                      {content}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
          )
          }
        </div>
      </Container>
    </footer>
  )
}