import { memo, SVGProps } from 'react';

const WifiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.00049 2.69984C11.6121 2.69995 14.1239 3.70936 16.0167 5.51942C16.1592 5.65916 16.387 5.6574 16.5274 5.51547L17.8899 4.13235C17.961 4.06036 18.0006 3.96285 18 3.86139C17.9994 3.75994 17.9586 3.6629 17.8867 3.59175C12.9188 -1.19725 5.08138 -1.19725 0.113468 3.59175C0.0415041 3.66284 0.000672511 3.75985 8.9596e-06 3.86131C-0.000654709 3.96277 0.0389042 4.06031 0.109932 4.13235L1.47278 5.51547C1.61307 5.65761 1.84107 5.65938 1.98351 5.51942C3.87652 3.70924 6.38859 2.69983 9.00049 2.69984ZM9.00049 7.19971C10.4354 7.19962 11.8191 7.73611 12.8828 8.70494C13.0267 8.84243 13.2533 8.83945 13.3935 8.69822L14.7544 7.3151C14.8261 7.24255 14.8658 7.14413 14.8648 7.04186C14.8638 6.9396 14.822 6.84201 14.7489 6.77094C11.5099 3.74028 6.49385 3.74028 3.25483 6.77094C3.18166 6.84201 3.13992 6.93964 3.13896 7.04195C3.138 7.14425 3.1779 7.24266 3.24972 7.3151L4.61021 8.69822C4.75045 8.83945 4.97707 8.84243 5.12094 8.70494C6.18388 7.73675 7.56651 7.20031 9.00049 7.19971ZM11.6158 10.5006C11.6886 10.4288 11.7287 10.3299 11.7266 10.2273C11.7245 10.1248 11.6804 10.0276 11.6048 9.95883C10.1014 8.67978 7.89957 8.67978 6.39618 9.95883C6.32049 10.0276 6.27636 10.1247 6.2742 10.2272C6.27204 10.3298 6.31206 10.4287 6.38479 10.5006L8.73924 12.8902C8.80824 12.9605 8.90233 13 9.00049 13C9.09866 13 9.19274 12.9605 9.26175 12.8902L11.6158 10.5006Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(WifiIcon);
export { Memo as WifiIcon };
