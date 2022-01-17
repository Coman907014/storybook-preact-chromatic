/** @jsx h */
import { h } from 'preact';
import LayoutContainer from '../components/layoutContainer/LayoutContainer'
// More on default export: https://storybook.js.org/docs/preact/writing-stories/introduction#default-export
export default {
  title: 'Components/LayoutContainer',
  component: LayoutContainer,
  // More on argTypes: https://storybook.js.org/docs/preact/api/argtypes
  decorators: []
};

// More on component templates: https://storybook.js.org/docs/preact/writing-stories/introduction#using-args
const Template = () => <LayoutContainer />;

export const Primary = Template.bind({});