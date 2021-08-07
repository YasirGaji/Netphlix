import React from 'react'

export default function Profiles({ children, ..restProps}) {
  return <Container { ..restProps}>{children}</Container>
}

Profiles.Title = function ProfilesTitle({children, ...restProps}) {
  return <Title { ...restProps}>{children}</Title>
}
