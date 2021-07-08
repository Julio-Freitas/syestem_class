import styled, { createGlobalStyle } from 'styled-components';
import * as Colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,900;1,100;1,300;1,500;1,700;1,900&display=swap');

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
  button {
    cursor: pointer;
    background-color: ${Colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
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
