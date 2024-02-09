import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.3422 21.9375L20.4062 15H13.75V10.5C13.75 8.60203 14.68 6.75 17.6613 6.75H20.6875V0.84375C20.6875 0.84375 17.9411 0.375 15.3152 0.375C9.83313 0.375 6.25 3.6975 6.25 9.7125V15H0.15625V21.9375H6.25V38.7084C8.73489 39.0972 11.2651 39.0972 13.75 38.7084V21.9375H19.3422Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
