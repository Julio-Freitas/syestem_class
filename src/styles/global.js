import styled, { createGlobalStyle } from 'styled-components';
import * as Colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`


*{
    margin: 0;
    padding:0;
    outline: none;
    box-sizing: border-box
  }
  body{
    font-family:'Roboto', sans-serif;
    background: ${Colors.primaryDarkColor};
    color: ${Colors.primaryColor};
  }

  html, body, #root{
    height:100%;
  }

  a{
    text-decoration: none;
    color: ${Colors.primaryColor};
  }
  input{
    border: none;
  }
  ul {
    list-style: none;
  }
body  .Toastify  .Toastify__toast--success{
  background: ${Colors.succsessColor};
  }
  body  .Toastify  .Toastify__toast--error{
  background: ${Colors.errorColor};
  }
`;
export const ContainerGlobal = styled.section`
    max-width: 500px;
    background-color: #ffe;
    margin: 30px auto;
    border-radius: 4px;
    padding: 10px;
`;
