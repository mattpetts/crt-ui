import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../../providers/ThemeProvider';
import { Button, Text } from '../index';

const meta = {
  component: Button,

  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary'
      ],
    },
    width: {
      control: { type: 'select' },
      options: ['full', 'fit'],
    },
    theme: {
      control: { type: 'select' },
      options: ['default', 'warning', 'error'],
    },
    disabled: {
      control: { type: 'select' },
      options: ['true', 'false'],
    },
    glow: {
      control: { type: 'select' },
      options: ['true', 'false'],
    },
    hover: {
      control: { type: 'select' },
      options: ['glitch', 'scanline', 'fill'],
    }
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: <Text>I am a button</Text>,
  },
};

export const Primary: Story = {
  args: {
    children: <Text>I am a primary button</Text>,
    variant: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: <Text>I am a secondary button</Text>,
    variant: 'secondary'
  },
};