import type { SVGProps } from "react";

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="#4573b0" fillRule="evenodd" clipRule="evenodd">
        <path d="M2.461 12a.75.75 0 0 1 .75-.75l17.79.012a.75.75 0 1 1-.002 1.5L3.21 12.75a.75.75 0 0 1-.749-.75"></path>
        <path d="M10.517 4.47a.75.75 0 0 1 .001 1.06L4.06 12l6.458 6.47a.75.75 0 0 1-1.061 1.06l-6.988-7a.75.75 0 0 1 0-1.06l6.988-7a.75.75 0 0 1 1.06 0"></path>
      </g>
    </svg>
  );
}
