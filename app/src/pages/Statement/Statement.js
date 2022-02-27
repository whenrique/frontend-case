import React from 'react'
import styled from 'styled-components'

import { Column, Row } from 'components/Grid'
import {ReactComponent as SearchIcon} from './assets/ic_search.svg'

const Statement = ({ data }) => {
  return (
    <S.Wrapper>
      <Column>
        <S.Filter forwardedAs='ul'>
          <S.FilterItem forwardedAs='li' size={1}>Tudo</S.FilterItem>
          <S.FilterItem forwardedAs='li' size={1}>Entrada</S.FilterItem>
          <S.FilterItem forwardedAs='li' size={1}>Saída</S.FilterItem>
          <S.FilterItem forwardedAs='li' size={1}>Futuro</S.FilterItem>
        </S.Filter>
      </Column>
      <Column>
        <S.SearchControl forwardedAs='form' size='6'>
          <S.SearchIcon />
          <S.SearchInput type='text' placeholder='Pesquisar' />
        </S.SearchControl>
      </Column>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled(Row)`
    max-width: 800px;
    margin: auto;
  `,
  Filter: styled(Row)`
    list-style: none;
    align-items: center;
  `,
  FilterItem: styled(Column)`
    color: ${({ active }) => active ? 'var(--color-white)' : 'var(--color-highlight)'};
    background-color: ${({ active }) => active ? 'var(--color-highlight)' : 'transparent'};
    border-radius: calc(var(--font-size) * 2);
    padding: 4px 16px;
    cursor: pointer;
    justify-content: center;

    :hover {
      background-color: ${({ active }) => active ? 'var(--color-highlight)' : 'var(--color-soft-blue)'};
    }
  `,
  SearchControl: styled(Column)`
    padding-top: calc(var(--base-margin) * 4);
    padding-bottom: calc(var(--base-margin) * 4);
    padding-right: calc(var(--base-margin) * 4);
    padding-left: calc(var(--base-margin) * 4);
    background-color: var(--color-gray-lighten);
    border-radius: calc(var(--base-margin) + 10px);
  `,
  SearchIcon: styled(SearchIcon)`
    color: red;
  `,
  SearchInput: styled.input`
    background-color: transparent;
    border: 0;
    color: var(--color-gray-darken);
    margin-left: calc(var(--base-margin) * 4);
    width: 100%;
    font-size: var(--font-size)
  `
}

export default Statement