import { forwardRef, memo } from "react";

interface StarIconProps {
  fill?: boolean;
  onClick: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {}
}

const StarIcon = forwardRef<SVGSVGElement, StarIconProps>(function StarIcon(
  { fill = false, onClick, onMouseEnter, onMouseLeave, ...props },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 16 16"
      ref={ref}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      <path
        fill={fill ? "#f79834" : "none"}
        stroke="#f79834"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m8 1.75l-2.25 4l-4 .5l3 3.5l-1 4.5l4.25-2l4.25 2l-1-4.5l3-3.5l-4-.5z"
      />
    </svg>
  );
});

export default memo(StarIcon);
