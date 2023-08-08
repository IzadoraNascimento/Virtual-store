// pages/products.tsx
import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>
        Nossos Produtos
      </h1>
    </>
  )
}

export default Products