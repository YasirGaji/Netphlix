import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 24px;
  color: white;
  ${'' /* text-align: center; */}
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const Entity = styled.div``;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  ${'' /* > ${Group}:last-of-type ${Title} {
    margin-bottom: 50px;
  } 

  > ${Group}:last-of-type ${Entity}:last-of-type {
    margin-right: 0;
  } */}

  @media (max-width: 1000px) {
    margin: 0 56px;
  }

  @media (max-width: 600px) {
    margin: 0 30px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  ${({ margin }) => margin && `margin: ${margin}`};

  > ${Container}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
`;


export const SubTitle = styled.p`
  font-size: 12px;
  color: white;
  font-weight: bold;
`;

export const Text = styled.p``;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: black;
`;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureText = styled.p`
  margin: 0 0 10px;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${Title} {  
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }

    ${FeatureText} {
      font-size: 14px;
      line-height: 16px;
    }

    ${Meta} {
      font-size: 12px;
      line-height: 16px;
      margin-top: 10px;
    }
  }
`;



export const FeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 25px;
  }

  ${'' /* @media (max-width: 600px) {
    right: 5px;
    top: 5px;

    img {
      width: 16px;
    }
  } */}
`;

export const Maturity = styled.div`
  background-color: ${({ rating }) => ( rating >= 15 ? "red" : "green")};
  border-radius: 15px;
  width: 20px;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  font-size: 12px;

`;

export const Content = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;



export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div``;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;

`;

