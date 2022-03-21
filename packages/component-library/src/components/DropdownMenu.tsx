import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge'

export const Root = React.forwardRef<React.ElementRef<typeof DropdownMenu.Root>, DropdownMenu.DropdownMenuProps>(
  (props, ref) => {
    return <DropdownMenu.Root {...props} />
  }
)

export const Trigger = React.forwardRef<React.ElementRef<typeof DropdownMenu.Trigger>, DropdownMenu.DropdownMenuTriggerProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.Trigger {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const Content = React.forwardRef<React.ElementRef<typeof DropdownMenu.Content>, DropdownMenu.DropdownMenuContentProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.Content {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const Label = React.forwardRef<React.ElementRef<typeof DropdownMenu.Label>, DropdownMenu.DropdownMenuLabelProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.Label {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const Item = React.forwardRef<React.ElementRef<typeof DropdownMenu.Item>, DropdownMenu.DropdownMenuItemProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.Item {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const Group = React.forwardRef<React.ElementRef<typeof DropdownMenu.Group>, DropdownMenu.DropdownMenuGroupProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.Group {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const CheckboxItem = React.forwardRef<React.ElementRef<typeof DropdownMenu.Group>, DropdownMenu.DropdownMenuCheckboxItemProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.CheckboxItem {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const ItemIndicator = React.forwardRef<React.ElementRef<typeof DropdownMenu.ItemIndicator>, DropdownMenu.DropdownMenuItemIndicatorProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.ItemIndicator {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const RadioGroup = React.forwardRef<React.ElementRef<typeof DropdownMenu.RadioGroup>, DropdownMenu.DropdownMenuRadioGroupProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.RadioGroup {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const RadioItem = React.forwardRef<React.ElementRef<typeof DropdownMenu.RadioItem>, DropdownMenu.DropdownMenuRadioItemProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.RadioItem {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const Separator = React.forwardRef<React.ElementRef<typeof DropdownMenu.Separator>, DropdownMenu.DropdownMenuSeparatorProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.Separator {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export const Arrow = React.forwardRef<React.ElementRef<typeof DropdownMenu.Arrow>, DropdownMenu.DropdownMenuArrowProps>(
  (props, ref) => {
    const className = ''
    return <DropdownMenu.Arrow {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)