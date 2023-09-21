import { Meta, StoryObj } from "@storybook/react";
import TextField from './TextField';

export default {
  component: TextField,
  args: {
    children: 'button',
  },
} as Meta<typeof TextField>;

export const Default: StoryObj<typeof TextField> = {
  args: {
    //
  },
};
