import React from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge'

const rootClass = ''
export const Root = React.forwardRef<React.ElementRef<typeof RadioGroup.Root>, RadioGroup.RadioGroupProps>(
  (props, ref) => {
    return <RadioGroup.Root {...props} ref={ref} className={twMerge(rootClass, props.className)} />
  }
)

const itemClass = 'flex rounded-full items-center justify-center h-4 w-4 text-white border border-gray-300 data-checked:border-primary-500 data-checked:bg-primary-500'
export const Item = React.forwardRef<React.ElementRef<typeof RadioGroup.Item>, RadioGroup.RadioGroupItemProps>(
  (props, ref) => {
    return <RadioGroup.Item {...props} ref={ref} className={twMerge(itemClass, props.className)} />
  }
)

const indicatorClass = 'rounded-full h-[6px] w-[6px] bg-white'
export const Indicator = React.forwardRef<React.ElementRef<typeof RadioGroup.Indicator>, RadioGroup.RadioGroupIndicatorProps>(
  (props, ref) => {
    return <RadioGroup.Indicator {...props} ref={ref} className={twMerge(indicatorClass, props.className)} />
  }
)

export const checkboxClasses = { rootClass, itemClass, indicatorClass } 