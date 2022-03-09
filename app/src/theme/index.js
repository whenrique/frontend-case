import { createGlobalStyle } from 'styled-components'
import Variables from './variables'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--font-family-primary);
  }

  ${Variables}
`

export default GlobalStyles