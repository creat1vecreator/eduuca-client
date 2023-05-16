import React, { FC } from 'react';
import cn from 'classnames/bind';
import styles from './styles.module.scss';

import { ISectionContentWrapper } from '@/components/SectionContentWrapper/types';

const cx = cn.bind(styles);
export const SectionContentWrapper: FC<ISectionContentWrapper> = ({
  children,
}: ISectionContentWrapper) => {
  return <div className={cx(styles.SectionContentWrapper)}>{children}</div>;
};
