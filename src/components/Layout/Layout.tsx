import React from 'react';
/* eslint-disable */
import { Outlet } from 'react-router';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

import { Header } from '@/components/Layout/Header';
import { SideMenu } from '@/components/Layout/SideMenu';
import { useAppSelector } from '@/hooks/useStore';
import { authSelector } from '@/store/selectors';
import { UISnackbar } from '@/ui-components/UISnackbar';

const cx = cn.bind(styles);
export const Layout = () => {
  const { isAuth } = useAppSelector(authSelector);

  return (
    <div className={styles.Layout}>
      <div className={styles.Layout__sideMenuAndOutlet}>
        <div className={styles.Layout__sideMenu}>
          <SideMenu />
        </div>
        <div className={styles.Layout__outletAndHeaderWrapper}>
          {isAuth && (
            <div className={styles.Layout__header}>
              <Header />
            </div>
          )}

          <section
            className={cx(styles.Layout__outletWrapper, {
              [styles.Layout__outletWrapper_withHeader]: isAuth,
            })}
          >
            <Outlet />
          </section>
        </div>
      </div>
      <UISnackbar />
    </div>
  );
};
