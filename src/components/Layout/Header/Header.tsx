import React from 'react';
import cn from 'classnames/bind';
import { ReactComponent as Avatar } from '@/assets/icons/avatar.svg';
import styles from './styles.module.scss';

import { BreadCrumbs } from '@/components/Breadcrumbs';

const cx = cn.bind(styles);

export const Header = () => {
  return (
    <div className={cx(styles.Header)}>
      <div className={cx(styles.Header__breadcrumbs)}>
        <BreadCrumbs />
      </div>

      <div className={cx(styles.Header__userInteraction)}>
        <Avatar onClick={() => console.log('avatar')} />
      </div>
    </div>
  );
};
