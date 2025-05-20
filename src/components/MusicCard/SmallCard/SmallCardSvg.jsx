import * as React from "react";

const SmallCardSvg = ({ SVGImg, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    viewBox="0 0 80 80"
    fill="none"
    {...props}
  >
    <defs>
      <clipPath id="smallCardShape">
        <path d="M0 16C0 7.163 7.163 0 16 0h48c8.837 0 16 7.163 16 16v38.498a4.636 4.636 0 0 1-4.636 4.636h-3.423c-9.305 0-16.8 7.634-16.629 16.938A3.857 3.857 0 0 1 51.456 80H16C7.163 80 0 72.837 0 64V16Z" />
      </clipPath>
    </defs>

    <image
      href={SVGImg}
      width={80}
      height={80}
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#smallCardShape)"
    />
  </svg>
);

export default SmallCardSvg;
