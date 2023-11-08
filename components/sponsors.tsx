import { Ramp, Loom, Vercel, Descript, Cashapp, Supercell, Mercury, Retool, Remote, Arc, Raycast, Runaway } from "./icons/brand-logos"


export const Sponsors = () => {
  return (
    <div className="w-full">
        <p className="text-ml md:text-lg text-center mb-12">
          <span className="text-gray">Powering the world’s best product teams.</span><br/>
          From next-gen startups to established enterprises.
        </p>
      <div className="sponsors [--columns:3] md:[--columns:6] [&>svg]:max-w-[16rem]">
        <Ramp />
        <Loom />
        <Vercel />
        <Descript />
        <Cashapp />
        <Supercell />
        <Mercury />
        <Retool />
        <Remote />
        <Arc />
        <Raycast />
        <Runaway />
      </div>
    </div>
  );
}