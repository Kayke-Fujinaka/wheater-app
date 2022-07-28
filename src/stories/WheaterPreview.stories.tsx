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

interface WheaterPreviewProps {
  conditions: string
  className: string
  day: string
  humidity: number
  onClick: () => void
}

const Template: ComponentStory<typeof WheaterPreview> = (
  props: WheaterPreviewProps
) => (
  <WheaterPreview
    conditions={props.conditions}
    className={props.className}
    day={props.day}
    humidity={props.humidity}
    onClick={props.onClick}
  />
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
