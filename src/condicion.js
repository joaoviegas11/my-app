import { useState } from "react";

export default function Condicao() {
  const [cond, setCond] = useState(false);

  function handleClick() {
    setCond(!cond);
  }

  function MyButton() {
    return (
      <button onClick={handleClick}>
        Clicked {cond ? "True" : "False"}
      </button>
    );
  }

  function Pos() {
    return <h1>O mundo é seu!</h1>;
  }

  function Neg() {
    return (
      <div style={{ color: "red", fontSize: "30px", fontWeight: "bold" }}>
        O mundo será meu
      </div>
    );
  }

  function Signal() {
    return cond ? <Pos /> : <Neg />;
  }

  return (
    <div>
      <MyButton />
      <Signal />
      <div>{cond ? "Verdadeiro" : "Falso"}</div>
    </div>
  );
}
