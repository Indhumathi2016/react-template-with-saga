import { createGlobalStyle } from "styled-components";
import variables from "styles/variables";

const GlobalStyles = createGlobalStyle`
/********** Add Your Global CSS Here **********/

body {
  -webkit-overflow-scrolling: touch;
}

html h1,
html h2,
html h3,
html h4,
html h5,
html h6,
html a,
html p,
html li,
input,
textarea,
span,
div,
html,
body,
html a {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  color: ${variables.TEXT_COLOR};
}

html ul {
  -webkit-padding-start: 0px;
  list-style: none;
  margin-bottom: 0;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
body {
  height: 100%;
  padding: 30px;
}
.m-t-20 {
  margin-top: 20px;
}
.ant-btn-primary {
    span {
      color: ${variables.WHITE_COLOR}
     }
}
.ant-form-item-explain {
    div{
      color: ${variables.DANGER_COLOR}
    }
}`;

export default GlobalStyles;
