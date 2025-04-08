
import './CampoSenha.css';


const CampoSenha = (props) => {
    
    
    const aoDigitado = (evento) => {
        
        
        props.aoAlterado(evento.target.value);
        }
    
    
   

    return (
        <div className="campo-senha">
            <label for="senha">{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} type="password" />
        </div>
    )
}

export default CampoSenha