import { ReactNode } from 'react';
import { Container } from './styles';

interface IContainerProps {
  children: ReactNode;
}

export function ContainerBody({ children }: IContainerProps) {
  return <Container>{children}</Container>;
}
