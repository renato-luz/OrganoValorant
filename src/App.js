import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { funcao } from './constants/index.js'
import { v4 as uuidv4 } from 'uuid'


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: '100 Thieves',
      cor: '#EF3232',
    },
    {
      id: uuidv4(),
      nome: 'Cloud9',
      cor: '#00AEEF',
    },
    {
      id: uuidv4(),
      nome: 'Evil Geniuses',
      cor: '#202a42',
    },
    {
      id: uuidv4(),
      nome: 'Furia',
      cor: '#fff',
    },
    {
      id: uuidv4(),
      nome: 'KRÜ',
      cor: '#FF198F',
    },
    {
      id: uuidv4(),
      nome: 'Leviatán',
      cor: '#739DBD',
    },
    {
      id: uuidv4(),
      nome: 'Loud',
      cor: '#41DB35',
    },
    {
      id: uuidv4(),
      nome: 'MIBR',
      cor: '#27c463',
    },
    {
      id: uuidv4(),
      nome: 'NRG',
      cor: '#1F1F1F',
    },
    {
      id: uuidv4(),
      nome: 'Sentinels',
      cor: '#CE0037'

      
    }
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: true,
      nome: 'Less',
      cargo: funcao[4],
      imagem: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0810%2Fr1208805_1296x729_16%2D9.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      nome: 'Saadhak',
      cargo: funcao[2],
      imagem: 'https://s2-ge.glbimg.com/_mqiIsiykOk0oEtrmy1_bhiuHgY=/0x0:2048x1366/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/k/i/gSsbitRNAf05WPksaGBA/52923810730-7b49557bc5-k.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      nome: 'Cauanzin',
      cargo: funcao[3],
      imagem: 'https://noticias.maisesports.com.br/wp-content/uploads/2023/08/cauanzin-loud-valorant-champions-2023.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      nome: 'Tuyz',
      cargo: funcao[0],
      imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6uCg3mWYxKvZYcT0czDtP4VOW1r63RZ2XQBfdswAnRYIRPUNVTCwbI5HIAojZlYz0fC704_k3o858vUUr-c-mHe3un1eK-LFuajRZHnZHujFbNCcwhfUnQ3mKhG3tEU37KoOgUoHMEjxHJgzrL60dVtZ-fCd4vmG3D2aM5MgxUV15RPnOdq0VxnaDGdc/s2048/52977826842_d1f65d8b00_k.webp',
      time: times[6].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    // verificar se o id recebido é diferente do recebido por parametro então o jogador deve ser mantido na lista.
  }

  function cadastrarTime(novoTime){
    setTimes([...times, {...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id)
        colaborador.favorito = !colaborador.favorito
        return colaborador
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario 
        times={times.map(time => time.nome)}
        cadastrarTime = {cadastrarTime} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Times</h1>
        {times.map((time, indice) => 
        <Time
          aoFavoritar={resolverFavorito}
          key={indice} 
          time={time} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
