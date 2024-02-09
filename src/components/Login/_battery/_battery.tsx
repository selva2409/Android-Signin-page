import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import classes from './_battery.module.scss';
import { FillIcon } from './FillIcon.js';
import { OutlineIcon } from './OutlineIcon.js';

interface Props {
  className?: string;
  classes?: {
    outline?: string;
    root?: string;
  };
  swap?: {
    fill?: ReactNode;
    outline?: ReactNode;
  };
}
/* @figmaId 6:334 */
export const _battery: FC<Props> = memo(function _battery(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.fill}>{props.swap?.fill || <FillIcon className={classes.icon} />}</div>
      <div className={`${props.classes?.outline || ''} ${classes.outline}`}>
        {props.swap?.outline || <OutlineIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
