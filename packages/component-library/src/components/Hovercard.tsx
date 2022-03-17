import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { twMerge } from 'tailwind-merge'

const Root = HoverCard.Root

const Trigger: React.FC<HoverCard.HoverCardTriggerProps> = props => {
  const className = ''
  return <HoverCard.Trigger {...props} className={twMerge(className, props.className)} />
}

const Content: React.FC<HoverCard.HoverCardContentProps> = props => {
  const className = 'px-2 py-1 rounded-md bg-white text-sm shadow-md'
  return <HoverCard.Content {...props} className={twMerge(className, props.className)} />
}

const Arrow: React.FC<HoverCard.HoverCardArrowProps> = props => {
  const className = 'fill-white'
  return <HoverCard.Arrow {...props} className={twMerge(className, props.className)} />
}

export { Root, Trigger, Content, Arrow }