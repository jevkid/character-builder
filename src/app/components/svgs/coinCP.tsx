import { SVGIcon } from './types';

export const CoinCP = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 54.5 22.45"
  >
    <title>Coin CP</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: '#ffffff' }}
          d="M29.74,6.08a1.83,1.83,0,0,1-3.06-1.74h-19A1.82,1.82,0,0,1,4.58,6.08L.5,9.52v3.41l4.08,3.44a1.82,1.82,0,0,1,3.06,1.74h19a1.83,1.83,0,0,1,3.06-1.74l4.08-3.44V9.52Z"
        />
        <path
          style={{ fill: color || '#231f20' }}
          d="M8.19,17.61H26.13A2.29,2.29,0,0,1,26.8,16a2.39,2.39,0,0,1,2.94-.3l3.58-3V9.76l-3.58-3a2.37,2.37,0,0,1-2.94-.3,2.29,2.29,0,0,1-.67-1.59H8.2a2.3,2.3,0,0,1-.68,1.59,2.37,2.37,0,0,1-2.93.3L1,9.76V12.7l3.59,3a2.38,2.38,0,0,1,2.93.3,2.28,2.28,0,0,1,.67,1.59m19.14,1H7L7.15,18a1.3,1.3,0,0,0-.34-1.26,1.36,1.36,0,0,0-1.88,0l-.32.33L0,13.16V9.29L4.61,5.4l.32.33a1.37,1.37,0,0,0,1.88,0,1.32,1.32,0,0,0,.34-1.27L7,3.84H27.33l-.16.62a1.29,1.29,0,0,0,.34,1.26,1.36,1.36,0,0,0,1.88,0l.33-.33,4.6,3.89v3.87l-4.6,3.89-.33-.33a1.36,1.36,0,0,0-1.88,0A1.3,1.3,0,0,0,27.17,18Z"
        />
        <polygon
          style={{ fill: '#ffffff' }}
          points="53.94 13.66 53.94 8.79 47.4 0.56 17.87 0.56 11.34 8.79 11.33 13.66 17.87 21.89 47.4 21.89 53.94 13.66"
        />
        <path
          style={{ fill: color || '#231f20' }}
          d="M18.15,21.33h29l6.25-7.87V9L47.13,1.13h-29L11.9,9v4.47Zm29.52,1.12H17.6l-6.83-8.6V8.6L17.6,0H47.67L54.5,8.6v5.25Z"
        />
        <polygon
          style={{ fill: color || '#231f20' }}
          points="11.76 11.41 11.29 11.03 20.01 0.37 20.47 0.75 11.76 11.41"
        />
        <polygon
          style={{ fill: color || '#231f20' }}
          points="53.7 11.41 44.99 0.75 45.46 0.37 54.17 11.03 53.7 11.41"
        />
        <rect
          style={{ fill: color || '#231f20' }}
          x="15.58"
          y="9.67"
          width="0.6"
          height="13.77"
          transform="translate(-6.89 13.78) rotate(-39.23)"
        />
        <rect
          style={{ fill: color || '#231f20' }}
          x="42.7"
          y="16.26"
          width="13.77"
          height="0.6"
          transform="translate(5.42 44.53) rotate(-50.82)"
        />
      </g>
    </g>
  </svg>
);
