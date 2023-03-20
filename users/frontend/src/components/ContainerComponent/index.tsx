import { ReactNode } from 'react';
import { Container } from './styles';

interface IContainerProps {
  children: ReactNode;
}

export function ContainerComponent({ children }: IContainerProps) {
  return <Container>{children}</Container>;
}
