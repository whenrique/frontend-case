import styled from "styled-components";

import { Row } from "components/Grid";

const S = {
  Header: styled.header`
    padding: calc(var(--base) * 6);
    margin-bottom: calc(var(--base) * 9);
    border-bottom: 1px solid var(--color-gray);
  `,
  Wrapper: styled(Row)`
    max-width: var(--desktop-wrapper);
    margin: auto;
  `,
  PageTitle: styled.h1`
    font-size: 22px;
  `
}

export default S