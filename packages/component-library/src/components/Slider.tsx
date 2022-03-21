import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge'

const Root: React.FC<Slider.SliderProps> = props => {
  const className = 'relative flex items-center select-none touch-none data-horizontal:w-[200px] data-horizontal:h-[16px] data-vertical:w-[16px] data-vertical:h-[200px] data-vertical:flex-col'
  return <Slider.Root {...props} className={twMerge(className, props.className)} />
}

const Track: React.FC<Slider.SliderTrackProps> = props => {
  const className = 'bg-gray-200 relative grow rounded-full data-horizontal:h-[3px] data-vertical:w-[3px]'
  return <Slider.Track {...props} className={twMerge(className, props.className)} />
}

const Range: React.FC<Slider.SliderRangeProps> = props => {
  const className = 'absolute bg-primary-600 round-full data-horizontal:h-full data-vertical:w-full'
  return <Slider.Range {...props} className={twMerge(className, props.className)} />
}

const Thumb: React.FC<Slider.SliderThumbProps> = props => {
  const className = 'block w-[16px] h-[16px] bg-primary-600 shadow-md rounded-full hover:bg-primary-700 focus:shadow-lg'
  return <Slider.Thumb {...props} className={twMerge(className, props.className)} />
}

export { Root, Track, Range, Thumb }