import React from 'react'
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
} from './styles/card'

export default function Card({ children, ...restProps}) {
  return <Container { ...restProps}>{children}</Container>
}

Card.Group = function CardGroup({ children, ...restProps}) {
  return <Group { ...restProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restProps}) {
  return <Title { ...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restProps}) {
  return <SubTitle { ...restProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restProps}) {
  return <Text { ...restProps}>{children}</Text>
}

Card.Feature = function CardFeature({ children, category, ...restProps}) {
  return <Feature { ...restProps} src={`/images/${category}/${category}.png`}>{children}</Feature>
}

Card.FeatureTitle = function CardFeatureTitle({ children, ...restProps}) {
  return <FeatureTitle { ...restProps}>{children}</FeatureTitle>
}

Card.FeatureText = function CardFeatureText({ children, ...restProps}) {
  return <FeatureText { ...restProps}>{children}</FeatureText>
}

Card.FeatureClose = function CardFeatureClose({ children, ...restProps}) {
  return <FeatureClose { ...restProps}>{children}</FeatureClose>
}

Card.Maturity = function CardMaturity({ children, ...restProps}) {
  return <Maturity { ...restProps}>{children}</Maturity>
}

Card.Content = function CardContent({ children, ...restProps}) {
  return <Content { ...restProps}>{children}</Content>
}

Card.Meta = function CardMeta({ children, ...restProps}) {
  return <Meta { ...restProps}>{children}</Meta>
}

Card.Entities = function CardEntities({ children, ...restProps}) {
  return <Entities { ...restProps}>{children}</Entities>
}

Card.Item = function CardItem({ item, children, ...restProps}) {
  const { genre } = item
  return (
    <Item { ...restProps}>
      <Image src={`/images/${genre}/${item.slug}/small.jpg`} />
      {children}
    </Item>
  )
}

Card.Image = function CardImage({ ...restProps}) {
  return <Image { ...restProps} />
}

