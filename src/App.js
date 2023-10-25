import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { funcao } from './constants/index.js'
import { v4 as uuidv4 } from 'uuid'


function App() {

  const times = [
    {
      id: uuidv4(),
      nome:'100 Thieves',
      corPrimaria: '#EF3232',
      corSecundaria : '#E85D5D'
      
    },
    {
      id: uuidv4(),
      nome:'Cloud9',
      corPrimaria: '#00AEEF',
      corSecundaria: '#66D2FA'
    },
    {
      id: uuidv4(),
      nome:'Evil Geniuses' ,
      corPrimaria: '#202a42',
      corSecundaria: '#354261'
    },
    {
      id: uuidv4(),
      nome:'Furia',
      corPrimaria: '#fff',
      corSecundaria: '#000'
    },
    {
      id: uuidv4(),
      nome:'KRÜ' ,
      corPrimaria: '#FF198F',
      corSecundaria: '#E856A1'

    },
    {
      id: uuidv4(),
      nome:'Leviatán' ,
      corPrimaria: '#739DBD',
      corSecundaria: '#69ABDC'
    },
    {
      id: uuidv4(),
      nome:'Loud',
      corPrimaria: '#41DB35',
      corSecundaria: '#6dfc62'
    },
    {
      nome:'MIBR',
      corPrimaria: '#27c463',
      corSecundaria: '#f2de55'
    },
    {
      id: uuidv4(),
      nome: 'NRG',
      corPrimaria: '#1F1F1F',
      corSecundaria: '#fff'
    },
    {
      id: uuidv4(),
      nome:'Sentinels',
      corSecundaria: '#B33758',
      corPrimaria: '#CE0037'
    }
  ]
  

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Less',
      cargo: funcao[4],
      imagem: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0810%2Fr1208805_1296x729_16%2D9.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'Saadhak',
      cargo: funcao[2],
      imagem: 'https://s2-ge.glbimg.com/_mqiIsiykOk0oEtrmy1_bhiuHgY=/0x0:2048x1366/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/k/i/gSsbitRNAf05WPksaGBA/52923810730-7b49557bc5-k.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'Cauanzin',
      cargo: funcao[3],
      imagem: 'https://noticias.maisesports.com.br/wp-content/uploads/2023/08/cauanzin-loud-valorant-champions-2023.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'Tuyz',
      cargo: funcao[0],
      imagem: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6uCg3mWYxKvZYcT0czDtP4VOW1r63RZ2XQBfdswAnRYIRPUNVTCwbI5HIAojZlYz0fC704_k3o858vUUr-c-mHe3un1eK-LFuajRZHnZHujFbNCcwhfUnQ3mKhG3tEU37KoOgUoHMEjxHJgzrL60dVtZ-fCd4vmG3D2aM5MgxUV15RPnOdq0VxnaDGdc/s2048/52977826842_d1f65d8b00_k.webp',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      nome: 'qck',
      cargo: funcao[1],
      imagem: 'https://s2-techtudo.glbimg.com/IuyzSFU5eKGmHMjUwtb-F03X2ZU=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/i/e/fRNGWARUqrqZaUoE6Iaw/qck-twitter-furia.jpg',
      time: times[6].nome 
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    // verificar se o id recebido é diferente do recebido por parametro então o jogador deve ser mantido na lista
  }

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Times</h1>
        {times.map((time, indice) => 
        <Time 
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
