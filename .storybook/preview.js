/** @jsx h */
import { h } from 'preact';
import { addDecorator } from '@storybook/preact';
import { withDesign } from 'storybook-addon-designs'
import setTheme from '../src/theme/utils/setTheme';

addDecorator(withDesign)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story, props) => {
    // We need this in order to make our :root variables available inside Storybook
    setTheme();

    return <div style={{ maxWidth: '1200px', margin: 'auto' }} id="alandala">
      <div style={{ borderRadius: '20px', background: 'lightgray', padding: '10px' }}>
        <label for="theme">Select the theme</label>
        <select
          style={{ marginLeft: '20px' }}
          onChange={(event) => {
            console.log('event', event)
            console.log('event.target.value.toLowerCase()', event.target.value.toLowerCase())
            setTheme(event.target.value.toLowerCase())
          }}
          name="theme">
          <option selected value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Story {...props}/>
      </div>
      </div>
  }
]