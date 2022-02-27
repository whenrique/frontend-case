import React from 'react'
import PropTypes from 'prop-types'

import S from './Grid.style'

const Row = ({ direction = 'row', children, className, ...props }) =>
  <S.Row className={className} direction={direction} {...props}>{children}</S.Row>

const Column = ({ size, children, className, ...props }) =>
  <S.Column className={className} size={size} {...props}>{children}</S.Column>

Row.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

Column.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string
}

export { Row, Column }
