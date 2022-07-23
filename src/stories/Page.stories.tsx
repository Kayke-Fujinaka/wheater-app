import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import Home from '../pages/index'

export default {
  title: 'Components/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home />

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
