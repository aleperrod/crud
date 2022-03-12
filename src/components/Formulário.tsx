import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(id ? props.cliente.nome : '')
    const [idade, setIdade] = useState(id ? props.cliente.idade : '0')
    
    return (
        <div>
            {id ? (
                <Entrada
                    texto="Código"
                    valor={id}
                    somenteLeitura
                    className="mb-3"
                />
            ) : false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-3"
            />
            <Entrada
                texto="Idade"
                tipo='number'
                valor={idade}
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-5">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}