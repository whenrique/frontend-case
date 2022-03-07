import styled, { css } from 'styled-components'

const S = {
  Row: styled.div`
    max-width: 100%;
    width: var(--desktop-wrapper);
    display: flex;

    ${({ direction }) => direction && css`
      flex-direction: ${direction};
    `}

    ${({ wrap }) => wrap && css`
      flex-wrap: wrap;
    `}
  `,
  Column: styled.div`
    display: flex;
    width: calc(var(--desktop-wrapper) / 10 * ${({ size }) => size });
    margin-left: calc(var(--base) * 3);
    margin-right: calc(var(--base) * 3);
    align-items: center;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  `
}

export default S