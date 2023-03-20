import toast, { Toaster } from 'react-hot-toast';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Body } from '../../components/Body';
import { Title } from '../../components/Title';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Label } from './styles';

export function CreateUser() {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [admin, setAdmin] = useState<boolean>(false);

  const { user: user_info } = useAuth();

  const navigate = useNavigate();

  const createUser = useCallback(async () => {
    try {
      await api.post('/user/create', {
        password,
        email,
        name,
        admin,
      });

      navigate('/auth/dashboard');
    } catch (error) {
      toast.error('Ocorreu algum erro na criação do usuário!');
    }
  }, [admin, email, name, navigate, password]);

  const handleInputChange = useCallback(async checked_value => {
    setAdmin(checked_value);
  }, []);

  return (
    <Body>
      <Toaster position="top-right" reverseOrder={false} />

      {user_info.user.admin ? (
        <>
          <Title name="Cadastrar usuário" />
          <Input type="text" label="Nome" value={name} setValue={setName} />
          <Input
            type="password"
            label="Senha"
            value={password}
            setValue={setPassword}
          />
          <Input type="text" label="E-mail" value={email} setValue={setEmail} />

          <Label>
            Admin:
            <input
              type="checkbox"
              value=""
              onChange={() => handleInputChange(!admin)}
            />
          </Label>

          <Button name="Cadastrar" onClick={createUser} color="#006600" />
        </>
      ) : (
        <Title name="Acesso negado!" />
      )}
    </Body>
  );
}
