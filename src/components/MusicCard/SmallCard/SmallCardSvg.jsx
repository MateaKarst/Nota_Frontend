import * as React from "react"
const SmallCardSvg = (SVGImg, ...props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M0 16C0 7.163 7.163 0 16 0h48c8.837 0 16 7.163 16 16v38.498a4.636 4.636 0 0 1-4.636 4.636h-3.423c-9.305 0-16.8 7.634-16.629 16.938A3.857 3.857 0 0 1 51.456 80H16C7.163 80 0 72.837 0 64V16Z"
    />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="matrix(.00256 0 0 .00256 -.3 0)" />
      </pattern>
      <image
       xlinkHref= {SVGImg.SVGImg}
id="b"
width={626}
height={391}
preserveAspectRatio="none"
/>
</defs>
</svg>
)
export default SmallCardSvg