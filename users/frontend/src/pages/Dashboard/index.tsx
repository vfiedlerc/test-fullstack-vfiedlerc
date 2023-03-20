import toast, { Toaster } from 'react-hot-toast';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Body } from '../../components/Body';
import { Title } from '../../components/Title';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import {
  Table,
  Button,
  TableRow,
  ButtonContainer,
  ContainerInfoSo,
} from './styles';

interface ip {
  name: string;
  address: string[];
}

export interface IInfoSODTO {
  process: string;
  memory: number;
  memory_free: number;
  disk: string[];
  ips: ip[];
}

interface IUser {
  id: string;
  name: string;
  email: string;
  admin: boolean;
}

export function Dashboard() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [data, setData] = useState<IInfoSODTO>({} as IInfoSODTO);

  const { user: user_info } = useAuth();

  useEffect(() => {
    api.get(`/user`).then(response => {
      setUsers(response.data);
    });
  }, [user_info]);

  useEffect(() => {
    api.get(`/info-so`).then(response => {
      setData(response.data);
    });
  }, [user_info]);

  const deleteUser = useCallback(
    async (id: string) => {
      if (!user_info?.user.admin) {
        return;
      }

      try {
        await api.delete(`/user/${id}`);

        const findUsers = users.filter(user => user.id !== id);

        setUsers(findUsers);

        toast.success('Usuário deletado com sucesso!');
      } catch (error) {
        toast.error('Ocorreu algum erro na deleção do usuário!');
      }
    },
    [user_info, users],
  );

  return (
    <Body>
      <Toaster position="top-right" reverseOrder={false} />
      <Title name="DASHBOARD" />
      <Table>
        <thead>
          <tr className="thead-table">
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>TIPO DE USUÁRIO</th>
            {user_info.user.admin && <th>AÇÕES</th>}
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <TableRow key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.admin ? 'Administrador' : 'Padrão'}</td>
                {user_info.user.admin && (
                  <td>
                    <Button type="button">
                      <Link
                        to="/auth/edit-user"
                        state={user.id}
                        id={user.id.toString()}
                      >
                        Editar
                      </Link>
                    </Button>
                    <Button type="button" onClick={() => deleteUser(user.id)}>
                      Excluir
                    </Button>
                  </td>
                )}
              </TableRow>
            );
          })}
        </tbody>
      </Table>
      {user_info.user.admin && (
        <ButtonContainer>
          <Link to="/auth/create-user" id="user">
            Cadastrar
          </Link>
        </ButtonContainer>
      )}
      <ContainerInfoSo>
        <p>
          Processador: {data.process}
          <br />
          Memória total: {data.memory} MB
          <br />
          Memória livre: {data.memory_free} MB
          <br />
          Espaço em disco:{' '}
          {data.disk?.map(item => (
            <p key={item}>{item}</p>
          ))}{' '}
          <br />
          IP's das interfaces disponíveis:{' '}
          {data.ips?.map(item => (
            <>
              <p>{item.name}</p>
              <p>
                {item.address?.map(value => (
                  <p key={value}>{value}</p>
                ))}
              </p>
            </>
          ))}
        </p>
      </ContainerInfoSo>
    </Body>
  );
}
