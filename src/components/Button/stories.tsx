import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Qfi7UA7ePdRnGvjRp2qtvK/Storybook?node-id=0%3A1'
  }
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}
