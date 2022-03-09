import React from 'react'
import S from './Search.style'

const Search = ({ handleFilter }) => (
  <S.SearchControl forwardedAs='form' size='6'>
    <S.SearchIcon />
    <S.SearchInput type='text' placeholder='Pesquisar' onChange={(e) => handleFilter(e)} />
  </S.SearchControl>
)

export default Search