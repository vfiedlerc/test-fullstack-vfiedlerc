import styled, { css } from 'styled-components';

interface IProps {
  color: string | undefined;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonForms = styled.button<IProps>`
  width: 10rem;
  height: 2.1rem;

  border-radius: 0.5rem;

  border: none;

  background: #006400;

  ${props =>
    props.color
      ? css`
          color: #ffffff;
          background: ${props.color};
        `
      : css`
          background: #3f3f3f;
        `}

  transform: filter 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;
