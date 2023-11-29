"use client";

import { useEffect, useRef } from "react"
import { Keyboard } from "./icons/illustrations";


export function KeyboardCard() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const checkedKey = checkKey(event);
      const key = sectionRef.current?.querySelector(`svg g[data-key="${checkedKey}"]`);
      key?.setAttribute("data-pressed", "true");
    };

    const onKeyUp = (event: KeyboardEvent) => {
      const checkedKey = checkKey(event);
      const key = sectionRef.current?.querySelector(`svg g[data-key="${checkedKey}"]`);
      key?.removeAttribute("data-pressed");
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);


  return (
    <section ref={sectionRef} className="col-span-full  md:col-[auto/span_4]">
    <div className="card-svg-container w-full">
      <Keyboard />
    </div>
    <h3>Built for your keyboard</h3>
    <p>
      Fly through your tasks with rapid-fire keyboard shortcuts for
      everything. Literally everything.
    </p>
  </section>
  );
}


const checkKey = (event: KeyboardEvent) => {
  let pressedKey;
  switch (event.code.toLowerCase()) {
    case "shiftleft":
    case "shiftright":{
      pressedKey = event.code;
      break;
    }
    default:
      pressedKey = event.key;
      break;
  }
  return pressedKey.toLocaleLowerCase()
};