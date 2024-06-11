import React from "react";
import { useState } from "react";
import NewCard from "./newcard";

const NewCardList = () => {
  const [product, setProducts] = useState([
    {
      id: 1,
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
      title: "Shoes!",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 2,
      img: "https://imgs.search.brave.com/dN_VcmnPTTElbn861iK_OjZnXZefbXzFvrkwIC7ivvk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFWNTdtNThVQ0wu/anBn",
      title: "Nike mens Basketball Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 3,
      img: "https://imgs.search.brave.com/mMtcMBPeOc9CbujXueFXFXFCWtEUT4ylKhgSAu9IVjU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDU4/MjU5NDgzL3Bob3Rv/L25pa2UtYWlyLWZv/cmNlLTEtc2hvZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TlVpaVFjellmZkNh/cmFLZ2NURDQ0Wl9a/UERNRlp5S05UUkE4/WE5NRVN1bz0",
      title: "Nike Air Force",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 4,
      img: "https://imgs.search.brave.com/v30ntw9j-cGlKFmN3Z0S0IfEpkL6wF_g4RdjnFbTE7U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFiOVgzZmhNbkwu/anBn",
      title: "Nike mens Pegasus",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 5,
      img: "https://imgs.search.brave.com/wmsB9CRwgrbBbVkxQ8XGHkbH79mhejuhRxQlF5E3u5c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFXK2FqM25QeUwu/anBn",
      title: "Nike Women's Air",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
    {
      id: 6,
      img: "https://imgs.search.brave.com/qqs6IUY-OM52dbIRqIOhm9WWMqSEJviQxLLYzmnx5-E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFTRHpYUUVRTkwu/anBn",
      title: "Nike Men's Gymnastics",
      description: "If a dog chews shoes whose shoes does he choose?",
    },
  ]);

  const removeCard = (id) => {
    setProducts(product.filter((product) => product.id !== id));
  };
  return (
    <div className="container h-auto flex flex-wrap items-center justify-center gap-10 mt-10 mb-10">
      {product.map((item) => (
        <NewCard key={item.id} {...item} onRemove={removeCard} />
      ))}
    </div>
  );
};

export default NewCardList;
