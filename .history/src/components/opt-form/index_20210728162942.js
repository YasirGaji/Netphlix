import React from 'react'

export default function OptForm({ children, ...restProps}) {
  return (
    <Container { ...restProps}>
      {children}
    </Container>
  )
}
