import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import styled from 'styled-components'

const Layout = ({ children }) => (
  <S.Layout>
    <Header />
    {children}
    <Footer />
  </S.Layout>
)

const S = {
  Layout: styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  `
}

export default Layout