import React, { useState } from "react";

function Calculator() {
  // Definindo o estado para armazenar a música
  //const [audio] = useState(
  //  new Audio(
  //    "./Yhorm.mp3"
  //  )
  //);
  const [op1, setOp1] = useState("");
  const [op2, setOp2] = useState("");
  const [operator, setOperator] = useState("Soma");
  const [result, setResult] = useState("");

  function soma(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mult(a, b) {
    return a * b;
  }

  function div(a, b) {
    return a / b;
  }

  function resdiv(a, b) {
    return a % b;
  }

  function factol(a) {
    a = parseInt(a);
    if (a > 1) {
      return a * factol(a - 1);
    }
    return 1;
  }

  function calcula() {
    let respo;
    const x = parseFloat(op1);
    const y = parseFloat(op2);

    switch (operator) {
      case "Soma":
        respo = soma(x, y);
        break;
      case "Subtracao":
        respo = sub(x, y);
        break;
      case "Mult":
        respo = mult(x, y);
        break;
      case "Divisao":
        if (y === 0) {
          respo = "Erro";
          break;
        }
        respo = div(x, y);
        break;
      case "Restoda":
        if (y === 0) {
          respo = "Erro";
          break;
        }
        respo = resdiv(x, y);
        break;
      case "Fact":
        respo = factol(x);
        break;
      default:
        break;
    }

    setResult(respo);

    // Iniciando a música ao calcular
    //audio.play();
  }

  return (
    <div style={{ margin: "10px" }}>
      <div className="container">
        <h1 className="border-bottom my-2 py-2">
          <i className="fa fa-calculator" aria-hidden="true"></i> Calculadora
        </h1>
        <form className="row">
          <div className="col-3">
            <input
              className="form-control"
              type="number"
              value={op1}
              onChange={(e) => setOp1(e.target.value)}
            />
          </div>
          <div className="col-2">
            <select
              className="form-select"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="Soma">Soma</option>
              <option value="Subtracao">Subtração</option>
              <option value="Mult">Multiplicação</option>
              <option value="Divisao">Divisão</option>
              <option value="Restoda">Resto da Divisão</option>
              <option value="Fact">Factorial</option>
            </select>
          </div>
          <div className="col-3">
            <input
              className="form-control"
              type="number"
              value={op2}
              onChange={(e) => setOp2(e.target.value)}
            />
          </div>
          <div className="col-1">=</div>
          <div className="col-3">
            <input className="form-control" value={result} readOnly />
            <br />
          </div>
          <div className="col-12 p-3">
            <input
              type="button"
              className="btn btn-primary"
              onClick={calcula}
              value="Calcular"
            />
            <input className="btn btn-secondary" type="reset" value="Limpar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
