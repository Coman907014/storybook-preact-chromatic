import { Themes } from "../constants/themes";
import colors from "../constants/colors";
import { useCallback, useEffect } from "preact/hooks";

const useSetTheme: (theme?: Themes) => void = (theme = Themes.LIGHT) => {

  const updateThemeColors = useCallback((themeColors: {[key: string]: string}, rootStyle:  CSSStyleDeclaration) => {
    Object.entries(themeColors)
      .map(([ colorKey, colorValue ]) => rootStyle.setProperty(colorKey, colorValue as string));
}, []);

const updateTheme = useCallback((selectedTheme: Themes) => {
    const rootStyle: CSSStyleDeclaration = (window as any).root?.style;
    rootStyle.setProperty('--small', '650')
    if(Object.values(Themes).indexOf(selectedTheme as Themes) < 0) {
      return console.error(`[Theme Error]: Selected theme is not supported`);
    };

    if(!rootStyle) {
      return console.error(`[Theme Error]: Window root style not available`);
    };

    updateThemeColors(colors[selectedTheme], rootStyle)

}, [(window as any).root?.style]);

useEffect(() => {
  updateTheme(theme)
}, [theme])

return {
  updateTheme
}
}

export default useSetTheme;