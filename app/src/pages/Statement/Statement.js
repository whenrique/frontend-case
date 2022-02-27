import React from 'react'

import { Column } from 'components/Grid'
import Filter from './components/Filter'
import Search from './components/Search'
import S from './Statement.style'

const Statement = ({ data }) => {
  return (
    <S.Wrapper>
      <Column>
        <Filter />
      </Column>
      <Column>
        <Search />
      </Column>
    </S.Wrapper>
  )
}

export default Statement