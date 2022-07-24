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
    },
    backgrounds: {
      values: [
        {
          name: 'bgColor',
          value: 'var(--text-grey-color)'
        }
      ]
    }
  }
} as ComponentMeta<typeof WheaterPreview>

const Template: ComponentStory<typeof WheaterPreview> = args => (
  <WheaterPreview {...args} />
)

export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'bgColor' }
}
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
  },
  backgrounds: { default: 'bgColor' }
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
