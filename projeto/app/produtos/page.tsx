'use client';

import useSWR from 'swr';
import { Produtos } from '../models/interfaces';
import { useState, useEffect } from 'react';

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<Produtos[]>([]);
  const [filteredData, setFilteredData] = useState<Produtos[]>([]);
  const buy = () => {
    fetch("api/deisishop/buy", {
      method: "POST",
      body: JSON.stringify({
        products: cart.map(produto => produto.id),
        name: "",
        student: false,
        coupon: ""
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then((response) => {
      setCart([])
    }).catch(() => {
      console.log("error ao comprar")
    })
  }


  const fetcher = (url: string) => fetch(url).then((res) => res.json());
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
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (produto: Produtos) => {
    setCart((prevCart) => [...prevCart, produto]);
  };

  const removeFromCart = (produtoId: Number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== produtoId));
  };

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
          <li
            key={produto.id + ""}
            className="bg-purple-300 hover:bg-purple-400 p-4 w-1/2"
          >
            {produto.title} - {produto.price.toFixed(2)} €
            <button
              className="ml-4 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
              onClick={() => addToCart(produto)}
            >
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>

      <h2 className="flex text-2xl font-bold justify-center mt-8">Carrinho</h2>
      <ul className="flex flex-col gap-4 justify-center items-center w-screen">
        {cart.length === 0 && <p>O carrinho está vazio.</p>}
        {cart.map((produto) => (
          <li
            key={produto.id + ""}
            className="bg-gray-200 hover:bg-gray-300 p-4 w-1/2 flex justify-between items-center">
            {produto.title} - {produto.price.toFixed(2)} €
            <button
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              onClick={() => removeFromCart(produto.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <h2 className="flex text-2xl font-bold justify-center mt-8">comprar</h2>
      <h2 className="flex text-2xl font-bold justify-center mt-8">comprar</h2>
      <button
        className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        onClick={() => buy()}>
        Comprar
      </button>
    </section>
  );
}
