import React from 'react'
import { Story, Meta } from '@storybook/react'

import Date, { DateProps } from '.'

export default {
  title: 'Date',
  component: Date,
} as Meta

const Template: Story<DateProps> = (args) => <Date {...args} />

export const Default = Template.bind({})
Default.args = {
  dateString: '2021-10-01T07:28:20.826Z',
}
