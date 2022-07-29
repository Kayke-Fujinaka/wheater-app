import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { LoadingScreen } from '../components/Loading'

export default {
  title: 'Components/Loading',
  component: LoadingScreen,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof LoadingScreen>

const Template: ComponentStory<typeof LoadingScreen> = () => <LoadingScreen />

export const Default = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
}
