import React from 'react'
import { Story, Meta } from '@storybook/react'

import BreadCrumb, { BreadCrumbProps } from '.'

export default {
  title: 'BreadCrumb',
  component: BreadCrumb,
} as Meta

const Template: Story<BreadCrumbProps> = (args) => <BreadCrumb {...args} />

export const Default = Template.bind({})
Default.args = {
  list: [{ text: 'HOME', path: '/' }, { text: 'storybookのサンプル' }],
}
