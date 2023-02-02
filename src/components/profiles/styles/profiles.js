import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 80%;

  @media (max-width: 1000px) {
    max-width: 100%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }

  @media (max-width: 400px) {
    max-width: 100%;
  }

  @media (max-width: 300px) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #fff;
  text-align: center;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 35px;
  }

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  border: 3px solid #000;
  object-fit: cover;

  @media (max-width: 1000px) {
    max-width: 150px;
    max-height: 150px;
  }

  @media (max-width: 600px) {
    max-width: 100px;
    max-height: 100px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

`;

export const Name = styled.p`
  color: #808080;
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;


  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const User = styled.li`
  max-width: 200px;
  max-height: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
  margin: 10px;
  list-style-type: none;


  &:hover {
    transform: scale(1.3);
    z-index: 99;
  }

  @media (max-width: 1000px) {
    max-width: 150px;
    max-height: 150px;
  }

  &:hover > ${Picture} {
    border: 3px solid #fff;
  }

  &:hover > ${Name} {
    color: #fff;
    font-weight: bold;
  }

  &:first-of-type {
    margin-left: 0;
  }
`;



