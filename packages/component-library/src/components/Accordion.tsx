import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge'

type AccordionProps = React.ComponentProps<typeof Accordion.Root>;

const Root = React.forwardRef<React.ElementRef<typeof Accordion.Root>, AccordionProps>((props, ref) => {
  const className = 'px-2'
  return <Accordion.Root {...props} ref={ref} className={twMerge(className, props.className)} />
})

const Item: React.FC<Accordion.AccordionItemProps> = props => {
  const className = 'border-b first:border-t border-gray-300 py-4'
  return <Accordion.Item {...props} className={twMerge(className, props.className)} />
}

const Header: React.FC<Accordion.AccordionHeaderProps> = props => {
  const className = 'text-xl font-medium'
  return <Accordion.Header {...props} className={twMerge(className, props.className)} />
}

const Trigger: React.FC<Accordion.AccordionTriggerProps> = props => {
  const className = 'text-xl font-medium'
  return <Accordion.Trigger {...props} className={twMerge(className, props.className)} />
}

const Content: React.FC<Accordion.AccordionContentProps> = props => {
  const className = 'pt-4 pb-2 text-base text-gray-500'
  return <Accordion.Content {...props} className={twMerge(className, props.className)}/>
}

export { Root, Item, Header, Trigger, Content }