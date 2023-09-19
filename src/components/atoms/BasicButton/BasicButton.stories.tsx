import { Meta, StoryObj } from "@storybook/react";
import BasicButton from "./BasicButton";

export default {
  component: BasicButton,
  args: {
    children: 'buton',
  },
} as Meta<typeof BasicButton>;

export const Default: StoryObj<typeof BasicButton> = {
  args: {
    //
  },
};