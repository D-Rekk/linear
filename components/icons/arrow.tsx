import { Icon } from "./socials"

export function LeftArrow({ className }: Icon) {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      fill="currentColor"
      role="img"
      focusable="false"
      className={className}
    >
      <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
    </svg>
  );
}
