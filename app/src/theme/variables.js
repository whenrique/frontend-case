import { css } from "styled-components";

const Variables = ({ theme }) => css`
  :root {
    --base: 4px;
    --desktop-wrapper: 1035px;
    --color-primary: #3B3B3B;
    --color-highlight: #FE3E6D;
    --color-gray-darken: #6B7076;
    --color-gray: #DEE4E9;
    --color-gray-lighten: #F0F4F8;
    --color-blue: #1A93DA;
    --color-soft-blue: #EAF7FF;
    --color-white: #fff;
    --font-family-primary: sans-serif;
    --font-size: calc(var(--base) * 4);
    --font-normal: 400;
    --font-bold: 800;
  }
)`

export default Variables