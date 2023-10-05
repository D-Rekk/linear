import { Container } from "@/components/container"
import { Hero, HeroSub, HeroTitle } from "@/components/hero"

export default function Homepage() {
  return (
    <div>
      <Container>
        <Hero className="mt-[6.4rem]">
          <HeroTitle className="text-balance">Linear is a better way to build products</HeroTitle>
          <HeroSub className="text-balance"> Meet the new standard for modern software development.<br/>
            Streamline issues, sprints, and product roadmaps.
          </HeroSub>
        </Hero>
        <img src="/img/hero.webp" alt={"hero-img"} />
      </Container>
    </div>
  )
}