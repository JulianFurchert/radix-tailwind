import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { twMerge } from 'tailwind-merge'

const Root = React.forwardRef<React.ElementRef<typeof NavigationMenu.Root>, NavigationMenu.NavigationMenuProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.Root {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

const List = React.forwardRef<React.ElementRef<typeof NavigationMenu.List>, NavigationMenu.NavigationMenuListProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.List {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

const Item = React.forwardRef<React.ElementRef<typeof NavigationMenu.Item>, NavigationMenu.NavigationMenuItemProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.Item {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

const Trigger = React.forwardRef<React.ElementRef<typeof NavigationMenu.Trigger>, NavigationMenu.NavigationMenuTriggerProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.Trigger {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

const Content = React.forwardRef<React.ElementRef<typeof NavigationMenu.Content>, NavigationMenu.NavigationMenuContentProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.Content {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

const Link = React.forwardRef<React.ElementRef<typeof NavigationMenu.Link>, NavigationMenu.NavigationMenuLinkProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.Link {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

const Sub = React.forwardRef<React.ElementRef<typeof NavigationMenu.Sub>, NavigationMenu.NavigationMenuSubProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.Sub {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

const Viewport = React.forwardRef<React.ElementRef<typeof NavigationMenu.Viewport>, NavigationMenu.NavigationMenuViewportProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.Viewport {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

const Indicator = React.forwardRef<React.ElementRef<typeof NavigationMenu.Indicator>, NavigationMenu.NavigationMenuIndicatorProps>(
  (props, ref) => {
    const className = ''
    return <NavigationMenu.Indicator {...props} ref={ref} className={twMerge(className, props.className)} />
  }
)

export { Root, List, Item, Trigger, Content, Link, Sub, Viewport, Indicator }