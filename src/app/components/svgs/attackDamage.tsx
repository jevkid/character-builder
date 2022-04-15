import { SVGIcon } from './types';

export const AttackDamage = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 62.1 15.84"
  >
    <title>Attack Damage</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <polygon
          style={{ fill: color || '#e4e5e6' }}
          points="62.1 13.48 62.1 0 2.36 0 0 2.36 0 15.84 59.74 15.84 62.1 13.48"
        />
      </g>
    </g>
  </svg>
);
