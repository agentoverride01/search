import '@lithium/elements/layout'
import '@lithium/elements/card'
import '@lithium/elements/avatar'

/* eslint quotes: "off" */
import { type StoryObj, type Meta } from "@storybook/angular"
import { defineDefaultArgs } from '@lithium/storybook/utils'

import { SearchInputComponent } from '@lithium/components/search-input'
import { PowersearchComponent, PowerSearchMyDealComponent, PowersearchResultsComponent } from '@lithium/pages/powersearch'

import { PowerSearchAlert } from './powersearch/powersearch-alert'
import { PowerSearchNotes } from './powersearch/powersearch-notes'
import { PowerSearch } from './powersearch/powersearch'
import { PowerSearchModal } from './powersearch/powersearch-modal'
import { HomePage as PowerSearchHomePage } from './powersearch/powersearch-home'

export type Args = { 
  theme?: string
  type?: string
}

export default {
  title: 'Components/Powersearch',
  component: PowerSearch,
  ...defineDefaultArgs({
    moduleMetadataOptions: {
      imports: [ 
        SearchInputComponent, 
        PowerSearchAlert, 
        PowerSearchNotes, 
        PowerSearchModal,
        PowerSearchHomePage,
        PowersearchComponent,
        PowerSearchMyDealComponent,
        PowersearchResultsComponent
      ]
    }
  })
} as Meta

export const GoogleResults: StoryObj = {
  render: () => ({
    template: /* html */`
      <ps-launch-results></ps-launch-results>
    `
  })
}

export const FirstTimeUser: StoryObj = {
  render: () => ({
    template: `
      <powersearch-modal></powersearch-modal>
    `
  })
}

export const SearchPage: StoryObj = {
  render: () => ({
    template: /* html */`
      <article>
        <search-input></search-input>
        <gl-powersearch></gl-powersearch>
      </article>
    `,
    styles: [ /* scss */ `
      article {
        display: grid;
        grid-template-rows: auto 1fr;
        row-gap: 20px;
      }
    `]
  })
}

export const Alert: StoryObj = {
  args: {
    type: 'info'
  },
  argTypes: {
    type: { 
      options: [ 'info', 'success', 'warning', 'danger' ],
      control: { 
        type: 'select'
      },
      defaultValue: 'info'
    }
  },
  render: (args: Args) => ({
    template: /* html */`
      <powersearch-alert type=${args.type}></powersearch-alert>
    `
  })
}

export const Notes: StoryObj = {
  args: {
    type: 'info'
  },
  argTypes: {
    type: { 
      options: [ 'info', 'success', 'warning', 'danger' ],
      control: { 
        type: 'select'
      },
      defaultValue: 'info'
    }
  },
  render: (args: Args) => ({
    template: /* html */`
       <powersearch-notes type=${args.type}></powersearch-notes>
    `
  })
}