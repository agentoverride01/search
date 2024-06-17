import type { StoryObj, Meta } from '@storybook/angular'
import { PowerSearch } from './powersearch'

import { defineDefaultArgs } from '@lithium/storybook/utils'

export default {
  title: 'Components/Powersearch',
  component: PowerSearch,
  ...defineDefaultArgs()
} as Meta

export const Powersearch: StoryObj = {
  args: {}
}