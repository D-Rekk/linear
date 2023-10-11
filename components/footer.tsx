import Link from "next/link"
import { Container } from "./container"
import { FooterBranding } from "./footer-branding"


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
    <footer className="border-t border-white/5 text-md md:text-sm ">
      <Container className="flex flex-row flex-wrap py-13 w-full ">
        <FooterBranding />
          {list.map(({ title, contents }, i) => (
            <section key={title + '' + i} className="min-w-[50%] lg:min-w-sections max-lg:mt-10 max-lg:flex-1">
              <h3 className="font-medium mb-4 text-gray">{title}</h3>
              <ul>
                {contents.map((content) => (
                  <li key={content} className="mb-3 text-gray">
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