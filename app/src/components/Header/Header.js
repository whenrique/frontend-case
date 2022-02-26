import React from 'react'
import S from './Header.style'

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper direction='row'>
        <S.HeaderInfo size={2}>
          <S.PageTitle>Extrato</S.PageTitle>
        </S.HeaderInfo>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header