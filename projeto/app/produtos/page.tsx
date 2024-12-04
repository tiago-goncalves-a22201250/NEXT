'use client';

import useSWR from 'swr';
import { Produtos } from '../models/interfaces';


export default function ProdutosPage() {

  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const { data, error, isLoading } = useSWR<Produtos[]>('/api/produtos', fetcher);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os produtos.</p>;
  if (data === undefined) return <div>error</div>

  return <section className="flex flex-col gap-4 justify-center items-center h-screen">
    <h1 className="text-4xl font-bold">Lista de Produtos</h1>
    <ul className="flex flex-col gap-4 justify-center items-center w-screen ">
      {data.map((produto) => (
        <li key={produto.id+""} className="bg-purple-300 hover:bg-purple-400 p-4 w-1/2">
          {produto.title} -  {produto.price.toFixed(2)} €
        </li>
      ))}
    </ul>
  </section>
}