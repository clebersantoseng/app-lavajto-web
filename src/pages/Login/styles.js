import styled from "styled-components";

export const Container = styled.div`
    
    font-family: Roboto, Arial, sans-serif;
    height: 100vh;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom right, #02985b, #017acb );
    img {
        width: 200px;
        margin-bottom: 20px;
      }

h1 {
    font-size: 22px;
    letter-spacing: 1px;
    margin: 20px 0;
    color: white; 
}

h2 {
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: 10px;
    padding-top: 5px;
    color: white; 
}

hr {
    margin-top: 100px;
    margin-bottom: 0px;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
  }

@media only screen and (max-width: 600px) {

    max-width: 600px;

    h2 {
        font-size: 8;
        margin: 5px 5px;
        padding: 20px 20px;
        word-wrap: break-word;
        text-align: center;

    }
  }
  
`;

export const Form = styled.form`
margin: 20px 0;
background-color: none;
padding: 30px 25px;
border: 1px solid #FFF;
border-radius: 15px;
width: 400px;

@media only screen and (max-width: 600px) {
    width: 300px;
}

h3 {
    font-size: 15px;
    letter-spacing: 1px;
    color: #FFD700;
    text-align: center;
    width: 100%;
}
  
.input-block {
    margin-bottom: 20px;
}

.input-block input {
    width: 100%;
    background-image: url()
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 7px;
    font-size: 16px;
    color: #7159c1;
    border-radius: 15px;
    border: 1px solid #ccddef;
    outline-color: #7159c1;
    &::placeholder {
        padding-left: 10px;
    }
}

.btn-login {
    display: block;
    min-width: 120px;
    border: none;
    background-color: #FF7F00;
    color: white;
    font-size: 16px;
    border-radius: 25px;
    margin: auto;
    padding: 7px;
}

.btn-login:hover {
    background-color: #D98719;
}

  

/* ANIMAÇÃO DO FORM */

overflow: hidden;

.moveEffect:nth-child(1) {
    animation-name: move;
    animation-duration: 500ms;
}

.moveEffect:nth-child(2) {
    animation-name: move;
    animation-duration: 500ms;
    animation-delay: 200ms;
    animation-fill-mode: backwards;
}

.btn-login:nth-child(3) {
    animation-name: move;
    animation-duration: 500ms;
    animation-delay: 300ms;
    animation-fill-mode: backwards;
}


@keyframes move {
    from {
        opacity: 0;
        transform: translateX(-35%);
    }
    to {
        opacity: 1
        transform: translateX(0%);
    }
}
`;