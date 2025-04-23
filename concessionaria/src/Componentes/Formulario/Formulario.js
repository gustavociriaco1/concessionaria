
import Botao from '../Botao/Botao';
import CampoSenha from '../CampoSenha/CampoSenha';
import CampoTexto from '../CampoTexto/CampoTexto';
import { useNavigate } from 'react-router-dom';
import './Formulario.css';
import { useState } from 'react';
import axios from 'axios';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    navigate('/Home');

    const novoUsuario = {
      nome,
      email,
      telefone,
      senha,
    };

    axios
      .post('http://localhost:3000/api/usuarios', novoUsuario)
      .then((response) => {
        alert('Usuário cadastrado com sucesso!');
        // Limpa os campos após o sucesso
        setNome('');
        setEmail('');
        setTelefone('');
        setSenha('');
        props.aoColaboradorCadastrado && props.aoColaboradorCadastrado(novoUsuario);
      })
      .catch((error) => {
        console.error('Houve um erro ao cadastrar o usuário', error);
        alert('Erro ao cadastrar o usuário');
      });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Email"
          placeholder="Digite seu email"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />
        <CampoTexto
          label="Telefone"
          placeholder="Digite o número de telefone"
          valor={telefone}
          aoAlterado={(valor) => setTelefone(valor)}
        />
        <CampoSenha
          label="Senha"
          placeholder="Digite uma senha"
          valor={senha}
          aoAlterado={(valor) => setSenha(valor)}
        />
        <Botao />
      </form>
    </section>
  );
};

export default Formulario;
