import styled from 'styled-components/macro'

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  paddiing: 50px 5%;
  color: white;
  overflow: hidden;  
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Pane = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    paddiing: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 8px;

  @media (max-width: 600px) {
    font-size: .7rem;
    paddiing-top: .2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: .6rem;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;