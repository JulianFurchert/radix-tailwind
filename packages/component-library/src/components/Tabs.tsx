import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge'

const Root: React.FC<Tabs.TabsProps> = props => {
  const className = 'flex flex-col w-[200px] shadow-lg'
  return <Tabs.Root {...props} className={twMerge(className, props.className)} />
}

const List: React.FC<Tabs.TabsListProps> = props => {
  const className = 'flex shrink-0 border-b-1 border-primary-500'
  return <Tabs.List {...props} className={twMerge(className, props.className)} />
}

const Trigger: React.FC<Tabs.TabsTriggerProps> = props => {
  const className = 'bg-white px-2 h-[45px] flex flex-1 items-center content-center text-lg leading-none select-none hover:bg-gray-200 data-active:bg-primary-200'
  return <Tabs.Trigger {...props} className={twMerge(className, props.className)} />
}

const Content: React.FC<Tabs.TabsContentProps> = props => {
  const className = ' flex grow p-4 bg-white data-inactive:hidden'
  return <Tabs.Content {...props} className={twMerge(className, props.className)} />
}

export { Root, List, Trigger, Content }