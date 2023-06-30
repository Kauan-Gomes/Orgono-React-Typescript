import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const corDeFundo = {backgroundColor: props.corSecundaria}
    const corPrimaria = {backgroundColor: props.corPrimaria}


    return(
        //fazendo a validação do tamanho do time, se a lista não for zero, for true, ele vai para a proxima validação
        (props.colaboradores.length > 0) ? <section className='time' style={corDeFundo}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador key={colaborador.nome}fundoDoCard={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time