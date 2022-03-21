import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge'

const Root: React.FC<Switch.SwitchProps> = props => {
  const className = 'relative w-[42px] h-[25px] bg-gray-200 data-checked:bg-primary-200 rounded-full shadow-lg'
  return <Switch.Root {...props} className={twMerge(className, props.className)} />
}

const Thumb: React.FC<Switch.SwitchThumbProps> = props => {
  const className = 'block w-[21px] h-[21px] bg-primary-600 rounded-full shadow-lg data-checked:translate-x-[19px]'
  return <Switch.Thumb {...props} className={twMerge(className, props.className)} />
}


export { Root, Thumb }