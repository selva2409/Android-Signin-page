import { memo, SVGProps } from 'react';

const FillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 63 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 4C0 1.79086 1.79086 0 4 0H59C61.2091 0 63 1.79086 63 4V23C63 25.2091 61.2091 27 59 27H4C1.79086 27 0 25.2091 0 23V4Z'
      fill='#DB00FF'
    />
  </svg>
);

const Memo = memo(FillIcon);
export { Memo as FillIcon };
