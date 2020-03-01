import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-width: 0;
  background-image: linear-gradient(to bottom right, #02985b, #017acb );
  
`;

export const Form = styled.form`
  width: 500px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  img {
    width: 300px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    background: #016d77;
    border-radius: 10px;
    flex: 1;
    height: 50px;
    margin-bottom: 15px;
    padding: 10px 20px;
    color: #FFF;
    font-size: 16px;
    width: 90%;
    
    &::placeholder {
      color: #fff;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #f48712;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  button:hover{
      background: #024959;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;