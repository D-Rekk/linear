import { Button } from "@/components/button";
import { Container } from "@/components/container"
import { Hero, HeroSub, HeroTitle } from "@/components/hero"
export default function Homepage() {
  return (
    <div>
      <Container className="flex flex-col items-center">
        <Hero className="mt-[6.4rem]">
          <Button href="#" size={"small"} variant={"secondary"} icon className="animate-fade-in">
            Announcing our $35M Series B
            </Button>
          <HeroTitle className="text-balance animate-fade-in ">Linear is a better way<br className="hidden lg:block"/> to build products</HeroTitle>
          <HeroSub className="text-balance text-gray animate-fade-in animation-delay-[400ms]"> Meet the new standard for modern software development.<br className="hidden md:block"/> Streamline issues, sprints, and product roadmaps.
          </HeroSub>
        </Hero>
        <Button href="#" size={"large"} variant={"primary"} icon className="animate-fade-in animation-delay-[800ms]"> Get started</Button>
        <img className="mt-[12.8rem]" src="/img/hero.webp" alt={"hero-img"} />
      </Container>
    </div>
  )
}