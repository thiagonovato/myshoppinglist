import { Container, Slogan, Title } from './styles';

import backgroundImg from '../../assets/background.png';
import { Button } from '../../components/Button';

export default function SignIn() {
  return (
    <Container source={backgroundImg}>
      <Title>My Shopping List</Title>
      <Slogan>Your best list</Slogan>
      <Button title='Entrar com Google' />
    </Container>
  );
}
