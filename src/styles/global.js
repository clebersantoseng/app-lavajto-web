import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

createGlobalStyle`
@font-face {
  font-family: Poppins-Regular;
  src: url('../fonts/poppins/Poppins-Regular.ttf'); 
}

@font-face {
  font-family: Poppins-Medium;
  src: url('../fonts/poppins/Poppins-Medium.ttf'); 
}

@font-face {
  font-family: Poppins-Bold;
  src: url('../fonts/poppins/Poppins-Bold.ttf'); 
}

@font-face {
  font-family: Poppins-SemiBold;
  src: url('../fonts/poppins/Poppins-SemiBold.ttf'); 
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
  
}
body, html {
  
  background: #eee;
  font-family: Poppins-Regular, sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
`;



