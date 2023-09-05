import { Container } from "@/components/container"
import { Hero, HeroSub, HeroTitle } from "@/components/hero"
import Image from "next/image"

export default function Homepage() {
  return (
    <div>
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>Linear is a better way <br /> to build products</HeroTitle>
            <HeroSub> Meet the new standard for modern software development. <br/>
              Streamline issues, sprints, and product roadmaps.
            </HeroSub>
            <img src="/img/hero.webp" alt={"hero-img"} />
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>
          Footer
        </Container>
      </footer>
    </div>
  )
}