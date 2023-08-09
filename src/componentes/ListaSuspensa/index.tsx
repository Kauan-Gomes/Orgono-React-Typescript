import './lista-suspensa.css'

interface ListaSuspensaProps {
    aoAlterado: (valor: string ) => void
    label: string
    obrigatorio: boolean
    valor: string
    itens: string []

}

const ListaSuspensa = (props: ListaSuspensaProps) => {
    return (<div className="lista-suspensa">
        <label>{props.label}</label>
        <select 
        required={props.obrigatorio} 
        value={props.valor} 
        onChange={evento => props.aoAlterado(evento.target.value)}>
            <option />
            {props.itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa