import { SVGIcon } from './types';

export const PersonalityTraits = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 164.94 63.89"
  >
    <title>Personality Traits</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: '#ffffff' }}
          d="M160,.5H5C5,3,.5,4.42.5,4.42v59H3.08s2.11-4,8.91,0H153c6.79-4,8.9,0,8.9,0h2.58v-59S160,3,160,.5"
        />
        <path
          style={{ fill: color || '#231f20' }}
          d="M162.13,62.89a4.42,4.42,0,0,0-3.13-1.7.9.9,0,0,0-1.6,0,12.6,12.6,0,0,0-4.58,1.67H12.12a12.54,12.54,0,0,0-4.58-1.67.9.9,0,0,0-1.6,0,4.44,4.44,0,0,0-3.13,1.7H1v-9A99.44,99.44,0,0,0,2.47,38.18V8.23C4.31,5.26,7.74,1,12.28,1H152.66c4.53,0,8,4.27,9.81,7.23v30a99.44,99.44,0,0,0,1.47,15.72v9ZM1,10.93c.11-.23.44-.93,1-1.86V38.18A91.61,91.61,0,0,1,1,50.6ZM5.41,1H8.25C4.75,2.76,2.27,6.46,1,8.73V4.78C2,4.4,5,3.14,5.41,1M159.54,1c.41,2.14,3.36,3.4,4.4,3.78v4c-1.27-2.27-3.75-6-7.25-7.73ZM163,9.07c.53.93.86,1.63,1,1.86V50.6a91.61,91.61,0,0,1-1-12.42Zm1.62-5.13c-1.14-.35-4.1-1.66-4.1-3.44V0H4.45V.5c0,1.77-3,3.09-4.1,3.44L0,4.05V63.89H3.38l.14-.26A3.35,3.35,0,0,1,6,62.19a.93.93,0,0,0,.73.38.92.92,0,0,0,.71-.36,11.84,11.84,0,0,1,4.3,1.62l.11.06H153.09l.12-.06a11.74,11.74,0,0,1,4.29-1.62.92.92,0,0,0,.71.36.93.93,0,0,0,.73-.38,3.35,3.35,0,0,1,2.48,1.44l.14.26h3.38V4.05Z"
        />
      </g>
    </g>
  </svg>
);