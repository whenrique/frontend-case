import styled from 'styled-components'

import {Row, Column} from 'components/Grid'

const S = {
  Filter: styled(Row)`
    list-style: none;
    align-items: center;
  `,
  FilterItem: styled(Column)`
    color: ${({ active }) => active ? 'var(--color-white)' : 'var(--color-highlight)'};
    background-color: ${({ active }) => active ? 'var(--color-highlight)' : 'transparent'};
    border-radius: calc(var(--font-size) * 2);
    padding: 4px 16px;
    cursor: pointer;
    justify-content: center;

    :hover {
      background-color: ${({ active }) => active ? 'var(--color-highlight)' : 'var(--color-soft-blue)'};
    }
  `
}

export default S