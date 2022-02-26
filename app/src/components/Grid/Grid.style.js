import styled from 'styled-components'

const S = {
  Row: styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
  `,
  Column: styled.div`
    display: flex;
    width: calc(var(--desktop-wrapper) / 12 * ${({ size }) => size })
  `
}

export default S