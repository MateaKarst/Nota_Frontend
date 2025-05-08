import * as React from "react";

const CoverImg = ({ SVGImg, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={150}
      height={150}
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="musicCardShape">
          <path d="M0 16C0 7.16344 7.16344 0 16 0H64C72.8366 0 80 7.16344 80 16V54.498C80 57.0583 77.9244 59.1339 75.3641 59.1339H71.9413C62.6358 59.1339 55.1407 66.7684 55.3122 76.0723C55.352 78.2297 53.614 80 51.4562 80H16C7.16344 80 0 72.8366 0 64V16Z" />
        </clipPath>
      </defs>

      <image
        href={SVGImg}
        width={80}
        height={80}
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#musicCardShape)"
      />
    </svg>
  );
};

export default CoverImg;
