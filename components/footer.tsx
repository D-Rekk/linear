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
      <Container className="flex flex-row flex-wrap py-13 w-full ">
        <section className="flex flex-row justify-between mr-auto lg:flex-col max-lg:w-full ">
          <Link href="/" className="flex items-center text-gray/60 hover:text-hover transition-color-hover">
            <Logo className="w-[1.8rem] h-[1.8rem] mr-2" />Linear - Designed Worldwide
          </Link>
          <div className="flex gap-6">
            <Link href={"#"}>
              <TwitterIcon className="w-6 lg:w-[1.8rem] fill-gray/60 hover:fill-hover transition-color-hover" />
            </Link>
            <Link href={"#"}>
              <GithubIcon className="w-6 lg:w-[1.8rem] fill-gray/60 hover:fill-hover transition-color-hover"/>
            </Link>
            <Link href={"#"}>
              <SlackIcon className="w-6 lg:w-[1.8rem] fill-gray/60 hover:fill-hover transition-color-hover" />
            </Link>
          </div>
        </section>
          {list.map(({ title, contents }, i) => (
            <section key={title + '' + i} className="min-w-[50%] lg:min-w-sections max-lg:mt-10 max-lg:flex-1">
              <h3 className="font-semibold mb-4 text-gray">{title}</h3>
              <ul>
                {contents.map((content) => (
                  <li key={content} className="mb-3 text-secondary">
                    <Link href={"#"} className="text-gray/60 hover:text-hover transition-color-hover mb-4">
                      {content}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
          )
          }
      </Container>
    </footer>
  )
}