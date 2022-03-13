import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulário";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";


export default function Home() {
  const clientes = [
    new Cliente('Ana', 31, '1'),
    new Cliente('Paulo', 32, '2'),
    new Cliente('Silas', 41, '3'),
    new Cliente('Aécio', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
  }
  
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={() => setVisivel('form')} cor='green' className="mb-4">Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario clienteMudou={salvarCliente} cliente={clientes[2]} cancelado={() => setVisivel('tabela')}/>
        )}
      </Layout>
    </div>
  )
}
