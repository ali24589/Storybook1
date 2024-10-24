import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./button";
import { IoMdSend } from "react-icons/io";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Button",
  },
};

export const Delete: Story = {
  args: {
    variant: "delete",
    label: "Button",
  },
};

export const LeftIcon: Story = {
  args: {
    icon: IoMdSend,
    label: "Left",
    iconPosition: "left",
  },
};
export const RightIcon: Story = {
  args: {
    icon: IoMdSend,
    label: "Right",
    iconPosition: "right",
  },
};
