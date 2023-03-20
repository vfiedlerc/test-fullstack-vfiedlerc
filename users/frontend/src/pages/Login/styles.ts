import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  margin: auto;
  font-family: 'Poppins', sans-serif;

  background-color: #d7dfef;
  background-size: 100% 100%;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 30rem;
  height: 25rem;

  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #d3dcee;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  gap: 1.5rem;

  a {
    text-decoration: underline;
    border: none;
    background: transparent;

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;

    color: #8f8f8f;
  }
`;
