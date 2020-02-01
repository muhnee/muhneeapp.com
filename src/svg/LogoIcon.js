import React from 'react';

const LogoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#8e91f3" />
        <stop offset="1" stop-color="#9d78f3" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="#fff" />
        <stop offset="1" stop-color="#fff" />
      </linearGradient>
      <clipPath id="clip-custom_1">
        <rect width="1000" height="1000" />
      </clipPath>
    </defs>
    <g id="custom_1" data-name="custom – 1" clip-path="url(#clip-custom_1)">
      <rect width="1000" height="1000" fill="rgba(255,255,255,0)" />
      <rect id="Rectangle_1" data-name="Rectangle 1" width="1000" height="1000" fill="none" />
      <rect
        id="Rectangle_2"
        data-name="Rectangle 2"
        width="1000"
        height="1000"
        rx="150"
        transform="translate(1000 1000) rotate(180)"
        fill="url(#linear-gradient)"
      />
      <path
        id="Path_1"
        data-name="Path 1"
        d="M345.488,244.625,344.629-56H287.51l-110.8,186.817L64.188-56H6.64V244.625H71.919V68.115l88.04,144.73H191.31L279.78,64.25l.429,180.375Z"
        transform="translate(524.968 629.269)"
        fill="url(#linear-gradient-2)"
      />
      <path
        id="Path_2"
        data-name="Path 2"
        d="M0,0H1000V65.594H0Z"
        transform="translate(1000.297 338.297) rotate(180)"
        fill="#fff"
      />
      <path
        id="Path_3"
        data-name="Path 3"
        d="M0,0H1000V65.594H0Z"
        transform="translate(1000.297 223.297) rotate(180)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default LogoIcon;
