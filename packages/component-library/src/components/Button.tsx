import React from 'react';
import { twMerge } from 'tailwind-merge'
import classNames from '../utils/classNames'

type ButtonProps = {
  className?: string;
  size?: string;
  variant?: 'default' | 'primary' | 'warning' | 'danger';
  children?: React.ReactNode,
}

const buttonClasses = /*tw*/ {
  base: 'transition-colors ease-in-out duration-200 relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500',
  default: 'text-gray-700 bg-gray-100 hover:bg-gray-200 active:bg-primary-100 active:text-primary-700 ',
  primary: 'text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
  warning: 'text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-600 focus-visible:ring-yellow-500',
  danger: 'text-white bg-red-500 hover:bg-red-600 active:bg-red-700 focus-visible:ring-red-500',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'default', ...props }, ref) => {
  const classes = classNames(
    buttonClasses.base,
    [buttonClasses.default, variant === 'default'],
    [buttonClasses.primary, variant === 'primary'],
    [buttonClasses.warning, variant === 'warning'],
    [buttonClasses.danger, variant === 'danger'],
  )

  return <button {...props} ref={ref} className={twMerge(...classes, props.className)}></button>
});

export { Button, buttonClasses }