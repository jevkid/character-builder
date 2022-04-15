import { SVGIcon } from './types';

export const BoxSquare = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 52.24 49.28"
  >
    <title>Box Square</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <polygon
          style={{ fill: '#ffffff' }}
          points="51.4 5.01 51.4 44.08 47.2 48.28 4.92 48.28 0.71 44.08 0.71 5.01 4.92 0.8 47.2 0.8 51.4 5.01"
        />
        <path
          style={{ fill: color || '#231f20' }}
          d="M46.66,47.9H44A11.38,11.38,0,0,0,49,43.65h0v-.07a15.85,15.85,0,0,0,1.79-3.76V43.7ZM1.38,43.7V39.82a15.85,15.85,0,0,0,1.79,3.76v.07h.05A11.38,11.38,0,0,0,8.29,47.9H5.58ZM5.58,1.38H8.29A11.31,11.31,0,0,0,3.22,5.63H3.17V5.7A15.85,15.85,0,0,0,1.38,9.46V5.58ZM49.07,6.84c.16.3.34.58.49.9a17.39,17.39,0,0,1,1.3,3.94V37.55a17.37,17.37,0,0,1-1.79,4.87ZM1.38,11.73A17.37,17.37,0,0,1,3.17,6.86V42.44c-.16-.3-.34-.58-.49-.9a17.55,17.55,0,0,1-1.3-3.94ZM42,47.9H10.2a10.53,10.53,0,0,1-6.28-4.28V5.68a10.68,10.68,0,0,1,6.31-4.3H42a10.59,10.59,0,0,1,6.28,4.27v38A10.68,10.68,0,0,1,42,47.9M50.86,5.58V9.46A15.85,15.85,0,0,0,49.07,5.7V5.63h0A11.31,11.31,0,0,0,44,1.38h2.71ZM47.23,0H5L0,5V44.27l5,5H47.23l5-5V5Z"
        />
      </g>
    </g>
  </svg>
);
