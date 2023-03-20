import { Container, ButtonForms } from './styles';

interface IInputProps {
  name: string;
  onClick: () => void;
  color?: string;
}

export function Button({ name, onClick, color }: IInputProps) {
  return (
    <Container>
      <ButtonForms onClick={onClick} color={color || undefined}>
        {name}
      </ButtonForms>
    </Container>
  );
}
