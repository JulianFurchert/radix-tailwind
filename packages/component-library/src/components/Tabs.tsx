import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge'

const Root: React.FC<Tabs.TabsProps> = props => {
  const className = 'flex flex-col'
  return <Tabs.Root {...props} className={twMerge(className, props.className)} />
}

const List: React.FC<Tabs.TabsListProps> = props => {
  const className = 'flex shrink-0 border-b border-gray-200'
  return <Tabs.List {...props} className={twMerge(className, props.className)} />
}

const Trigger: React.FC<Tabs.TabsTriggerProps> = props => {
  const pseudoClass = 'data-active:after:opacity-100 after:opacity-0 after:content=[""] after:absolute after:bg-gray-800 after:bottom-[-9px] after:left-0 after:right-0 after:h-[2px]'
  const className = 'relative bg-white px-2 py-2 my-2 mx-1 first:ml-0 rounded-md flex items-center content-center text-sm leading-none select-none hover:bg-gray-100'
  return <Tabs.Trigger {...props} className={twMerge(className, pseudoClass, props.className)} />
}

const Content: React.FC<Tabs.TabsContentProps> = props => {
  const className = ' flex grow py-4 text-gray-700 bg-white data-inactive:hidden'
  return <Tabs.Content {...props} className={twMerge(className, props.className)} />
}

export { Root, List, Trigger, Content }