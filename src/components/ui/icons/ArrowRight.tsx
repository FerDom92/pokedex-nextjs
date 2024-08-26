import type { SVGProps } from "react";

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-testid="arrow-right-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="none"
        stroke="#4573b0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m22 6l8 10l-8 10m8-10H2"
      ></path>
    </svg>
  );
}
