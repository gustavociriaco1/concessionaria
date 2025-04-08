
import Botao from '../Botao/Botao';
import CampoSenha from '../CampoSenha/CampoSenha';
import CampoTexto from '../CampoTexto/CampoTexto';

import './Formulario.css'
import { useState } from 'react'


const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha]=useState('')
    

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            email,
            telefone,
            senha
            });
       
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2 >Preencha os dados </h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Email"
                    placeholder="Digite seu email"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                />
                <CampoTexto
                    label="Telefone"
                    placeholder="Digite o endereço de telefone"
                    valor={telefone}
                    aoAlterado={valor => setTelefone(valor)}
                />
                <CampoSenha
                    label="Senha"
                    placeholder="Digite uma senha "
                    valor={senha}
                    aoAlterado={valor => setSenha(valor)}
                    
                    
                />

                
                
                    <Botao>
                     
                    </Botao>
               

            </form>

        </section>

    )


}




export default Formulario;

