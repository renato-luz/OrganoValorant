import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { v4 as uuidv4 } from 'uuid'



const Formulario = ({ aoCadastrar, times }) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const opcoesCargo = ["Duelista", "Flex", "Sentinela", "Controlador", "Iniciador"];

  const aoSubmeter = (evento) => {
    evento.preventDefault()
    console.log('form enviado', nome, cargo, imagem, time)
    aoCadastrar({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    })
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  }

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do Jogador.</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label='Funcao'
          items={opcoesCargo}
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label='Imagem'
          valor = {imagem}
          placeholder='Informe o endereço da imagem'
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label='Times'
          items={times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao texto='Criar card' />
      </form>
    </section>
  )
}

export default Formulario
