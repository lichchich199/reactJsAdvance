import { memo } from "react";
import useFetch from "../hooks/useFetch";
import { Outlet } from "react-router-dom";

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
        <h1>hi</h1>
        <Outlet />
    </>
  );
};

export default memo(Todos);