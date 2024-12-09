'use client';

import tecnologias from '@/app/data/tecnologias.json';
import { Tecnologia } from '@/app/models/interfaces';

export default function TecnologiasPage() {
  return (
    <section className="flex flex-col gap-4 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Tecnologias Aprendidas</h1>
      <ul className="flex flex-wrap gap-4 justify-center items-center">
        {tecnologias.map((tecnologia: Tecnologia) => (
          <li
            key={tecnologia.title}
            className="bg-blue-200 hover:bg-blue-300 p-4 rounded-md shadow-lg w-80 text-center"
          >
            <img
              src={tecnologia.image}
              alt={tecnologia.title}
              className="h-16 mx-auto"
            />
            <h2 className="text-2xl font-semibold">{tecnologia.title}</h2>
            <p className="text-gray-700">{tecnologia.description}</p>
            <p className="text-yellow-500">⭐ {tecnologia.rating}/5</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
