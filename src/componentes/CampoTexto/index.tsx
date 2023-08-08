import './campo-texto.css'
import React from 'react'

interface CampoTextoProps {
    label: string
    placeholder: string
    aoAlterado: (valor: string) => void
    valor: string
    obrigatorio: boolean

}

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }: CampoTextoProps) => {

    const aoDigitado= (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input 
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholder} 
            />
        </div>)
}

export default CampoTexto