import React from 'react'
import S from './Search.style'

const Search = () => (
  <S.SearchControl forwardedAs='form' size='6'>
    <S.SearchIcon />
    <S.SearchInput type='text' placeholder='Pesquisar' />
  </S.SearchControl>
)

export default Search