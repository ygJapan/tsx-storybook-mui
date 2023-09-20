import { Meta, StoryObj } from "@storybook/react";
import LaneSelectLabel from "./LaneSelectLabel";

export default {
  component: LaneSelectLabel,
  args: {
    children: 'button',
  },
} as Meta<typeof LaneSelectLabel>;

export const Default: StoryObj<typeof LaneSelectLabel> = {
  args: {
    //
  },
};