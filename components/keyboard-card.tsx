"use client";

import { useEffect, useRef } from "react"
import { Keyboard } from "./icons/illustrations";
import { Button, ButtonTooltip } from "./button"
import clsx from "clsx"


const items = [
  {tooltip: "⌘K", description: "Opens command line"},
  {tooltip: "I", description: "Assign issue to me"},
  {tooltip: "A", description: "Assign issue to"},
  {tooltip: "S", description: "Change issue status"},
  {tooltip: "P", description: "Set issue priority"},
  {tooltip: "L", description: "Add issue labels"},
  {tooltip: "⇧D", description: "Set due date"},
  {tooltip: "⇧⌘P", description: "Set parent issue"},
  {tooltip: "⇧⌘O", description: "Add sub-issue"},
  {tooltip: "C", description: "Create new issue"},
  {tooltip: "⌥C", description: "Create new issue from template"},
  {tooltip: "⇧P", description: "Move to project"},
  {tooltip: "⌘.", description: "Copy issue to clipboard"},
  {tooltip: "⇧⌘.", description: "Copy git branch name to clipboard"},
  {tooltip: "⌘C", description: "Copy issue as markdown list"},
  {tooltip: "⌘⌫", description: "Delete issue"},
  {tooltip: "⌘F", description: "Find in view"},
  {tooltip: "R", description: "Rename project or issue"},
]

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
    <div className="keyboard-carousel">
      {items.map(({tooltip, description},i) => (
        <ButtonWithTooltip key={i} tooltip={tooltip} description={description}  />
      ))}
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
      if (event.code.startsWith("Digit")) {
        pressedKey = event.code.substring(5); // Extract the numeric part
      } else pressedKey = event.key
      break;
  }
  return pressedKey.toLocaleLowerCase()
};

type T_ButtonWithTooltip = {
  tooltip: string;
  description: string
}
const ButtonWithTooltip = ({ tooltip, description }: T_ButtonWithTooltip) => {
  return (
    <Button
      href=""
      variant="secondary"
      size="custom"
      className={clsx(
        "text-md px-6 h-12 md:text-xs md:px-3 md:h-7",
        "whitespace-nowrap",
      )}
    >
      <ButtonTooltip>{tooltip}</ButtonTooltip>
      {description}
    </Button>
  );
};