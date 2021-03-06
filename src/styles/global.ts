import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --background:#F0F2F5;
    --text:#969CB3;
    --title:#363F5F;
    --shape:#FFFFFF;
    --red:#E62E4D;
    --green:#33CC95;
    --blue: #5429CC;
    --blue-light: #6933FF;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .react-modal-overlay {
    background: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;