import React from 'react'

import S from './Filter.style'

const Filter = () => (
  <S.Filter forwardedAs='ul'>
    <S.FilterItem forwardedAs='li' size={1}>Tudo</S.FilterItem>
    <S.FilterItem forwardedAs='li' size={1}>Entrada</S.FilterItem>
    <S.FilterItem forwardedAs='li' size={1}>Saída</S.FilterItem>
    <S.FilterItem forwardedAs='li' size={1}>Futuro</S.FilterItem>
  </S.Filter>
)

export default Filter