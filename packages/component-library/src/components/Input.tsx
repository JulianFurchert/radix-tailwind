import React from 'react';
import { twMerge } from 'tailwind-merge'
import classNames from '../utils/classNames'

type InputState = {
  hasLeadingIcon: boolean,
  hasTrailingIcon: boolean,
}

const defaulState: InputState = {
  hasLeadingIcon: false,
  hasTrailingIcon: false,
}

const InputContext = React.createContext<[InputState, React.Dispatch<React.SetStateAction<InputState>>]>([defaulState, () => {}])

type InputProps = React.ComponentPropsWithoutRef<"div">;

const rootClass = 'relative h-9 w-[200px]'

export const Root = React.forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  const state = React.useState<InputState>(defaulState)

  return (
    <InputContext.Provider value={state}>
      <div {...props} ref={ref} className={twMerge(rootClass, props.className)}/>
    </InputContext.Provider>
  )
});


type FieldProps = React.ComponentPropsWithoutRef<"input">;

const fieldClass = 'relative text-sm h-9 w-full flex item-center px-2 focus:border-primary-500 sm:Field-sm border border-gray-300 rounded-md'

export const Field = React.forwardRef<HTMLInputElement, FieldProps>((props, ref) => {
  const [state] = React.useContext(InputContext)

  const classes = classNames(
    fieldClass,
    ['pl-7', state.hasLeadingIcon],
    ['pr-7', state.hasTrailingIcon],
  )

  return <input {...props} ref={ref} className={twMerge(...classes, props.className)} />
});


type LeadingIconProps = React.ComponentPropsWithoutRef<"span">;

const leadingIconClass = 'z-10 absolute flex justify-center items-center w-7 top-0 left-0 bottom-0 pointer-events-none'

export const LeadingIcon = React.forwardRef<HTMLSpanElement, LeadingIconProps>((props, ref) => {
  const [_state, setState] = React.useContext(InputContext)

  React.useEffect(() => {
    setState(state => ({ ...state, hasLeadingIcon: true }))
    return () => setState(state => ({ ...state, hasLeadingIcon: false }))
  },[])

  return <span {...props} ref={ref} className={twMerge(leadingIconClass, props.className)} />
});


type TrailingIconProps = React.ComponentPropsWithoutRef<"span">;

const trailingIconClass = 'z-10 absolute flex justify-center items-center w-7 top-0 right-0 bottom-0 pointer-events-none'

export const TrailingIcon = React.forwardRef<HTMLSpanElement, TrailingIconProps>((props, ref) => {
  const [_state, setState] = React.useContext(InputContext)

  React.useEffect(() => {
    setState(state => ({ ...state, hasTrailingIcon: true }))
    return () => setState(state => ({ ...state, hasTrailingIcon: true }))
  },[])

  return <span {...props} ref={ref} className={twMerge(trailingIconClass, props.className)} />
});