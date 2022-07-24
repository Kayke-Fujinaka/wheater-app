import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Graphic } from '../components/Graphic'

export default {
  title: 'Components/Graphic',
  component: Graphic,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof Graphic>

const Template: ComponentStory<typeof Graphic> = () => <Graphic />

export const Default = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
}
