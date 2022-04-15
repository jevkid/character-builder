import { SVGIcon } from './types';

export const DeathSaves = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 35.08 9.36"
  >
    <title>Death Saves</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: color || '#231f20' }}
          d="M30.4,8.46a3.78,3.78,0,1,1,3.78-3.78A3.79,3.79,0,0,1,30.4,8.46M22.07,5.81a5.06,5.06,0,0,0,.1-.68h3.6a3.86,3.86,0,0,0,.11.68ZM17.54,8.46a3.78,3.78,0,1,1,3.78-3.78,3.78,3.78,0,0,1-3.78,3.78M9.2,5.81a3.86,3.86,0,0,0,.11-.68h3.6a5.06,5.06,0,0,0,.1.68ZM4.68,8.46A3.78,3.78,0,1,1,8.46,4.68,3.78,3.78,0,0,1,4.68,8.46M30.4,0a4.66,4.66,0,0,0-4.63,4.23h-3.6a4.65,4.65,0,0,0-9.26,0H9.31a4.65,4.65,0,1,0-.24,2h4.08a4.66,4.66,0,0,0,8.78,0H26A4.67,4.67,0,1,0,30.4,0"
        />
      </g>
    </g>
  </svg>
);
