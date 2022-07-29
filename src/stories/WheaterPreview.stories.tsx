import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { WheaterPreview } from '../components/WheaterPreview'

export default {
  title: 'Components/WheaterPreview',
  component: WheaterPreview,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof WheaterPreview>

const Template: ComponentStory<typeof WheaterPreview> = args => (
  <WheaterPreview
    conditions={'Poucas nuvens'}
    className={'test-sb'}
    day={'26/07/2022'}
    humidity={41}
    {...args}
  />
)

export const Default = Template.bind({})
Default.decorators = [
  Story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {Story()}
    </div>
  )
]

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  }
}
Mobile.decorators = [
  Story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {Story()}
    </div>
  )
]
