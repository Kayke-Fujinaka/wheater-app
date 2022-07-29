import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { CurrentDataTime } from '../components/CurrentDataTime'

export default {
  title: 'Components/CurrentDataTime',
  component: CurrentDataTime,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof CurrentDataTime>

const Template: ComponentStory<typeof CurrentDataTime> = args => (
  <CurrentDataTime {...args} />
)

export const Default = Template.bind({})
Default.decorators = [
  Story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {Story()}
    </div>
  )
]

export const Mobile = Template.bind({})
Mobile.decorators = [
  Story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {Story()}
    </div>
  )
]
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
}
