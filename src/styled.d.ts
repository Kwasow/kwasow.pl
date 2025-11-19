import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      altBackground: string;
      onBackground: string;
      footer: string;
      onFooterHover: string;
      icon: string;
    }
  }
}
