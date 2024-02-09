import { memo, SVGProps } from 'react';

const FillIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.923077 2.20513C0.923077 1.49707 1.49707 0.923077 2.20513 0.923077H19.8333C20.5414 0.923077 21.1154 1.49707 21.1154 2.20513V8.29487C21.1154 9.00293 20.5414 9.57692 19.8333 9.57692H2.20513C1.49707 9.57692 0.923077 9.00293 0.923077 8.29487V2.20513Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(FillIcon);
export { Memo as FillIcon };
