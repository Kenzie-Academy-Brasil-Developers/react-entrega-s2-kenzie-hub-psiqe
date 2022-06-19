import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap');  
*{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --idPrimary: #FF577F;
    --idPrimaryFocus: #FF427F;
    --idPrimaryNegative: #59323F;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --sucess: #3FE864;
    --failure:#E83F5B;
  }

  body {
 
    background: var(--grey-4);
    display:flex;
    align-items: center;
    justify-content: center;
  };

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size:1rem;
    border-color: #fff;
  };
  h1.h2.h3,h4,h5,h6 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  };
  a {
    text-decoration: none;
  }
`