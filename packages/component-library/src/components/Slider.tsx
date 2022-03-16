import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge'

const SliderContext = React.createContext<Slider.SliderProps>({});

const Root: React.FC<Slider.SliderProps> = props => {
  const isVertical = props.orientation === "vertical";

  const horizontalClass = 'relative flex items-center select-none touch-none w-[200px] h-[16px]';
  const verticalClass = 'relative flex items-center select-none touch-none w-[16px] h-[200px] flex-col';

  return (
    <SliderContext.Provider value={props}>
      <Slider.Root {...props} className={twMerge(isVertical ? verticalClass : horizontalClass, props.className)} />
    </SliderContext.Provider>
  )
}

const Track: React.FC<Slider.SliderTrackProps> = props => {
  const sliderProps = React.useContext(SliderContext);
  const isVertical = sliderProps.orientation === "vertical";

  const horizontalClass = 'bg-gray-200 relative grow rounded-full h-[3px]';
  const verticalClass = 'bg-gray-200 relative grow rounded-full w-[3px]';

  return <Slider.Track {...props} className={twMerge(isVertical ? verticalClass : horizontalClass, props.className)} />
}

const Range: React.FC<Slider.SliderRangeProps> = props => {
  const sliderProps = React.useContext(SliderContext);
  const isVertical = sliderProps.orientation === "vertical";

  const horizontalClass = 'absolute bg-blue-600 round-full h-full';
  const verticalClass = 'absolute bg-blue-600 round-full w-full';

  return <Slider.Range {...props} className={twMerge(isVertical ? verticalClass : horizontalClass, props.className)} />
}

const Thumb: React.FC<Slider.SliderThumbProps> = props => {
  return <Slider.Thumb {...props} className={twMerge("block w-[16px] h-[16px] bg-blue-600 shadow-md rounded-full hover:bg-blue-700 focus:shadow-lg", props.className)} />
}

export { Root, Track, Range, Thumb }