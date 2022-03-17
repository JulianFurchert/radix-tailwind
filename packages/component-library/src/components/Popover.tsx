import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { twMerge } from 'tailwind-merge'

const Root = Popover.Root

const Anchor = Popover.Anchor

const Trigger: React.FC<Popover.PopoverTriggerProps> = props => {
  const className = ''
  return <Popover.Trigger {...props} className={twMerge(className, props.className)} />
}

const Content: React.FC<Popover.PopoverContentProps> = props => {
  const className = 'px-2 py-1 rounded-md bg-white text-sm shadow-md'
  return <Popover.Content {...props} className={twMerge(className, props.className)} />
}

const Arrow: React.FC<Popover.PopoverArrowProps> = props => {
  const className = 'fill-white'
  return <Popover.Arrow {...props} className={twMerge(className, props.className)} />
}

export { Root, Anchor, Trigger, Content, Arrow }