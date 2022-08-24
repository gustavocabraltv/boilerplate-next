import { Story, Meta } from '@storybook/react'
import ButtonTest from '.'

export default {
  title: 'ButtonTest',
  component: ButtonTest,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <ButtonTest {...args} />
