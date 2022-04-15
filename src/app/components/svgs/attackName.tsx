import { SVGIcon } from './types';

export const AttackName = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 63.95 15.84"
  >
    <title>Attack Name</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <polygon
          style={{ fill: color || '#e4e5e6' }}
          points="63.95 13.48 63.95 0 2.36 0 0 2.36 0 15.84 61.6 15.84 63.95 13.48"
        />
      </g>
    </g>
  </svg>
);
