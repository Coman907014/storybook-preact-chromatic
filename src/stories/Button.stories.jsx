/** @jsx h */
import { h } from 'preact';
import Button from '../components/button/Button';
import LayoutContainer from '../components/layoutContainer/LayoutContainer'
// More on default export: https://storybook.js.org/docs/preact/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/preact/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
  },
  decorators: []
};

// More on component templates: https://storybook.js.org/docs/preact/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/preact/writing-stories/args
Primary.args = {
  primary: true,
  text: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  text: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  text: 'Button',
};
