import type { SVGProps } from "react";

export function Spinner(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex flex-col items-center gap-5 absolute top-1/2 left-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={96}
        height={96}
        viewBox="0 0 16 16"
        className="animate-spin "
        {...props}
      >
        <path
          fill="#4573b0"
          d="M2.501 8a5.5 5.5 0 1 1 5.5 5.5A.75.75 0 0 0 8 15a7 7 0 1 0-7-7a.75.75 0 0 0 1.501 0"
        ></path>
      </svg>
      Loading...
    </div>
  );
}
