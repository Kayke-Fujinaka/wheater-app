import { Story, ComponentMeta } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { Search } from '.'

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

const Template: Story<typeof Search> = () => <Search />

export const Default = Template.bind({})
