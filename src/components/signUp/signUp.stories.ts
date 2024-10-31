import { StoryObj, Meta } from "@storybook/react/*";
import SignUp from "./signUp";
import { fn } from "@storybook/test";

const meta = {
  title: "components/SignUp",
  component: SignUp,
  args: { onChange: fn(), onClick: fn() },
} satisfies Meta<typeof SignUp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const valid: Story = {
  args: {
    btnLabel: "sign Up",
    passwordType: "password",
    nameType: "text",
    namePlaceholder: "Enter your full name",
    passwordPlaceholder: "Enter the password",
  },
};
