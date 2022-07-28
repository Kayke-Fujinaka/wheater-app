import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { GraphicChart } from '../components/Graphic'

export default {
  title: 'Components/Graphic',
  component: GraphicChart,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof GraphicChart>

const Template: ComponentStory<typeof GraphicChart> = () => <GraphicChart />

export const Default = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
}
