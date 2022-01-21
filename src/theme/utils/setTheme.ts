import colors from "../constants/colors";
import { Themes } from "../constants/themes";

const setTheme: (theme?: Themes) => void = (theme = Themes.LIGHT) => {
  const rootStyle: CSSStyleDeclaration = document.documentElement.style;

    if(Object.values(Themes).indexOf(theme as Themes) < 0) {
      return console.error(`[Theme Error]: Selected theme is not supported`);
    };

    Object.entries(colors[theme])
      .map(([ colorKey, colorValue ]) => rootStyle.setProperty(colorKey, colorValue as string));
}


export default setTheme;