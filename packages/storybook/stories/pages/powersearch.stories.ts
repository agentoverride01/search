import type { StoryObj, Meta } from '@storybook/angular'
import { defineDefaultArgs } from '@lithium/storybook/utils'

import { SearchInputComponent } from '@lithium/components/search-input'
import { AlertComponent  } from  '@lithium/components/alert'
import { NotesComponent  } from '@lithium/components/notes'

import { PowerSearch } from './powersearch'
import { PowerSearchModal} from './powersearch-modal'

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
        AlertComponent, 
        NotesComponent, 
        PowerSearchModal 
      ]
    }
  })
} as Meta

export const Page: StoryObj = {
  args: {}
}

export const Search: StoryObj = {
  render: () => ({
    template: /* html */`
      <search-input></search-input>
    `
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
      <article>
        <search-input></search-input>
        <alert type="${args.type ?? 'info'}">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged
        </alert>
      </article>
    `,
    styles: [ /* scss */`
      article  {
        display: grid;
        row-gap: 20px;
      }
    `]
  })
}

export const Notes: StoryObj = {
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
      <article>
        <search-input></search-input>
        <notes type="${args.type ?? 'info'}">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially unchanged
        </notes>
      </article>
    `,
    styles: [ /* scss */`
      article  {
        display: grid;
        row-gap: 20px;
      }
    `]
  })
}

export const Modal: StoryObj = {
  render: () => ({
    template: /* html */`
      <powersearch-modal></powersearch-modal>
    `
  })
}