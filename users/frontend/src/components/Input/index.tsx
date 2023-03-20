import { ChangeEvent, useCallback } from 'react';
import { Container, Label, InputForms } from './styles';

interface IInputProps {
  type: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
}

export function Input({ type, label, value, setValue }: IInputProps) {
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const capture = event.target;

      setValue(capture.value);
    },
    [setValue],
  );

  return (
    <Container>
      <Label>{label}:</Label>
      <InputForms type={type} onChange={handleInputChange} value={value} />
    </Container>
  );
}
