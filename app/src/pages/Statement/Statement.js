import React from 'react'
import PropTypes from 'prop-types'

import { Column } from 'components/Grid'
import Filter from './components/Filter'
import Search from './components/Search'
import Summary from './components/Summary'

import S from './Statement.style'

const Statement = ({ data }) => {
  if(!data) { return null }

  const { results } = data

  return (
    <>
      <S.Wrapper>
        <Column size={4}>
          <Filter />
        </Column>
        <Column size={6}>
          <Search />
        </Column>
      </S.Wrapper>
      <S.Wrapper wrap>
        {results.map((props, index) => (
          <Summary {...props} headings={index === 0} key={props.items[index]} />
        ))}
      </S.Wrapper>
    </>
  )
}

Statement.propTypes = {
  data: PropTypes.array.isRequired
}

export default Statement