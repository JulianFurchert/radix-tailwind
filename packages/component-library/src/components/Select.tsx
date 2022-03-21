import React from 'react';
import * as Select from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge'
import { buttonClasses } from './Button'
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@heroicons/react/solid'

const Root: React.FC<Select.SelectProps> = props => {
  return <Select.Root {...props} />
}

const Trigger: React.FC<Select.SelectTriggerProps> = props => {
  return <Select.Trigger {...props} className={twMerge(buttonClasses.base,buttonClasses.default, props.className)} />
}

const Value: React.FC<Select.SelectValueProps> = props => {
  const className = ''
  return <Select.Value {...props} className={twMerge(className, props.className)} />
}

const Icon: React.FC<Select.SelectIconProps> = ({children, ...props}) => {
  const className = ''
  children = children || <ChevronDownIcon className='w-4 h-4' />
  return <Select.Icon {...props} children={children} className={twMerge(className, props.className)} />
}

const Content: React.FC<Select.SelectContentProps> = props => {
  const className = 'overflow-hidden bg-white rounded-xl shadow-xl py-2'
  return <Select.Content {...props} className={twMerge(className, props.className)} />
}

const ScrollUpButton: React.FC<Select.SelectScrollUpButtonProps> = props => {
  const className = ''
  return <Select.ScrollUpButton {...props} className={twMerge(className, props.className)} />
}

const ScrollDownButton: React.FC<Select.SelectScrollDownButtonProps> = props => {
  const className = ''
  return <Select.ScrollDownButton {...props} className={twMerge(className, props.className)} />
}

const Viewport: React.FC<Select.SelectViewportProps> = props => {
  const className = ''
  return <Select.Viewport {...props} className={twMerge(className, props.className)} />
}

const Item: React.FC<Select.SelectItemProps> = props => {
  const className = 'text-xs cursor-default rounded-md flex items-center mx-1 py-1 pr-[10px] pl-5 relative focus:bg-primary-500 focus:text-white'
  return <Select.Item {...props} className={twMerge(className, props.className)} />
}

const ItemText: React.FC<Select.SelectItemTextProps> = props => {
  const className = ''
  return <Select.ItemText {...props} className={twMerge(className, props.className)} />
}

const ItemIndicator: React.FC<Select.SelectItemIndicatorProps> = ({children, ...props}) => {
  const className = 'absolute left-1 w-6 inline-flex items-center content-center'
  children = children || <CheckIcon className='w-3 h-3' />
  return <Select.ItemIndicator {...props} children={children} className={twMerge(className, props.className)} />
}

const Group: React.FC<Select.SelectGroupProps> = props => {
  const className = ''
  return <Select.Group {...props} className={twMerge(className, props.className)} />
}

const Label: React.FC<Select.SelectLabelProps> = props => {
  const className = 'text-xs text-gray-500 mx-1 py-1 px-5'
  return <Select.Label {...props} className={twMerge(className, props.className)} />
}

const Separator: React.FC<Select.SelectSeparatorProps> = props => {
  const className = 'h-px bg-gray-200 my-1'
  return <Select.Separator {...props} className={twMerge(className, props.className)} />
}

export { Root, Trigger, Value, Icon, Content, ScrollUpButton, ScrollDownButton, Viewport, Item, ItemText, ItemIndicator, Group, Label, Separator }