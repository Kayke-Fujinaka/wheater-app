import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Container } from '../components/Container'

export default {
  title: 'Container/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    backgrounds: {
      values: [
        {
          name: 'bgColor',
          value: 'var(--darkest-blue-color)'
        }
      ]
    }
  }
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = args => (
  <Container {...args} />
)

export const Default = Template.bind({})
Default.parameters = {
  backgrounds: { default: 'bgColor' }
}

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex'
  },
  backgrounds: { default: 'bgColor' }
}
