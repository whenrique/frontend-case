import React from 'react'

import { Column } from 'components/Grid'
import S from './Header.style'

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper direction='row'>
        <Column size={1}>
          <S.PageTitle>Extrato</S.PageTitle>
        </Column>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header