import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

const Root = Accordion.Root

const Item: React.FC<Accordion.AccordionItemProps> = props => {
  return <Accordion.Item {...props} />
}

const Header: React.FC<Accordion.AccordionHeaderProps> = props => {
  return <Accordion.Header {...props} />
}

const Trigger: React.FC<Accordion.AccordionTriggerProps> = props => {
  return <Accordion.Trigger {...props} />
}

const Content: React.FC<Accordion.AccordionContentProps> = props => {
  return <Accordion.Content {...props} />
}

export { Root, Item, Header, Trigger, Content }