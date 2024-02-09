import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M30 14.0625C30 6.29599 23.2843 0 15 0C6.71572 0 0 6.29599 0 14.0625C0 21.0814 5.48525 26.8992 12.6562 27.9542V18.1274H8.84766V14.0625H12.6562V10.9644C12.6562 7.43994 14.8957 5.49316 18.322 5.49316C19.9626 5.49316 21.6797 5.76782 21.6797 5.76782V9.22852H19.7883C17.925 9.22852 17.3438 10.3126 17.3438 11.4258V14.0625H21.5039L20.8389 18.1274H17.3438V27.9542C24.5147 26.8992 30 21.0814 30 14.0625Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
