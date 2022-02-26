import styled from "styled-components";
import { Column, Row } from "components/Grid";

const S = {
  Header: styled.header`
    padding: calc(var(--base-margin) * 4);
    border-bottom: 1px solid var(--color-gray);
  `,
  Wrapper: styled(Row)`
    max-width: var(--desktop-wrapper);
    margin: auto;
  `,
  HeaderInfo: styled(Column)`
    justify-content: flex-end;
  `,
  PageTitle: styled.h1`
    font-size: 22px;
  `
}

export default S