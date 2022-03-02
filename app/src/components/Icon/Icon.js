import React from 'react'
import styled, { css } from 'styled-components'

const Icon = ({ children, ...props }) => (
  <S.Wrapper {...props}>
    {children}
  </S.Wrapper>
)

const S = {
  Wrapper: styled.div`
    width: 32px;
    height: 32px;
    background-color: var(--color-soft-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ rounded }) => rounded && '100%'};

    ${({ detail }) => detail && css`
      margin-right: 16px;
    `}
  `
}

export default Icon
