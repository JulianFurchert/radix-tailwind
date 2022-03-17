import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { twMerge } from 'tailwind-merge'

const Provider = Tooltip.Provider

const Root = Tooltip.Root

const Trigger: React.FC<Tooltip.TooltipTriggerProps> = props => {
  const className = ''
  return <Tooltip.Trigger {...props} className={twMerge(className, props.className)} />
}

const Content: React.FC<Tooltip.TooltipContentProps> = props => {
  const className = 'px-2 py-1 rounded-md bg-gray-900 text-white text-sm shadow-md'
  return <Tooltip.Content {...props} className={twMerge(className, props.className)} />
}

const Arrow: React.FC<Tooltip.TooltipArrowProps> = props => {
  const className = 'fill-gray-900'
  return <Tooltip.Arrow {...props} className={twMerge(className, props.className)} />
}

// export default Object.assign(DialogRoot, { Overlay, Title, Description })

export { Provider, Root, Trigger, Content, Arrow }