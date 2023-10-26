import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const opcoesCargo = [
    "Duelista",
    "Flex",
    "Sentinela",
    "Controlador",
    "Iniciador",
  ];

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    aoCadastrar({
      id: uuidv4(),
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do Jogador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do jogador"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Funcão"
          items={opcoesCargo}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          valor={imagem}
          placeholder="Informe o endereço da imagem"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar card" />
      </form>

      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          cadastrarTime({ nome: nomeTime, cor: corTime });
          setNomeTime("");
          setCorTime("");
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto
          type='color'
          obrigatorio={true}
          label="Cor"
          valor={corTime}
          placeholder="Digite a cor do time em hexadecimal"
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao texto="Criar novo time" />
      </form>
    </section>
  );
};

export default Formulario;
