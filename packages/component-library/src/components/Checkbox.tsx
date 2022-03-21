import React from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge'
import { CheckIcon } from '@heroicons/react/solid'

const rootClass = 'flex items-center justify-center h-4 w-4 text-white border border-gray-300 rounded data-checked:border-primary-500 data-checked:bg-primary-500'
export const Root = React.forwardRef<React.ElementRef<typeof Checkbox.Root>, Checkbox.CheckboxProps>(
  (props, ref) => {
    return <Checkbox.Root {...props} ref={ref} className={twMerge(rootClass, props.className)} />
  }
)

const indicatorClass = ''
export const Indicator = React.forwardRef<React.ElementRef<typeof Checkbox.Indicator>, Checkbox.CheckboxIndicatorProps>(
  ({ children, ...props }, ref) => {
    children = children || <CheckIcon className='w-3 h-3' />
    return <Checkbox.Indicator asChild {...props} ref={ref} children={children} className={twMerge(indicatorClass, props.className)} />
  }
)

export const checkboxClasses = { rootClass, indicatorClass }