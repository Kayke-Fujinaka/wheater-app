import { ComponentStory, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Search } from '../components/Search'

export default {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  }
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = args => <Search {...args} />

export const Default = Template.bind({})
Default.args = {
  htmlFor: 'label',
  name: 'search',
  id: 'search',
  type: 'search',
  placeholder: 'Insira uma Cidade'
}
Default.decorators = [
  Story => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
Mobile.args = {
  htmlFor: 'label',
  name: 'search',
  id: 'search',
  type: 'search',
  placeholder: 'Insira uma Cidade'
}
