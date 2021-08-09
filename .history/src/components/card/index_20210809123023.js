  
import React, { useState, useContext, createContext } from 'react';

import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Meta,
  Entities,
  Item,
  Image,
} from './styles/card';

export const FeatureContext = createContext();

export default function Card({ children, ...restProps }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
}

card.Group = function CardGroup ({ children, ...restProps }) {
  return <Group { ...restProps}>{children} </Group>;
}

card.Title = function CardTitle ({ children, ...restProps }) {
  return <Title { ...restProps}>{children} </Title>;
}

card.SubTitle = function CardSubTitle ({ children, ...restProps }) {
  return <SubTitle { ...restProps}>{children} </SubTitle>;
}

card.Text = function CardText ({ children, ...restProps }) {
  return <Text { ...restProps}>{children} </Text>;
}

card.Meta = function CardMeta ({ children, ...restProps }) {
  return <Meta { ...restProps}>{children} </Meta>;
}

card.Item = function CardItem ({ children, ...restProps }) {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return <Item { ...restProps}>{children} </Item>;
}