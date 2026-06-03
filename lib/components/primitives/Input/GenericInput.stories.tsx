import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeProvider } from '../../../providers/ThemeProvider';
import { GenericInput } from '../index';

const meta = {
  component: GenericInput,

  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],

  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'number',
        'date',
        'email',
        'password',
        'hidden',
        'month',
      ],
    },
    theme: {
      control: { type: 'select' },
      options: ['default', 'warning', 'error'],
    }
  },
} satisfies Meta<typeof GenericInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'text',
    theme: 'default',
    name: 'test',
  },
};