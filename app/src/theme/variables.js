import { css } from "styled-components";

const Variables = ({ theme }) => css`
  :root {
    --desktop-wrapper: 800px;
    --color-primary: #3B3B3B;
    --color-highlight: #FE3E6D;
    --color-gray-darken: #6B7076;
    --color-gray: #DEE4E9;
    --color-gray-lighten: #F0F4F8;
    --color-soft-blue: #EAF7FF;
    --color-white: #fff;
    --font-family-primary: sans-serif;
    --font-size: 16px;
    --font-normal: 400;
    --font-bold: 800;
    --base-margin: 6px;
  }
)`

export default Variables