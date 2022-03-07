import styled, { css } from "styled-components";

import { Row, Column } from "components/Grid";

const S = {
  Wrapper: styled.div`
    margin-top:  calc(var(--base) * 10);
  `,
  Header: styled(Row)`
    justify-content: space-between;
    ${({ lastUpdated }) => lastUpdated && (
      css`
      `
    )}
  `,
  Day: styled(Column)`
    padding-left: calc(var(--base) * 5);
    font-size: calc(var(--base) * 3);
    `,
  Headings: styled(Column)`
    font-size: 14px;
    color: ${({ lighten }) => lighten ? 'var(--color-gray-darken)' : 'var(--color-primary)'};

    ${({ extraPadding }) => extraPadding && css`
      padding-left: calc(var(--base) * 11);
    `}
  `,
  Balance: styled(Column)`
    font-size: calc(var(--base) * 3);
  `,
  Summary: styled.div`
    border-radius: calc(var(--base) * 4);
    border: 1px solid var(--color-gray-lighten);
    padding: 24px 16px;
    padding: calc(var(--base) * 6) calc(var(--base) * 4);
    margin-top: 24px;
    position: relative;

    :before,
    :after {
      content: '';
      width: 1px;
      height: 15px;
      position: absolute;
      display: block;
      background-color: var(--color-gray-lighten);
      left: 32px;
      top: -15px;
    },

    :after {
      top: auto;
      bottom: -15px;
    }
  `,
  Details: styled(Row)`
    margin-bottom: calc(var(--base) * 8);

    :last-child {
      margin-bottom: 0;
    }
  `,
  Detail: styled(Column)`
    color: var(--color-gray-darken);


    ${({ entry }) => entry === 'CREDIT' && css`
      color: var(--color-blue);
      font-weight: bold;
      align-content: center;

      :before {
        content: '+';
      }
    `}

    ${({ entry }) => entry === 'DEBIT' && css`
      color: var(--color-highlight);
      font-weight: bold;
      align-content: center;

      :before {
        content: '-';
      }
    `}

    ${({ entry }) => entry === 'REFUNDED' && css`
      text-decoration: line-through;
    `}

    :last-child {
      justify-content: flex-end;
    }
    
    ${({ extraPadding }) => extraPadding && css`
      padding-left: calc(var(--base) * 9);
    `}
  `

}

export default S