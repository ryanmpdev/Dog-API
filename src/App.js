import React, { useState } from 'react';
import axios from 'axios';
import { Globalstyle } from './Globalstyle';
import * as S from './style';

export default function App() {

  const [dog, setDog] = useState();
  const [status, setStatus] = useState(false);

  function getDog() {
    axios.get('https://dog.ceo/api/breeds/image/random').then((response) => {
      setDog(response.data.message);
      setStatus(true);
    })
  }

  return (
    <S.Main>
      <Globalstyle />
      {status && <img src={dog} alt='Um doguinho'/>}
      <button onClick={() => {getDog()}}> Clique aqui</button>
    </S.Main>
  )
}
