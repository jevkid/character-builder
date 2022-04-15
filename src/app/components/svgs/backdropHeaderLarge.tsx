import { SVGIcon } from './types';

export const BackdropHeaderLarge = ({
  height,
  width,
  color,
  className,
}: SVGIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={`${height}px`}
    width={`${width}px`}
    className={className}
    viewBox="0 0 389.06 49.28"
  >
    <title>Backdrop Header Large</title>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          style={{ fill: color || '#dcddde' }}
          d="M337.78,30.55l22.28-1.67-27.48-2.05,42.05-3.15-37.45-2.8L389.06,17,300.72,10.4l23.74-1.77L281.12,5.38l-38.5,2.88L225.3,6l42.49-3.18L233.74.29,210,2.06,182.46,0,156.71,1.93l26.16,2L154,6,125.22,3.89l16.71-1.25-20-1.5L58.15,5.91,80.76,7.6,9.06,13l42.23,3.16L29,17.79l27.48,2.05L14.43,23l37.45,2.81L0,29.66,71.29,35,38.65,37.44,73.11,40,82,39.35l25.92,1.94,38.5-2.88,17.3,2.25L118.87,44l61.6,4.6,13.47-1L169.69,45.8l34.63-2.59L228.58,45l15.89-1.18,22.62,1.69,63.82-4.77L308.3,39.07,380,33.71Zm-114.29,17,23.25,1.74L270,47.54,246.74,45.8ZM84.29,41l23.25,1.74L84.29,44.5,61,42.76Z"
        />
      </g>
    </g>
  </svg>
);
