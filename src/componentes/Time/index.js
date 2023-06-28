import './Time.css'

const Time = (props) => {
    const corDeFundo = {backgroundColor: props.corSecundaria}
    const corPrimaria = {backgroundColor: props.corPrimaria}

    return(
        <section className='time' style={corDeFundo}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </section>
    )
}

export default Time