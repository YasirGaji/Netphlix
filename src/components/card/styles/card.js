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


export const SubTitle = styled.p``;

export const Text = styled.p``;

export const Feature = styled.div``;

export const FeatureTitle = styled(Title)``;

export const FeatureText = styled.p``;

export const FeatureClose = styled.button``;

export const Maturity = styled.div``;

export const Content = styled.div``;

export const Meta = styled.div``;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div``;

export const Image = styled.img``;

