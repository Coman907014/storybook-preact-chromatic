// We need this in order to make our :root variables available inside Storybook
import { h } from 'preact';
import '../src/theme/index.less';
import useSetTheme from '../src/theme/hooks/useSetTheme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story, props) => {
    const { updateTheme } = useSetTheme();

    return <div style={{ maxWidth: '1279px', margin: 'auto' }}>
      <div style={{ borderRadius: '20px', background: 'lightgray', padding: '10px' }}>
        <label for="theme">Select the theme</label>
        <select
          style={{ marginLeft: '20px' }}
          onChange={(event) => updateTheme(event.target.value.toLowerCase())}
          name="theme">
          <option selected>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div style={{ marginTop: '20px' }}>
        <Story {...props}/>
      </div>
      </div>
  }
]