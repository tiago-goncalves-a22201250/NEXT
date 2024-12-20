import React from 'react'
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Aprender React</h1>
      <nav className={styles.nav}>
        <Link href="/">Home →</Link>
        <Link href="/progs">Programadores →</Link>
        <Link href="/tecnologias">Tecnologias →</Link>
        <Link href="/produtos">Produtos →</Link>
        <Link href="/sobre">Sobre →</Link>
      </nav>
    </header>
  )
}