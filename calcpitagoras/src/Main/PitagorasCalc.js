import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import IMG from "../assets/descubra.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  width: 40rem;
  padding-top: 5rem;
  padding-left: 20rem;
`;
const Hipotenusa = styled.p`
  width: 15rem;
  position: absolute;
  z-index: 11;
  top: 10rem;
  right: 27rem;
  background-color: #fff;
  font-size: 2.5rem;
  transform: rotate(-37deg);
`;

const CatetoB = styled.p`
  width: 10rem;
  position: absolute;
  z-index: 11;
  top: 21.5rem;
  right: 28rem;

  background-color: #fff;
  font-size: 1.7rem;
`;

const CatetoC = styled.p`
  width: 10rem;
  position: absolute;
  z-index: 11;
  top: 14rem;
  right: 16.5rem;

  background-color: #fff;
  font-size: 1.7rem;
  transform: rotate(90deg);
`;

const Blank1 = styled.div`
  background-color: white;
  position: absolute;
  z-index: 10;
  top: 10.65rem;
  right: 32rem;
  background-color: #fff;
  font-size: 3rem;
  width: 5rem;
  color: #fff;
`;

const Blank2 = styled.div`
  background-color: white;
  position: absolute;
  z-index: 10;
  top: 15rem;
  right: 20.5rem;
  background-color: #fff;
  font-size: 3rem;
  width: 2rem;
  color: #fff;
`;
const Blank3 = styled.div`
  background-color: white;
  position: absolute;
  z-index: 10;
  top: 23.5rem;
  right: 29rem;
  background-color: #fff;
  font-size: 1rem;
  width: 4rem;
  height: 2rem;
  color: #fff;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 100,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Teste() {
  const classes = useStyles();

  const [b, setB] = useState();
  const [c, setC] = useState();
  const [result, setResult] = useState();
  const [hipo, setHipo] = useState();
  const [resultCatetoC, setresultCatetoC] = useState();
  const [resultCatetoB, setresultCatetoB] = useState();

  function handleOnClick() {
    const hipotenusa = (Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2))).toFixed(2).replace(".", ",");

    setResult(hipotenusa);
  }

  function handleOnClick2() {
    const cateto = (Math.sqrt(Math.pow(hipo, 2) - Math.pow(b, 2))).toFixed(2);
    setresultCatetoC(cateto);
  }


  function handleOnClick3() {
    const cateto = (Math.sqrt(Math.pow(hipo, 2) - Math.pow(c, 2))).toFixed(2);
    setresultCatetoB(cateto);
  }

  function clearFields() {
    setHipo("");
    setB("");
    setC("");
    setResult();
    setresultCatetoB();
    setresultCatetoC();
  }

  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
           <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ marginBottom: "10px" }}
        >
          <strong>Digito dois números e descubra o terceiro:</strong>
        </Typography> 
          <Typography variant="body2" color="textSecondary" component="p">
            <TextField
              placeholder="Hipotenusa"
              value={hipo}
              onChange={(e) => setHipo(e.target.value)}
            />
            <br />
            <TextField
              placeholder="Valor para b"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
            <TextField
              placeholder="Valor para c"
              value={c}
              onChange={(e) => setC(e.target.value)}
            />
            <p>
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
                Limpe os campos
              </Button>
            </p>
          </Typography>
        </CardContent>

        <CardMedia
          className={classes.cover}
          image={IMG}
          title="Live from space album cover"
          style={{ padding: "9rem" }}
        />
      </Card>
      <Typography>
        <Hipotenusa>
          <strong>Hipotenusa:</strong>
          {hipo > 0 ? hipo : result}
        </Hipotenusa>

        <CatetoB>
          <strong>Cateto b:</strong> {b > 0 ? b : resultCatetoB}
        </CatetoB>
        <CatetoC>
          <strong>Cateto c:</strong> {c > 0 ? c : resultCatetoC}
        </CatetoC>

        <Blank1>a</Blank1>
        <Blank2>b</Blank2>
        <Blank3>c</Blank3>
      </Typography>
    </Container>
  );
}
