import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { twMerge } from 'tailwind-merge'

export const Root = Popover.Root

export const Anchor = Popover.Anchor

const triggerClass = ''
export const Trigger: React.FC<Popover.PopoverTriggerProps> = props => {
  return <Popover.Trigger {...props} className={twMerge(triggerClass, props.className)} />
}

const contentClass = 'px-2 py-1 rounded-md bg-white text-sm shadow-md'
export const Content: React.FC<Popover.PopoverContentProps> = props => {
  return <Popover.Content {...props} className={twMerge(contentClass, props.className)} />
}

const arrowClass = 'fill-white'
export const Arrow: React.FC<Popover.PopoverArrowProps> = props => {
  return <Popover.Arrow {...props} className={twMerge(arrowClass, props.className)} />
}

export const popoverClasses = { triggerClass, contentClass, arrowClass }