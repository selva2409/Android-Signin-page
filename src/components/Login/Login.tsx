import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.scss';
import { IPhoneStatusBar_ThemeLightNotc } from './IPhoneStatusBar_ThemeLightNotc/IPhoneStatusBar_ThemeLightNotc.js';
import classes from './Login.module.scss';
import { ReceptionIcon } from './ReceptionIcon.js';
import { Rectangle5Icon } from './Rectangle5Icon.js';
import { Rectangle9Icon } from './Rectangle9Icon.js';
import { Rectangle10Icon } from './Rectangle10Icon.js';
import { SocialIcons_PlatformFacebookCo } from './SocialIcons_PlatformFacebookCo/SocialIcons_PlatformFacebookCo.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 16:368 */
export const Login: FC<Props> = memo(function Login(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IPhoneStatusBar_ThemeLightNotc
        className={classes.iPhoneStatusBar}
        classes={{ reception: classes.reception }}
        swap={{
          reception: (
            <div className={classes.reception}>
              <ReceptionIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.rectangle5}>
        <Rectangle5Icon className={classes.icon4} />
      </div>
      <div className={classes.rectangle6}></div>
      <div className={classes.forgottenYourLoginDetails}>Forgotten your login details?</div>
      <div className={classes.getHelpWithLoggingIn}>Get help with logging in.</div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle10}>
        <Rectangle10Icon className={classes.icon5} />
      </div>
      <div className={classes.rectangle9}>
        <Rectangle9Icon className={classes.icon6} />
      </div>
      <div className={classes.logIn}>Log In</div>
      <div className={classes.phoneNumberEmailAddressOrUsern}>Phone number,email address orUsername</div>
      <div className={classes.password}>Password</div>
      <div className={classes.oR}>OR</div>
      <div className={classes.rectangle11}></div>
      <div className={classes.rectangle13}></div>
      <SocialIcons_PlatformFacebookCo
        className={classes.socialIcons}
        swap={{
          vector: <VectorIcon className={classes.icon2} />,
          vector2: <VectorIcon2 className={classes.icon3} />,
        }}
      />
      <div className={classes.signupWithFacebook}>Signup with facebook</div>
      <div className={classes.frame9}></div>
      <div className={classes.donTHaveAnAccountSingUp}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Don’t have an account?</span>
          <span className={classes.label2}>Sing up</span>
        </p>
      </div>
      <div className={classes.BACK}>&lt;&lt;BACK</div>
    </div>
  );
});
