import { SVGIcon } from './types';

export const DragonClaws = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 12.44 13.88"
  >
    <title>Dragon Claws</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: color || '#231f20' }}
          d="M11.42,2.47l1,2.22c-1.37.23-2.91,5.64-2.91,5.64C6,8.31,9,1.85,9,1.85Z"
        />
        <path
          style={{ fill: color || '#231f20' }}
          d="M3.8,1.55A12.49,12.49,0,0,1,6.58,0L8.17,1.41l-.82.25s-1.53,5-.91,7.07l1,2.9S4.18,11,3.68,9.73c0,0-1.05-5.63.12-8.18"
        />
        <path
          style={{ fill: color || '#231f20' }}
          d="M2,3.67s.21,6.42.87,7l2.42,1,.07,2.19S1,12.51.64,10.86,0,5.11,0,5.11A4,4,0,0,1,2,3.67"
        />
      </g>
    </g>
  </svg>
);
