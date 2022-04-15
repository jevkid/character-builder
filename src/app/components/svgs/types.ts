export type SVGProps = React.SVGProps<SVGSVGElement>;

export interface SVGIcon extends SVGProps {
  height: number;
  width: number;
  color?: string;
  className?: string;
}
