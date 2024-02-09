import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.scss';
import { _battery } from '../_battery/_battery.js';
import { FillIcon } from './FillIcon.js';
import classes from './IPhoneStatusBar_ThemeLightNotc.module.scss';
import { OutlineIcon } from './OutlineIcon.js';
import { ReceptionIcon } from './ReceptionIcon.js';
import { WifiIcon } from './WifiIcon.js';

interface Props {
  className?: string;
  classes?: {
    reception?: string;
    root?: string;
  };
  swap?: {
    reception?: ReactNode;
  };
}
/* @figmaId 6:186 */
export const IPhoneStatusBar_ThemeLightNotc: FC<Props> = memo(function IPhoneStatusBar_ThemeLightNotc(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.wifi}>
        <WifiIcon className={classes.icon3} />
      </div>
      <_battery
        className={classes._battery}
        classes={{ outline: classes.outline }}
        swap={{
          fill: <FillIcon className={classes.icon} />,
          outline: (
            <div className={classes.outline}>
              <OutlineIcon className={classes.icon2} />
            </div>
          ),
        }}
      />
      <div className={`${props.classes?.reception || ''} ${classes.reception}`}>
        {props.swap?.reception || <ReceptionIcon className={classes.icon4} />}
      </div>
      <div className={classes.time}>19:02</div>
    </div>
  );
});
