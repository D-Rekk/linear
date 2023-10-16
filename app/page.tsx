import { Button, IconWrapper } from "@/components/button";
import { Container } from "@/components/container"
import { Hero, HeroSub, HeroTitle } from "@/components/hero"
import { LeftArrow } from "@/components/icons/arrow";
export default function Homepage() {
  return (
    <div>
      <Container>
        <Hero className="mt-[6.4rem]">
          <Button href="#" size={"small"} variant={"secondary"}>
            Announcing our $35M Series B
            <IconWrapper>
              <LeftArrow/>
            </IconWrapper>
            </Button>
          <HeroTitle className="text-balance">Linear is a better way<br className="hidden lg:block"/> to build products</HeroTitle>
          <HeroSub className="text-balance text-gray"> Meet the new standard for modern software development.<br className="hidden md:block"/> Streamline issues, sprints, and product roadmaps.
          </HeroSub>
        </Hero>
        <img src="/img/hero.webp" alt={"hero-img"} />
      </Container>
    </div>
  )
}