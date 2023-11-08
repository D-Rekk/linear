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
      <div className="cards [&_section]:p-8 [&_section]:rounded-[4.8rem] text-center [&_p]:text-gray [&_p]:mt-4">
        <section className="col-[auto/span_4]">
          <Keyboard />
          <h3>Built for your keyboard</h3>
          <p>
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </section>
        <section className="col-[auto/span_2]">
          <Lightning className="-mb-[16rem] -mt-[12.4rem] translate-x-[-14%] scale-90" />
          <h3>Breathtakingly fast</h3>
          <p>Built for speed with 50ms interactions and real-time sync.</p>
        </section>
        <section className="col-[auto/span_2]">
          <LogoStencil className="-mb-[16rem] -mt-[12.4rem] translate-x-[-24%] scale-90" />
          <h3>Designed for modern software teams</h3>
          <p>Comes with built-in workflows that create focus and routine.</p>
        </section>
        <section className="col-[3/-1]">
          <h3>Meet your command line</h3>
          <p>Complete any action in seconds with the global command menu.</p>
        </section>
      </div>
    </div>
  );
}