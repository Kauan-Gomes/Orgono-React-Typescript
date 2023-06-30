import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, fundoDoCard}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: fundoDoCard}}>
                <img src={imagem} alt='Kauan Gomes'/>
            </div>
            <div className='rodape' >
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador