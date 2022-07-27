import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    /*=========== Colors ===========*/
    --darkest-blue-color: hsla(244, 62%, 15%, 1);
    --bg-grey-color: hsl(214, 41%, 97%);
    --white-color: hsl(0, 0%, 100%);
    --text-black-color: hsl(0, 0%, 0%);
    --text-grey-color: hsl(0, 0%, 59%);
    --card-blue-color: hsl(216, 90%, 65%);

    /*=========== Font Size ===========*/
    --biggest-font-size: 2.5rem;
    --bigger-font-size: 2rem;
    --big-font-size: 1.5rem;
    --medium-font-size: 1.2rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --tooSmall-font-size: .6875rem;

    /*=========== Font Weight ===========*/
    --light: 300;
    --normal: 400;
    --bold: 700;

    /*=========== Media Queries ===========*/
    --xs: '320px';
    --sm: '420px';
    --sml:'650px';
    --md: '768px';
    --mdl: '850px';
    --lg: '1024px';
    --xl: '1280px';
    --xxl: '1536px';
    --fullHD: '1920px';
    --qHD: '2560px';
    --4K: '3840px';
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 720px) {
      font-size: 87.5%; 
    }
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }
  }

  body {
    background-color: var( --bg-grey-color);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Ubuntu', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  img { 
    width: 100%;
    height: auto
  }

  a {
    display: inline-block;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
