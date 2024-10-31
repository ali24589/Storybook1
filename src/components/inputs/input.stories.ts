import { Meta, StoryObj } from "@storybook/react";
import Input from "./input";
import { IoMdSend } from "react-icons/io";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Input",
  component: Input,
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    type: "text",
    variants: "Plain",
  },
};
export const Rounded: Story = {
  args: {
    type: "text",
    variants: "Rounded",
  },
};
export const IconButton: Story = {
  args: {
    type: "search",
    icon: IoMdSend,
  },
};
