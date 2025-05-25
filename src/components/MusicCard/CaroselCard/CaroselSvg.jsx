import * as React from "react";

const CaroselSvg = ({ SVGImg, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 200 200"
    fill="none"
    {...props}
  >
    <defs>
      <clipPath id="carouselShape">
        <path d="M0 37C0 16.566 16.566 0 37 0h126c20.435 0 37 16.566 37 37v89.28c0 11.904-9.651 21.555-21.555 21.555h-6.983c-18.654 0-33.68 15.305-33.336 33.956.184 10.002-7.873 18.209-17.876 18.209H37c-20.434 0-37-16.565-37-37V37Z" />
      </clipPath>
    </defs>

    <image
      href={SVGImg}
      width={200}
      height={200}
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#carouselShape)"
    />
  </svg>
);

export default CaroselSvg;
