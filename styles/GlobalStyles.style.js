import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font-size: 100%;
    font-family: 'Nunito', sans-serif;
    vertical-align: baseline;
  }
/* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    --main-bg: #0d0d0d;
    --secondary-bg: #1d1c24;
    --secondary-lt-bg: #2e2d36;
    --primary: #ffa501;
    --secondary: #fe5404;
    --gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    --gradient-lt: linear-gradient(90deg,rgba(255,165,1,0.8) 0%, rgba(254,84,4,0.8) 100%);
    --gradient-ltst: linear-gradient(90deg,rgba(255,165,1,0) 0%, rgba(254,84,4,0) 100%);
    
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
