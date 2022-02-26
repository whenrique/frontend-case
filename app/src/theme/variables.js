import { css } from "styled-components";

const Variables = ({ theme }) => css`
  :root {
    --color-primary: '#3B3B3B';
    --color-highlight: '#FE3E6D';
    --color-gray: '#6B7076';
    --color-soft-blue: '#EAF7FF';
    --color-white: '#fff';
    --font-family-primary: sans-serif;
    --font-size: '16px';
    --font-normal: '400';
    --font-bold: '800';
    --base-margin: '6px';
  }
)`

export default Variables