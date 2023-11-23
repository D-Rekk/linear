import { Keyboard, Lightning, LogoStencil } from "./icons/illustrations"

export function Cards () {
  return (
    <div className="z-[1]">
      <div className="text-center">
        <h2 className="text-6xl mb-5">
          Unlike any tool
          <br />
          you’ve used before
        </h2>
        <p className="text-lg max-w-[60rem] text-balance text-gray mx-auto">
          Designed to the last pixel and engineered with unforgiving precision,
          Linear combines UI elegance with world-class performance.
        </p>
      </div>
      <div className="cards flex [&_section]:min-w-full [scroll-snap-type:x_mandatory] [&_section]:[scroll-snap-align:center] max-md:py-8 p-8
      md:grid [&_section]:p-8 md:[&_section]:p-13 [&_section]:rounded-[4.8rem] text-center [&_p]:text-gray [&_p]:mt-4">
        <section className="col-span-full  md:col-[auto/span_4]">
        <div className="card-svg-container w-full">
          <Keyboard />
        </div>
          <h3>Built for your keyboard</h3>
          <p>
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </section>
        <section className="col-span-full md:col-[auto/span_2]">
          <div className="card-svg-container scale-[1.15] w-full h-full absolute">
            <Lightning />
          </div>
          <h3>Breathtakingly fast</h3>
          <p>Built for speed with 50ms interactions and real-time sync.</p>
        </section>
        <section className="col-span-full  md:col-[auto/span_2]">
        <div className="card-svg-container">
          <LogoStencil className="scale-[0.8] -mb-[20rem] -mt-[15rem]" />
        </div>
          <h3>Designed for modern software teams</h3>
          <p>Comes with built-in workflows that create focus and routine.</p>
        </section>
        <section className="col-span-full  md:col-[3/-1]">
        <div className="card-svg-container">
        </div>
          <h3>Meet your command line</h3>
          <p>Complete any action in seconds with the global command menu.</p>
        </section>
      </div>
    </div>
  );
}