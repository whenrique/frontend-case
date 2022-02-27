import React from 'react'
import Header from 'components/Header'
import styled from 'styled-components'

const Layout = ({ children }) => (
  <S.Layout>
    <Header />
    {children}
  </S.Layout>
)

const S = {
  Layout: styled.main`
    display: flex;
    flex-direction: column;
  `
}

export default Layout