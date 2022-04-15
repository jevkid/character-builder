import { SVGIcon } from './types';

export const ProficiencyCheckbox = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 6.66 6.66"
  >
    <title>Proficiency Checkbox</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: '#ffffff' }}
          d="M3.33,6.3a3,3,0,1,0-3-3,3,3,0,0,0,3,3"
        />
        <path
          style={{ fill: color || '#231f20' }}
          d="M3.33.72A2.61,2.61,0,1,0,5.94,3.33,2.61,2.61,0,0,0,3.33.72m0,5.94A3.33,3.33,0,1,1,6.66,3.33,3.33,3.33,0,0,1,3.33,6.66"
        />
      </g>
    </g>
  </svg>
);
