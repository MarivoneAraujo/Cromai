import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 45rem;
  height: 30rem;
  padding-top: 2rem;
  margin-left: 20rem;

  @media (min-width: 500px) and (max-width: 800px) {
    margin-left: 2rem;
  } ;

  @media (max-width: 499px) {
    margin-left: 1rem;
    display: grid;
  grid-template-columns: 1fr;
}

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
  margin-left: 4rem;
`;

export const Img = styled.img`
  width: 27rem;

  @media (max-width: 499px) {
    width: 20rem;
    margin-top: 4rem;

  }
`;

export const Hipo = styled.p`
  position: fixed;
  z-index: 11;
  top: 13rem;
  right: 26rem;
  font-size: 1.7rem;
  transform: rotate(-40deg);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (min-width: 500px) and (max-width: 800px) {
    top: 13rem;
    right: 13rem;
  } ;

  @media (max-width: 499px) {
    top: 34rem;
    right: 31rem;
  }

`;

export const A = styled.p`
  position: fixed;
  z-index: 11;
  top: 16.5rem;
  right: 14rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (min-width: 500px) and (max-width: 800px) {
    top: 14rem;
    right: 2rem;
  } ;
  @media (max-width: 499px) {
    top: 35rem;
    right: 25rem;
  }
`;

export const B = styled.p`
  position: fixed;
  z-index: 11;
  top: 22rem;
  right: 27rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    @media (min-width:500px) and (max-width: 800px) {
    top: 22rem;
    right: 15rem;
    }
    @media (max-width: 499px) {
    top: 42rem;
    right: 35rem;
  }
`;

export const Result = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

export const ResultA = styled.div`
  display: inline-block;
  margin-left: 10px;
`;

export const ResultB = styled.div`
  display: inline-block;
  margin-left: 10px;
`;
