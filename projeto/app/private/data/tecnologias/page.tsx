"use client";

import { useEffect, useState } from 'react';

export default function Tecnologias() {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    fetch('/api/tecnologias')
      .then((response) => response.json())
      .then((data) => {
        console.log('Dados recebidos:', data); // Verificar os dados no console
        setTecnologias(data);
      })
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(tecnologias, null, 2)}</pre>
    </div>
  );
}
