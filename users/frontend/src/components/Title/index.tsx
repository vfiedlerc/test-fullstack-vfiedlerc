import { Container, Text } from './styles';

interface ITitleProps {
  name: string;
}

export function Title({ name }: ITitleProps) {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
}
