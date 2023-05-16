import React, { FC } from 'react';
import cn from 'classnames/bind';
import { IUITag } from './types';
import { calcBackgroundColorByText, calcColorTextByBackground } from './utils';
import styles from './styles.module.scss';

const cx = cn.bind(styles);
export const UITag: FC<IUITag> = ({ text, onClick, className }: IUITag) => {
  const backgroundColor = calcBackgroundColorByText(text);
  const color = calcColorTextByBackground(backgroundColor);

  return (
    <button
      value={text}
      onClick={(event) =>
        onClick && onClick((event.target as HTMLButtonElement).value)
      }
      className={cx(styles.UITag, className)}
      style={{ backgroundColor }}
    >
      <span className={cx(styles.UITag__text)} style={{ color }}>
        {text}
      </span>
    </button>
  );
};
