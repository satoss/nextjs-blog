import React from 'react'
import { Story, Meta } from '@storybook/react'

import Layout, { LayoutProps } from '.'

export default {
  title: 'Layout',
  component: Layout,
} as Meta

const Template: Story<LayoutProps> = (args) => <Layout {...args} />

export const Home = Template.bind({})
Home.args = {
  children: [],
  home: true,
}

export const Article = Template.bind({})
Article.args = {
  children: [],
  title: 'storybookのテスト',
  home: false,
}
