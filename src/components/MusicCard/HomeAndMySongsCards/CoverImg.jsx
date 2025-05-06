import * as React from "react";

const CoverImg = ({ SVGImg, ...props }) => {  // Destructure SVGImg prop directly
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={150}
      height={150}
      fill="none"
      {...props}
    >
      <foreignObject width={180} height={180} x={-15} y={-15}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            backdropFilter: "blur(7.5px)",
            clipPath: "url(#a)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <g data-figma-bg-blur-radius={15}>
        <path
          fill="url(#b)"
          d="M0 37C0 16.566 16.566 0 37 0h76c20.435 0 37 16.566 37 37v57.71c0 8.928-7.238 16.166-16.166 16.166h-5.237c-13.991 0-25.26 11.479-25.003 25.468.139 7.501-5.904 13.656-13.407 13.656H37c-20.434 0-37-16.565-37-37V37Z"
        />
        <path
          d="M37 1h76c19.882 0 36 16.118 36 36v57.71c0 8.376-6.79 15.166-15.166 15.166h-5.237c-14.551 0-26.27 11.938-26.002 26.486.127 6.942-5.465 12.638-12.407 12.638H37c-19.882 0-36-16.118-36-36V37C1 17.118 17.118 1 37 1Z"
        />
      </g>
      <defs>
        <radialGradient
          id="c"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="matrix(0 -75 131.134 0 75 75)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
        <clipPath id="a" transform="translate(15 15)">
          <path d="M0 37C0 16.566 16.566 0 37 0h76c20.435 0 37 16.566 37 37v57.71c0 8.928-7.238 16.166-16.166 16.166h-5.237c-13.991 0-25.26 11.479-25.003 25.468.139 7.501-5.904 13.656-13.407 13.656H37c-20.434 0-37-16.565-37-37V37Z" />
        </clipPath>
        <pattern
          id="b"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use xlinkHref="#d" transform="matrix(.00256 0 0 .00256 -.3 0)" />
        </pattern>
        <image
          xlinkHref={SVGImg} 
          id="d"
          width={626}
          height={391}
          preserveAspectRatio="none"
        />
      </defs>
    </svg>
  );
};

export default CoverImg;
