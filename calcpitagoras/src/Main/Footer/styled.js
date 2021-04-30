import styled from 'styled-components';

export const FooterStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 2.2rem;
  color: #ffffff;
  background-color: #3f51b5;
  box-shadow: 0px -2px 2px gray;
  width: 100%;

  p {
    margin-right: 1.5rem;
    position: relative;
    bottom: 0.3rem;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
   display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
