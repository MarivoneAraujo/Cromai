import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 45rem;
  height: 30rem;
  padding-top: 2rem;
  margin-left: 20rem;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-left: 1rem;
  }

  @media (max-width: 767px) {
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

  @media (max-width: 767px) {
    width: 20rem;
    margin-top: 4rem;
  }
`;

export const Hipo = styled.p`
  width: 150px;
  position: relative;
  bottom: 15rem;
  right: -24rem;
  transform: rotate(-40deg);
  font-size: 1.7rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 767px) {
    bottom: 11rem;
    right: -4rem;
  }
`;

export const A = styled.p`
  position: relative;
  width: 30px;
  bottom: 20rem;
  right: -41.5rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 767px) {
    bottom: 19rem;
  right: -17rem;
  }
`;

export const B = styled.p`
  position: relative;
  bottom: 15.5rem;
  right: -29rem;
  width: 50px;
  font-size: 1.5rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 767px) {
    bottom: 17rem;
    right: -8rem;
  }
`;

export const Result = styled.div`
  position: relative;
  bottom: 17rem;
  right: -14.5rem;
  height: 30px;
  width: 30px;
  font-size: 1.7rem;
  transform: rotate(-40deg);
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    @media (max-width: 767px) {
      bottom: 19rem;
  right: -12.5rem;
  }

`;

export const ResultA = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  bottom: 18.5rem;
  right: -25.5rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 767px) {
    bottom: 22.6rem;
    right: -19.5rem;
  }
`;

export const ResultB = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  bottom: 14rem;
  right: -13.5rem;
  font-size: 1.5rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media (max-width: 767px) {
    bottom: 20.5rem;
    right: -11rem;
  }
`;

