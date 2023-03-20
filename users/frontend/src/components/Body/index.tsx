import { ReactNode } from 'react';
import { Header } from '../Header';
import { ContainerComponent } from '../ContainerComponent';
import { Container } from './styles';
import { ContainerBody } from '../ContainerBody';

interface IContainerProps {
  children: ReactNode;
}

export function Body({ children }: IContainerProps) {
  return (
    <ContainerComponent>
      <Header />
      <Container>
        <ContainerBody>{children}</ContainerBody>
      </Container>
    </ContainerComponent>
  );
}
