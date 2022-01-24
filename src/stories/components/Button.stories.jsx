/** @jsx h */
import { h } from 'preact';
import { Button } from '../../components/button/Button';

// More on default export: https://storybook.js.org/docs/preact/writing-stories/introduction#default-export
export default {
  title: 'Foundations/Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/preact/api/argtypes
  argTypes: {
    label: {
      defaultValue: 'Button',
      description: 'Text inside button',
      control: 'text',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'Button'
        }
      }
    },
    variant: {
      description: 'Sets the button variant',
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    leftIcon: {
      description: 'Some Description',
      control: 'select',
      options: ['none', 'something', 'something else'],
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'None'
        }
      }
    },
    colored: {
      description: 'Determines if element is colored',
      control: 'select',
      options: [false, true],
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      description: 'Determines if the element is disabled',
      control: 'select',
      options: [false, true],
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    isLoading: {
      description: 'Determines if the element is in a loading state',
      control: 'select',
      options: [false, true],
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    onClick: {
      description: 'Function that is being called when clicking the button',
      action: 'onClick action',
      table: {
        type: {
          summary: 'function'
        },
        defaultValue: {
          summary: 'None'
        }
      }
    },
  },
};

// More on component templates: https://storybook.js.org/docs/preact/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/preact/writing-stories/args
Default.args = {
  label: 'Button',
};
