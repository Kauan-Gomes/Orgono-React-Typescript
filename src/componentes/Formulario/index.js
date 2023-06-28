import './Formulario.css'
import { useState } from 'react'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {


    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem, 
            time
        })
    }

    //Dando estados para as variaveis
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return(
    //Para atribuirmos uma Ação a esse formulario colocamos a função onSubmit
    <section className="formulario">
        <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite seu nome" 
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
            obrigatorio={true} 
            label="Cargo" 
            placeholder="Digite seu Cargo" 
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto 
            label="Imagem" 
            placeholder="Digite seu Imagem" 
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
            obrigatorio={true} 
            label="Time" 
            itens={props.times}
            valor={time}
            aoAlterado ={valor => setTime(valor)}

            />
            <Botao>Criar card</Botao>
        </form>
    </section>
    )
}

export default Formulario