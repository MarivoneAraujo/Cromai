import React, { useState } from "react";
import IMG from "../../assets/tri.jpeg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  Container,
  InputGrid,
  MiniGrid,
  Img,
  Hipo,
  A,
  B,
  Result,
  ResultA,
  ResultB,
} from "./styled";

export default function CalcPitagoras() {
  const [catetoA, setCatetoA] = useState();
  const [catetoB, setCatetoB] = useState();
  const [result, setResult] = useState();
  const [hipo, setHipo] = useState();
  const [resultCatetoA, setresultCatetoA] = useState();
  const [resultCatetoB, setresultCatetoB] = useState();

  // função calcula o valor da hipotenusa

  function handleOnClick() {
    const hipotenusa = Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2))
      .toFixed(2)
      .replace(".", ",");

    setResult(hipotenusa);
  }

  // função calcula o valor do cateto A

  function handleOnClick3() {
    const cateto = Math.sqrt(Math.pow(hipo, 2) - Math.pow(catetoB, 2)).toFixed(
      2
    );
    setresultCatetoA(cateto);
  }
  // função calcula o valor do cateto B

  function handleOnClick2() {
    const cateto = Math.sqrt(Math.pow(hipo, 2) - Math.pow(catetoA, 2)).toFixed(
      2
    );
    setresultCatetoB(cateto);
  }

  function clearFields() {
    setHipo("");
    setCatetoA("");
    setCatetoB("");
    setResult();
    setresultCatetoA();
    setresultCatetoB();
  }

  return (
    <div>
      <Container>
        <div>
          <InputGrid>
            <p>Digite dois lados e descubra o terceiro:</p>
            <TextField
              placeholder="Cateto a"
              value={catetoA}
              onChange={(e) => setCatetoA(e.target.value)}
            />
            <TextField
              placeholder="Cateto b"
              value={catetoB}
              onChange={(e) => setCatetoB(e.target.value)}
            />
            <TextField
              placeholder="Hipotenusa"
              value={hipo}
              onChange={(e) => setHipo(e.target.value)}
            />
          </InputGrid>

          <MiniGrid>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleOnClick();
                handleOnClick2();
                handleOnClick3();
              }}
            >
              Resultado
            </Button>
            <Button variant="contained" color="primary" onClick={clearFields}>
              Limpar Campos
            </Button>
          </MiniGrid>
        </div>

        <div>
          <Img src={IMG} alt="triangulo-retangulo" />
          {/* Os ternários renderizam alternativamente ou o valor inserido no input ou o resultado das funções  */}

          <Hipo>         
            <strong>Hipotenusa:</strong>        
          </Hipo>
          <Result>{hipo > 0 ? hipo : result}</Result>

          <A>
            <strong>a:</strong>
          </A>
          <ResultA>{catetoA > 0 ? catetoA : resultCatetoA}</ResultA>        

          <B>
            <strong>b:</strong>
          </B>
          <ResultB>{catetoB > 0 ? catetoB : resultCatetoB}</ResultB>
        </div>

      </Container>
    </div>
  );
}
