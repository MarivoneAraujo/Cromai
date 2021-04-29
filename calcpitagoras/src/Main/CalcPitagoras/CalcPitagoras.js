import React, { useState } from 'react';
import IMG from '../../assets/tri.jpeg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
} from './styled';

export default function CalcPitagoras() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [result, setResult] = useState();
  const [hipo, setHipo] = useState();
  const [resultCatetoA, setresultCatetoA] = useState();
  const [resultCatetoB, setresultCatetoB] = useState();

  function handleOnClick() {
    const hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
      .toFixed(2)
      .replace(".", ",");

    setResult(hipotenusa);
  }

  function handleOnClick2() {
    const cateto = Math.sqrt(Math.pow(hipo, 2) - Math.pow(a, 2)).toFixed(2);
    setresultCatetoB(cateto);
  }

  function handleOnClick3() {
    const cateto = Math.sqrt(Math.pow(hipo, 2) - Math.pow(b, 2)).toFixed(2);
    setresultCatetoA(cateto);
  }

  function clearFields() {
    setHipo("");
    setA("");
    setB("");
    setResult();
    setresultCatetoA();
    setresultCatetoB();
  }

  return (
    <Container>
      <div>
        <InputGrid>
          <p>Digite dois lados e descubra o terceiro:</p>
          <TextField
            placeholder="a"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
          <TextField
            placeholder="b"
            value={b}
            onChange={(e) => setB(e.target.value)}
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
        <Hipo>
          {" "}
          <strong>Hipotenusa:</strong>
          <Result>{hipo > 0 ? hipo : result}</Result>
        </Hipo>
        <A>
          <strong>a:</strong>
          <ResultA>{a > 0 ? a : resultCatetoA}</ResultA>
        </A>
        <B>
          <strong>b:</strong>
          <ResultB>{b > 0 ? b : resultCatetoB}</ResultB>
        </B>
      </div>
    </Container>
  );
}
