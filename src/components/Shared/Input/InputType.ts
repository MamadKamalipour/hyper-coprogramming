import { InputHTMLAttributes } from 'react';

export interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: any) => void;
  error?: string;
}
