import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Accordion, Slider, Switch, Tabs, Dialog, Tooltip, Popover, Hovercard, Button, Select, Checkbox, RadioGroup } from 'component-library'
import { BeakerIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
// import * as Select from '@radix-ui/react-select';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-5xl mx-auto'>
        
        <Block title="Hover Card">
          <Button className='mr-2'>
            Sign up for free
          </Button>
          <Button variant='primary' className='mr-2'>
            Sign up for free
          </Button>
          <Button variant='warning' className='mr-2'>
            Warning
          </Button>
          <Button variant='danger' className='mr-2'>
            Error
          </Button>
        </Block>

        <Block title="Radiogroup">
          <RadioGroup.Root>
            <label className='flex items-center my-2 gap-2'>
              <RadioGroup.Item value='item-1'>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
              <span>Item 1</span>
            </label>
            <label className='flex items-center my-2 gap-2'>
              <RadioGroup.Item value='item-2'>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
              <span>Item 2</span>
            </label>
          </RadioGroup.Root>
        </Block>
        <Block title="Checkbox">
          <Checkbox.Root>
            <Checkbox.Indicator />
          </Checkbox.Root>
        </Block>

        <Block title="Accordion">
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="question-a">
                <Accordion.Trigger className='flex content-between items-center w-[100%]'>
                  <div className='flex-grow text-left'>
                    Question A
                  </div>
                  <ChevronDownIcon className='w-6 h-6 data-open-child:rotate-180 ease-in-out duration-300' />
                </Accordion.Trigger>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="question-b">
              <Accordion.Header>
                <Accordion.Trigger className='flex content-between items-center w-[100%]'>
                  <div className='flex-grow text-left'>
                    Question B
                  </div>
                  <ChevronDownIcon className='w-6 h-6 data-open-child:rotate-180 ease-in-out duration-300' />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </Block>

        <Block title="Slider">
          <Slider.Root>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
          </Slider.Root>
        </Block>

        <Block title="Slider vertical">
          <Slider.Root orientation='vertical'>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
          </Slider.Root>
        </Block>

        <Block title="Switch">
          <Switch.Root defaultChecked={true}>
            <Switch.Thumb />
          </Switch.Root>
        </Block>

        <Block title="Tabs">
          <Tabs.Root defaultValue='tab1'>
            <Tabs.List>
              <Tabs.Trigger value='tab1'>Question A</Tabs.Trigger>
              <Tabs.Trigger value='tab2'>Question B</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value='tab1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Tabs.Content>
            <Tabs.Content value='tab2'>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Tabs.Content>
          </Tabs.Root>
        </Block>

        <Block title="Dialog">
          <Dialog.Root >
            <Dialog.Trigger>
              <Button variant='primary'>
                Dialog
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay />
              <Dialog.Content>
                <Dialog.Title>
                  Dialog Title
                </Dialog.Title>
                <Dialog.Description>
                  Dialog Description
                </Dialog.Description>
                <Dialog.Close>
                  Close
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Block>

        <Block title="Tooltip">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Button>
                Tooltip
                <BeakerIcon className="h-5 w-5 ml-1"/>
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <Tooltip.Arrow />
              Tooltip content
            </Tooltip.Content>
          </Tooltip.Root>
        </Block>

        <Block title="Popover">
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button className="pr-2">
                Popover
                <ChevronDownIcon className="h-5 w-5 ml-1"/>
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Arrow />
              Popover content
            </Popover.Content>
          </Popover.Root>
        </Block>

        <Block title="Hover Card">
          <Hovercard.Root>
            <Hovercard.Trigger>Hovercard</Hovercard.Trigger>
            <Hovercard.Content>
              <Hovercard.Arrow />
              Hovercard content
            </Hovercard.Content>
          </Hovercard.Root>
        </Block>

        <Block title="Select">
        <Select.Root defaultValue="blueberry">
          <Select.Trigger aria-label="Food">
            <Select.Value />
            <Select.Icon />
          </Select.Trigger>

          <Select.Content>
            <Select.ScrollUpButton>
              <ChevronUpIcon className='w-5 h-5' />
            </Select.ScrollUpButton>
            <Select.Viewport>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="apple">
                  <Select.ItemText>Apple</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="banana">
                  <Select.ItemText>Banana</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="blueberry">
                  <Select.ItemText>Blueberry</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="grapes">
                  <Select.ItemText>Grapes</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="pineapple">
                  <Select.ItemText>Pineapple</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
              </Select.Group>

              <Select.Separator />

              <Select.Group>
                <Select.Label>Vegetables</Select.Label>
                <Select.Item value="aubergine">
                  <Select.ItemText>Aubergine</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="broccoli">
                  <Select.ItemText>Broccoli</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="carrot" disabled>
                  <Select.ItemText>Carrot</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="courgette">
                  <Select.ItemText>Courgette</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="leek">
                  <Select.ItemText>leek</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
              </Select.Group>

              <Select.Separator />

              <Select.Group>
                <Select.Label>Meat</Select.Label>
                <Select.Item value="beef">
                  <Select.ItemText>Beef</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="chicken">
                  <Select.ItemText>Chicken</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="lamb">
                  <Select.ItemText>Lamb</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
                <Select.Item value="pork">
                  <Select.ItemText>Pork</Select.ItemText>
                  <Select.ItemIndicator/>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton>
              <ChevronDownIcon className='w-5 h-5' />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Root>
        </Block>
      </main>
    </div>
  )
}

type BlockProps = {
  title: string;
}

const Block: React.FC<BlockProps> = ({title, children}) => {
  return (
    <div className=' my-14'>
      <h2 className="text-xl text-gray-800">
        {title}
      </h2>
      <div className="w-full h-px bg-gray-200 mt-2 mb-6" />
      <div className="p-4 bg-white border border-gray-200 rounded-lg border-dashed">
        {children}
      </div>
    </div>
  )
}

export default Home