'use client';

import useSWR from 'swr';
import { Produtos } from '../models/interfaces';
import { useState, useEffect } from 'react';

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [cart,setCart] = useState<Produtos[]>([])
  const [filteredData, setFilteredData] = useState<Produtos[]>([]);

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data, error, isLoading } = useSWR<Produtos[]>('/api/products', fetcher);

  useEffect(() => {
    if (data) {
      const newFilteredData = data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(newFilteredData);
    }
  }, [search, data]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os produtos.</p>;
  if (!data) return <div>Erro</div>;

  return (
    <section className="flex flex-col gap-4 justify-center items-center h-screen">
      <input
        placeholder="Pesquisar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="flex text-4xl font-bold justify-center">Deisi Shop</h1>
      <ul className="flex flex-col gap-4 justify-center items-center w-screen">
        {filteredData.map((produto) => (
          <li key={produto.id + ""} className="bg-purple-300 hover:bg-purple-400 p-4 w-1/2">
            {produto.title} - {produto.price.toFixed(2)} € - <button></button>
          </li>
        ))}
      </ul>
    </section>
  );
}
