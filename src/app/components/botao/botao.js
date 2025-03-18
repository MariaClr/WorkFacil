"use client"
import "./botoes.css"
export default function Botao({textoBotao, funcao}){
    return (<>
        <div id="botoes" onClick = {funcao}>
            <a> {textoBotao} </a>
        </div>
    </>)
}