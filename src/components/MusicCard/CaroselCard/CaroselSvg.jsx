import * as React from "react"
const CaroselSvg = (SVGImg, ...props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={200}
    height={200}
    fill="none"
    {...props}
  >
    <foreignObject width={230} height={230} x={-15} y={-15}>
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
        d="M0 37C0 16.566 16.566 0 37 0h126c20.435 0 37 16.566 37 37v89.28c0 11.904-9.651 21.555-21.555 21.555h-6.983c-18.654 0-33.68 15.305-33.336 33.956.184 10.002-7.873 18.209-17.876 18.209H37c-20.434 0-37-16.565-37-37V37Z"
      />
      <path
        d="M37 1h126c19.882 0 36 16.118 36 36v89.279c0 11.352-9.203 20.556-20.555 20.556h-6.982c-19.214 0-34.691 15.764-34.337 34.975.174 9.442-7.432 17.19-16.876 17.19H37c-19.882 0-36-16.118-36-36V37C1 17.118 17.118 1 37 1Z"
      />
    </g>
    <defs>
      <radialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 -100 174.846 0 100 100)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" />
      </radialGradient>
      <clipPath id="a" transform="translate(15 15)">
        <path d="M0 37C0 16.566 16.566 0 37 0h126c20.435 0 37 16.566 37 37v89.28c0 11.904-9.651 21.555-21.555 21.555h-6.983c-18.654 0-33.68 15.305-33.336 33.956.184 10.002-7.873 18.209-17.876 18.209H37c-20.434 0-37-16.565-37-37V37Z" />
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
  xlinkHref= {SVGImg.SVGImg}
id="d"
width={626}
height={391}
preserveAspectRatio="none"
/>
</defs>
</svg>
)
export default CaroselSvg
