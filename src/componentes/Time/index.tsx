import { IColaborador } from '../../shared/interfaces/IColaborador'
import Colaborador from '../Colaborador'

import './time.css'
import React from 'react'

interface TimeProps {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[]
}

const Time = (props: TimeProps) => {

    const css = { backgroundColor: props.corSecundaria}
    return (

        props.colaboradores.length > 0 ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) =>
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />)}
            </div>
        </section> 
        :  <></>
    )
}

export default Time