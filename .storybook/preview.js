/** @jsx h */
import { h } from 'preact';
import addons from '@storybook/addons';
import { addDecorator } from '@storybook/preact';
import { withDesign } from 'storybook-addon-designs'
import { useDarkMode } from 'storybook-dark-mode';

import setTheme from '../src/theme/utils/setTheme';

addDecorator(withDesign)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true }
}

export const decorators = [
  (Story, props) => {

    setTheme();

    useDarkMode() ? setTheme('dark') : setTheme('light');

    return (
      <div style={{ maxWidth: '1200px', margin: 'auto' }}>
        <div style={{ marginTop: '20px' }}>
          <Story {...props}/>
        </div>
      </div>
    )
  }
]