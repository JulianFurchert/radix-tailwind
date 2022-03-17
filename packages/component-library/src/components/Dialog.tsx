import React from 'react';
import * as Dialog from '@radix-ui/react-Dialog';
import { twMerge } from 'tailwind-merge'

const Root: React.FC<Dialog.DialogProps> = props => {
  return <Dialog.Root {...props} />
}

const Trigger: React.FC<Dialog.DialogTriggerProps> = props => {
  const className = ''
  return <Dialog.Trigger {...props} className={twMerge(className, props.className)} />
}

const Portal: React.FC<Dialog.DialogPortalProps> = props => {
  const className = ''
  return <Dialog.Portal {...props} className={twMerge(className, props.className)} />
}

const Overlay: React.FC<Dialog.DialogOverlayProps> = props => {
  const className = 'fixed inset-0 bg-gray-800/20'
  return <Dialog.Overlay {...props} className={twMerge(className, props.className)}/>
}

const Content: React.FC<Dialog.DialogContentProps> = props => {
  const className = 'bg-white rounded-md shadow-xl fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90vw] max-w-[450px] max-h-[85vh] p-6'
  return <Dialog.Content {...props} className={twMerge(className, props.className)}/>
}

const Title: React.FC<Dialog.DialogTitleProps> = props => {
  const className = 'text-xl'
  return <Dialog.Title {...props} className={twMerge(className, props.className)}/>
}

const Description: React.FC<Dialog.DialogDescriptionProps> = props => {
  const className = 'text-sm'
  return <Dialog.Description {...props} className={twMerge(className, props.className)}/>
}

const Close: React.FC<Dialog.DialogCloseProps> = props => {
  const className = ''
  return <Dialog.Close {...props} className={twMerge(className, props.className)}/>
}


export { Root, Trigger, Portal, Overlay, Content, Title, Description, Close }