import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { WrapperPreview } from '../components/WrapperPreview'

export default {
  title: 'Components/WrapperPreview',
  component: WrapperPreview,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof WrapperPreview>

const Template: ComponentStory<typeof WrapperPreview> = () => <WrapperPreview />

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
