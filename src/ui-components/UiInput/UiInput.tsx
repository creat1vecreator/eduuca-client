import React, { FC, forwardRef, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Input, InputProps } from '@mui/material';
import cn from 'classnames/bind';
import { IUiInput } from './types';
import styles from './styles.module.scss';

const cx = cn.bind(styles);
export const UiInput: FC<IUiInput> = forwardRef(
  ({ variant, isError, type = 'text', className, ...props }: IUiInput, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    const inputType = isPasswordVisible ? 'text' : type;
    const isPasswordType = type === 'password';

    return (
      <div className={cx(styles.UiInput, className)}>
        <Input
          type={inputType}
          error={isError}
          fullWidth
          ref={ref}
          autoComplete="autocomplete"
          {...(props as InputProps)}
          classes={{
            root: styles.UiInput,
            input: cx(styles.UiInput__input, {
              [styles.UiInput__input_password]: isPasswordType,
            }),
            error: styles.UiInput__error,
          }}
        />
        {isPasswordType && (
          <div
            role="button"
            onClick={togglePasswordVisibility}
            className={cx(styles.UiInput__visibilityButton)}
          >
            {isPasswordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        )}
      </div>
    );
  },
);
