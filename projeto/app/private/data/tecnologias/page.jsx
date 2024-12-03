"use client";

import { useEffect, useState } from 'react';

export default function Tecnologias() {
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    fetch('/api/tecnologias')
      .then((response) => response.json())
      .then((data) => setTecnologias(data));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(tecnologias, null, 2)}</pre>
    </div>
  );
}
