export function Loader () {
  return (
    <div className="hidden md:max-lg:block flex-grow h-[1px] bg-fixed-gray overflow-hidden my-auto mx-3 bg-linear-gradient relative bg-gray/60">
      <span className="animate-loading absolute bg-linear w-full h-full block"></span>
    </div>
  );
}