import { SVGIcon } from './types';

export const Attack = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 166.2 15.84"
  >
    <title>Attack</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <polygon
          style={{ fill: color || '#e4e5e6' }}
          points="63.95 13.48 63.95 0 2.36 0 0 2.36 0 15.84 61.6 15.84 63.95 13.48"
        />
        <polygon
          style={{ fill: color || '#e4e5e6' }}
          points="99.62 13.48 99.62 0 70.8 0 68.44 2.36 68.44 15.84 97.26 15.84 99.62 13.48"
        />
        <polygon
          style={{ fill: color || '#e4e5e6' }}
          points="166.2 13.48 166.2 0 106.46 0 104.1 2.36 104.1 15.84 163.84 15.84 166.2 13.48"
        />
      </g>
    </g>
  </svg>
);
