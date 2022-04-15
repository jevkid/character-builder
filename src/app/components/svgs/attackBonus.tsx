import { SVGIcon } from './types';

export const AttackBonus = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 31.18 15.84"
  >
    <title>Attack Bonus</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <polygon
          style={{ fill: color || '#e4e5e6' }}
          points="31.18 13.48 31.18 0 2.36 0 0 2.36 0 15.84 28.82 15.84 31.18 13.48"
        />
      </g>
    </g>
  </svg>
);
