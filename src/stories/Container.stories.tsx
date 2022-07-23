import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Container } from '../components/Container'

export default {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = args => (
  <Container {...args} />
)

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
