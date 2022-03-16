import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge'

const Root = Accordion.Root

const Item: React.FC<Accordion.AccordionItemProps> = props => {
  return <Accordion.Item {...props} className={twMerge("", props.className)} />
}

const Header: React.FC<Accordion.AccordionHeaderProps> = props => {
  return <Accordion.Header {...props} className={twMerge("text-2xl font-bold text-green-400", props.className)} />
}

const Trigger: React.FC<Accordion.AccordionTriggerProps> = props => {
  return <Accordion.Trigger {...props} className={twMerge("", props.className)} />
}

const Content: React.FC<Accordion.AccordionContentProps> = props => {
  return <Accordion.Content {...props} className={twMerge("text-xl font-bold text-red-600", props.className)}/>
}

export { Root, Item, Header, Trigger, Content }