import styled from "styled-components"

import { Column } from "components/Grid"
import {ReactComponent as SearchIcon} from 'pages/Statement/assets/ic_search.svg'

const S = {
  SearchControl: styled(Column)`
    padding-top: calc(var(--base) * 5);
    padding-bottom: calc(var(--base) * 5);
    padding-right: calc(var(--base) * 5);
    padding-left: calc(var(--base) * 5);
    background-color: var(--color-gray-lighten);
    border-radius: calc(var(--base) * 4);
  `,
  SearchIcon: styled(SearchIcon)`
    color: red;
  `,
  SearchInput: styled.input`
    background-color: transparent;
    border: 0;
    color: var(--color-gray-darken);
    margin-left: calc(var(--base) * 6);
    width: 100%;
    font-size: var(--font-size);
  `
}

export default S