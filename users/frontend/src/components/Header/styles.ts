import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;

  height: 3rem;

  background-color: #c5d0e8;

  z-index: 1000;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  margin-right: 3rem;

  width: 100%;
  height: 100%;

  padding: 1rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Button = styled.button`
  font-size: 1.3rem;
  font-weight: bold;
  color: #000000;

  border: none;
  background: transparent;

  transform: filter 0.2s;

  :hover {
    color: #b22222;
  }
`;
