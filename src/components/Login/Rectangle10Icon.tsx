import { memo, SVGProps } from 'react';

const Rectangle10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 297 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 10C0 4.47715 4.47715 0 10 0H287C292.523 0 297 4.47715 297 10V30C297 35.5228 292.523 40 287 40H9.99999C4.47715 40 0 35.5228 0 30V10Z'
      fill='#D9D9D9'
    />
  </svg>
);

const Memo = memo(Rectangle10Icon);
export { Memo as Rectangle10Icon };
