import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      onBackground: string;
      footer: string;
      onFooterHover: string;
      icon: string;
    }
  }
}
