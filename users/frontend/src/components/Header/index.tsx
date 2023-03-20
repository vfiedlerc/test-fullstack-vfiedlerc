import { useAuth } from '../../hooks/useAuth';
import { Container, ContainerButtons, Button } from './styles';
import logout from '../../assets/logout.png';

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <ContainerButtons>
        <Button onClick={signOut}>
          <img src={logout} alt="Sair" />
        </Button>
      </ContainerButtons>
    </Container>
  );
}
