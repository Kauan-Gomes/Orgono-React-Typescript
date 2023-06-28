
import './CampoTexto.css'

//props é o evento padrão que o elemento recebe
const CampoTexto = (props) => {
    
const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
}

    return (
        //class é uma palavra chave para o JS, para atribuirmos uma classe com React usamos ClassName
        <div className="campo_texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
        //props.label ou qualquer valor props dado, é um valor já declarado em outra seção, neste caso a de formulário, onde o componte "campo_texto" está inserido
    )
}

export default CampoTexto;