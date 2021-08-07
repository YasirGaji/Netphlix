import React from 'react'

export default function Profiles({ children, ..restProps}) {
  return <Container { ..restProps}>{children}</Container>
}
