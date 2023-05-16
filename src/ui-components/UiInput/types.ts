import { InputHTMLAttributes } from 'react';

export enum InputVariants {
  default = 'default',
  task = 'task',
}

export interface IUiInput extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
  isError?: boolean;
  isCorrect?: boolean;
  className?: string;
}
