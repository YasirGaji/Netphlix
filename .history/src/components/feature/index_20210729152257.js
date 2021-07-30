import React from 'react'
import { Container, Title, Subtite  } from './styles/feature'

export default function index({ childrem, ...restProps }) {
  return <Container { ...restProps}>{children}</Container>
}

Feature.Title = function FeatureTitle({children, ...restProps}) {
  return <Title { ...restProps}>{children}</Title>
}

Feature.subTitle = function FeaturesubTitle({children, ...restProps}) {
  return <subTitle { ...restProps}>{children}</subTitle>
}