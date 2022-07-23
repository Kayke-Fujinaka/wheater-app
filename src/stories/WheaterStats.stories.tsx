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
    }
  }
} as ComponentMeta<typeof WheaterStats>

const Template: ComponentStory<typeof WheaterStats> = () => <WheaterStats />

export const Default = Template.bind({})
Default.decorators = [
  Story => (
    <div
      style={{
        background: 'hsl(0, 0%, 59%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {Story()}
    </div>
  )
]
