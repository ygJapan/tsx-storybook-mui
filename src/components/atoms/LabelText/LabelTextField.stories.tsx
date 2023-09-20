import { Meta, StoryObj } from "@storybook/react";
import LabelTextField from './LabelTextField';

export default {
  component: LabelTextField,
  args: {
    children: 'button',
  },
} as Meta<typeof LabelTextField>;

export const Default: StoryObj<typeof LabelTextField> = {
  args: {
    //
  },
};
