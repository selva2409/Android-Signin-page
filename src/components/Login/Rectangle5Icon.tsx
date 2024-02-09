import { memo, SVGProps } from 'react';

const Rectangle5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 360 697' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 84C0 37.6081 37.6081 0 84 0H276C322.392 0 360 37.6081 360 84V697H0V84Z' fill='white' />
  </svg>
);

const Memo = memo(Rectangle5Icon);
export { Memo as Rectangle5Icon };
