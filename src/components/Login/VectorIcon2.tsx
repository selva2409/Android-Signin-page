import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.8389 13.1274L13.5039 9.0625H9.34375V6.42578C9.34375 5.31369 9.925 4.22852 11.7883 4.22852H13.6797V0.767822C13.6797 0.767822 11.9632 0.493164 10.322 0.493164C6.8957 0.493164 4.65625 2.43994 4.65625 5.96436V9.0625H0.847656V13.1274H4.65625V22.9542C6.2093 23.1819 7.7907 23.1819 9.34375 22.9542V13.1274H12.8389Z'
      fill='#CC86B4'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
