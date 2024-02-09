import { memo, SVGProps } from 'react';

const OutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 83 39' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.4}
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10 3H65C68.866 3 72 6.13401 72 10V29C72 32.866 68.866 36 65 36H10C6.13401 36 3 32.866 3 29V10C3 6.13401 6.13401 3 10 3ZM0 10C0 4.47715 4.47715 0 10 0H65C70.5229 0 75 4.47715 75 10V29C75 34.5228 70.5229 39 65 39H10C4.47715 39 0 34.5228 0 29V10ZM83 19.5C83 22.5736 80.8667 25.1489 78 25.8261V13.1739C80.8667 13.8511 83 16.4264 83 19.5Z'
      fill='#DB00FF'
    />
  </svg>
);

const Memo = memo(OutlineIcon);
export { Memo as OutlineIcon };
