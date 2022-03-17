import React from 'react';
import * as Select from '@radix-ui/react-select';
import { twMerge } from 'tailwind-merge'

const Root: React.FC<Select.SelectProps> = props => {
  return <Select.Root {...props} />
}

const Trigger: React.FC<Select.SelectTriggerProps> = props => {
  const className = ''
  return <Select.Trigger {...props} className={twMerge(className, props.className)} />
}

const Value: React.FC<Select.SelectValueProps> = props => {
  const className = ''
  return <Select.Value {...props} className={twMerge(className, props.className)} />
}

const Icon: React.FC<Select.SelectIconProps> = props => {
  const className = ''
  return <Select.Icon {...props} className={twMerge(className, props.className)} />
}

const Content: React.FC<Select.SelectContentProps> = props => {
  const className = ''
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
  const className = ''
  return <Select.Item {...props} className={twMerge(className, props.className)} />
}

const ItemText: React.FC<Select.SelectItemTextProps> = props => {
  const className = ''
  return <Select.ItemText {...props} className={twMerge(className, props.className)} />
}

const ItemIndicator: React.FC<Select.SelectItemIndicatorProps> = props => {
  const className = ''
  return <Select.ItemIndicator {...props} className={twMerge(className, props.className)} />
}

const Group: React.FC<Select.SelectGroupProps> = props => {
  const className = ''
  return <Select.Group {...props} className={twMerge(className, props.className)} />
}

const Label: React.FC<Select.SelectLabelProps> = props => {
  const className = ''
  return <Select.Label {...props} className={twMerge(className, props.className)} />
}

const Separator: React.FC<Select.SelectSeparatorProps> = props => {
  const className = ''
  return <Select.Separator {...props} className={twMerge(className, props.className)} />
}

export { Root, Trigger, Value, Icon, Content, ScrollUpButton, ScrollDownButton, Viewport, Item, ItemText, ItemIndicator, Group, Label, Separator }