/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';

import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} {...props} />
  );
}
