import styled from "styled-components/macro";
import { List } from "../../profiles/styles/profiles";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;

  &:hover {
    transform: scale(1.3);
    z-index: 99;
    transition: all 0.3s ease-in-out;
    color: #e50914;
  }

  &:hover > ${Link} {
    transform: scale(1.3);
    z-index: 99;
    transition: all 0.3s ease-in-out;
    color: #e50914;  
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;