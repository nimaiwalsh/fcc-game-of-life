import { injectGlobal } from 'react-emotion';

export const globalStyle = injectGlobal`
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #524763;
  }

  #root {
    height: 100%;
  }
`