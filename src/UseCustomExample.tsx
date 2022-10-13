import React, { FC, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export interface Item {
  id?: number;
  title?: string;
}

const initialItems: Item[] = [
  {
    id: 1,
    title: "Todo 1",
  },
  {
    id: 2,
    title: "Todo 2",
  },
];

const Home: FC = () => {
  const [data, setData] = useState<Array<Item> | any>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item: Item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default Home;