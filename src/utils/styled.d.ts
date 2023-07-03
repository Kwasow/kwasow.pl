import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      onBackground: string;
      footer: string;
      icon: string;
    }
  }
}
