import { SVGIcon } from './types';

export const Proficiencies = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 180 145.47"
  >
    <title>Proficiencies</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: color || '#231f20' }}
          d="M178,139.33h-.87V5.68H178Zm-175.13,0H2V5.68h.87ZM180,3V2.09h-2.87V0h-1.25a2.2,2.2,0,0,1-1.83.72H6A2.2,2.2,0,0,1,4.12,0H2.87V2.09H0V3C1.18,3,1.25,4.93,1.25,4.93v134.4s-.07,1.94-1.25,1.94v.9H2.87v3.3H4.12V1.55H175.88V143.92H4.12v1.55A2.21,2.21,0,0,1,6,144.75H174.05a2.21,2.21,0,0,1,1.83.72h1.25v-3.3H180v-.9c-1.18,0-1.25-1.94-1.25-1.94V4.93S178.82,3,180,3"
        />
      </g>
    </g>
  </svg>
);
