import { memo, SVGProps } from 'react';

const OutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.4}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.20513 0.961538H20.8333C22.0724 0.961538 23.0769 1.96603 23.0769 3.20513V9.29487C23.0769 10.534 22.0724 11.5385 20.8333 11.5385H3.20513C1.96603 11.5385 0.961538 10.534 0.961538 9.29487V3.20513C0.961538 1.96603 1.96603 0.961538 3.20513 0.961538ZM0 3.20513C0 1.43498 1.43499 0 3.20513 0H20.8333C22.6035 0 24.0385 1.43499 24.0385 3.20513V9.29487C24.0385 11.065 22.6035 12.5 20.8333 12.5H3.20513C1.43498 12.5 0 11.065 0 9.29487V3.20513ZM26.6026 6.25C26.6026 7.23512 25.9188 8.06054 25 8.27759V4.22241C25.9188 4.43945 26.6026 5.26488 26.6026 6.25Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(OutlineIcon);
export { Memo as OutlineIcon };
