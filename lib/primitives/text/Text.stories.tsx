import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../providers/ThemeProvider';
import Text from './Text';


const meta = {
  component: Text,

  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],

  argTypes: {
    as: {
      control: { type: 'select' },
      options: [
        'p',
        'span',
        'small',
        'strong',
        'em',
        'label',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'sup',
        'sub',
      ],
    },

    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },

    color: {
      control: { type: 'select' },
      options: ['inherit', 'default', 'warning', 'error'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Hello World',
    as: 'p',
    size: 'md',
    color: 'default',
  },
};

export const Heading1: Story = {
  args: {
    children: 'Hello World',
    as: 'h1',
    size: '2xl',
    color: 'default',
  },
};

export const Heading2: Story = {
  args: {
    children: 'Hello World',
    as: 'h2',
    size: 'xl',
    color: 'default',
  },
};

export const Heading3: Story = {
  args: {
    children: 'Hello World',
    as: 'h3',
    size: 'lg',
    color: 'default',
  },
};