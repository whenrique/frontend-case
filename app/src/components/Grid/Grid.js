import React from 'react'
import S from './Grid.style'

const Row = ({ direction, children, className }) =>
  <S.Row className={className} direction={direction}>{children}</S.Row>

const Column = ({ size, children, className }) =>
  <S.Column className={className} size={size}>{children}</S.Column>

export { Row, Column }
