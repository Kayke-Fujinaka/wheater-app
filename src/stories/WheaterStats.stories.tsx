import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { WheaterStats } from '../components/WheaterStats'

export default {
  title: 'Components/WheaterStats',
  component: WheaterStats,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    backgrounds: {
      values: [
        {
          name: 'bgColor',
          value: 'var(--bg-grey-color)'
        }
      ]
    }
  }
} as ComponentMeta<typeof WheaterStats>

const Template: ComponentStory<typeof WheaterStats> = () => (
  <WheaterStats
    temperatureCelcius={18}
    humidity={51}
    wind={13}
    conditions={'Poucas nuvens'}
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
