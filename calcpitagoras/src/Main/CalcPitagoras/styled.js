import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 45rem;
  height: 20rem;
  padding-top: 4rem;
  margin-left: 20rem;
`;
export const InputGrid = styled.div`
  display: grid;
  gap: 1rem;
  width: 15rem;
  padding-bottom: 2rem;
  margin-left: 2rem;

  p {
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const MiniGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  width: 10rem;
  margin-left: 4.5rem;
`;

export const Img = styled.img`
  width: 27rem;
  height: 20rem;
  text-shadow: 10px 10px 10px red;
`;

export const Hipo = styled.p`
  width: 15rem;
  position: absolute;
  z-index: 11;
  top: 14rem;
  right: 22rem;
  font-size: 1.7rem;
  transform: rotate(-40deg);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  
`;

export const A = styled.p`
  width: 10rem;
  position: absolute;
  z-index: 11;
  top: 16.5rem;
  right: 11rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    
`;

export const B = styled.p`
  width: 10rem;
  position: absolute;
  z-index: 11;
  top: 25rem;
  right: 22rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Result = styled.div`
display: inline-block;
margin-left: 10px;
`

export const ResultA = styled.div`
display: inline-block;
margin-left: 10px;
`

export const ResultB = styled.div`
display: inline-block;
margin-left: 10px;
`