import React from 'react'

import defaultProps from './Filter.props'
import S from './Filter.style'

const Filter = ({ items = defaultProps, handleFilter, active }) => {

  return (
    <S.Filter forwardedAs='ul'>
      {items.map(({ label, slug }) => (
        <S.FilterItem 
          forwardedAs='li'
          size={1}
          key={slug}
          active={active === slug}
          onClick={() => handleFilter(slug)}>
            {label}
        </S.FilterItem>
      ))}
    </S.Filter>
  )
}

export default Filter