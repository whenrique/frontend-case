import { createGlobalStyle } from 'styled-components'
import Variables from './variables'

const GlobalStyles = createGlobalStyle`  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--font-family-primary);
  }

  ${Variables}
`

export default GlobalStyles