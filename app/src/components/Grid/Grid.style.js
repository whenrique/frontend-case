import styled from 'styled-components'

const S = {
  Row: styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({ direction }) => direction};
  `,
  Column: styled.div`
    display: flex;
    width: calc(var(--desktop-wrapper) / 10 * ${({ size }) => size });
    margin-left: calc(var(--base) * 3);
    margin-right: calc(var(--base) * 3);

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  `
}

export default S