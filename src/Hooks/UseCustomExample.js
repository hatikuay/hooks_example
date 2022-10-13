import React, { FC, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


const Home = () => {
  //const [data, setData] = useState<Array<Item> | any>(null);

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};


export const useFetch = (url) => {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data]

}

export default Home;