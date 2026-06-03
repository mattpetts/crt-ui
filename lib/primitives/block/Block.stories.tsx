import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../providers/ThemeProvider';
import Block from './Block';
import Text from '../text/Text';

const meta = {
  component: Block,

  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],

  argTypes: {
    theme: {
      control: { type: 'select' },
      options: [
        'default',
        'warning',
        'error'
      ],
    },
  },
} satisfies Meta<typeof Block>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Text>I am a default theme block</Text>,
    theme: 'default'
  },
};

export const Warning: Story = {
  args: {
    children: <Text>I am a warning theme block</Text>,
    theme: 'warning'
  },
};

export const Error: Story = {
  args: {
    children: <Text>I am an error theme block</Text>,
    theme: 'error'
  },
};