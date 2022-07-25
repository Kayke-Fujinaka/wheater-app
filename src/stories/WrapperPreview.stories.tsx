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
} as ComponentMeta<typeof WrapperPreview>

const Template: ComponentStory<typeof WrapperPreview> = () => <WrapperPreview />

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
