import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge'

const Root = Accordion.Root

const Item: React.FC<Accordion.AccordionItemProps> = props => {
  const className = ''
  return <Accordion.Item {...props} className={twMerge(className, props.className)} />
}

const Header: React.FC<Accordion.AccordionHeaderProps> = props => {
  const className = ''
  return <Accordion.Header {...props} className={twMerge(className, props.className)} />
}

const Trigger: React.FC<Accordion.AccordionTriggerProps> = props => {
  const className = ''
  return <Accordion.Trigger {...props} className={twMerge(className, props.className)} />
}

const Content: React.FC<Accordion.AccordionContentProps> = props => {
  const className = ''
  return <Accordion.Content {...props} className={twMerge(className, props.className)}/>
}

export { Root, Item, Header, Trigger, Content }