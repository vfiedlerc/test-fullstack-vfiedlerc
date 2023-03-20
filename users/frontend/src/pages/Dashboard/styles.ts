import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;

  a {
    text-decoration: none;
    color: #000000;

    padding: 3.5px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .thead-table {
    background: #c5d0e8;
  }

  border-radius: 0.2rem;
`;

export const TableRow = styled.tr`
  align-items: center;

  :nth-child(odd) {
    background: #e2e8f3;
  }

  :nth-child(even) {
    background: #dbe2f0;
  }

  button:nth-child(1) {
    background-color: #006600;
  }

  button:nth-child(2) {
    margin: 0.5rem;
    margin-left: 8px;
    background-color: #9e1c00;
  }
`;

export const Button = styled.button`
  padding: 3.5px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  a {
    background-color: #38548f;
    font-size: 0.8rem;
    text-decoration: none;
    color: #000000;

    padding: 3.5px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ContainerInfoSo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  word-wrap: break-word;

  margin-bottom: 1rem;
`;
