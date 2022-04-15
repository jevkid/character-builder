import { SVGIcon } from './types';

export const InspirationHead = ({ height, width, color }: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    viewBox="0 0 28.14 28.14"
  >
    <title>Asset 1</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g id="Layer_2-2" data-name="Layer 2">
          <g id="Layer_1-2-2" data-name="Layer 1-2">
            <path
              style={{ fill: color || '#221d1f' }}
              d="M21.26,0,21,.33a5,5,0,0,1-1.58,1.3A13.55,13.55,0,0,0,14.77.55a.76.76,0,0,0-1-.38.78.78,0,0,0-.38.38A13.55,13.55,0,0,0,8.72,1.63,5,5,0,0,1,7.14.33L6.88,0H0V28.14H6.88l.26-.33a4.83,4.83,0,0,1,1.58-1.3,13.33,13.33,0,0,0,4.65,1.09.78.78,0,0,0,1,.36.83.83,0,0,0,.36-.36,13.33,13.33,0,0,0,4.65-1.09A4.83,4.83,0,0,1,21,27.81l.26.33h6.88V0ZM13.43,1.27v0a.75.75,0,0,0,1.28,0A12.44,12.44,0,0,1,18.38,2a4.71,4.71,0,0,1-1.12.14H10.88A4.71,4.71,0,0,1,9.76,2,12.47,12.47,0,0,1,13.43,1.27Zm1.28,25.6v0a.8.8,0,0,0-.64-.37.74.74,0,0,0-.64.37,12.8,12.8,0,0,1-3.67-.73A4.23,4.23,0,0,1,10.88,26h6.38a4.71,4.71,0,0,1,1.12.14A12.8,12.8,0,0,1,14.71,26.87Zm11.68-4.73c0,4.22-3.14,4.25-3.14,4.25H22.09a6.5,6.5,0,0,0-4.83-2.16H10.88a6.5,6.5,0,0,0-4.83,2.16H4.89s-3.14,0-3.14-4.25V6c0-4.22,3.14-4.25,3.14-4.25H6.05a6.5,6.5,0,0,0,4.83,2.16h6.38a6.5,6.5,0,0,0,4.83-2.16h1.16s3.14,0,3.14,4.25Z"
            />
            <path
              style={{ fill: '#ffffff' }}
              d="M26.39,6V22.14c0,4.22-3.14,4.25-3.14,4.25H22.09a6.5,6.5,0,0,0-4.83-2.16H10.88a6.5,6.5,0,0,0-4.83,2.16H4.89s-3.14,0-3.14-4.25V6c0-4.22,3.14-4.25,3.14-4.25H6.05a6.5,6.5,0,0,0,4.83,2.16h6.38a6.5,6.5,0,0,0,4.83-2.16h1.16S26.39,1.75,26.39,6Z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
