import React from 'react'

export default function OptForm({ children, ...restProps}) {
  return (
    <Container { ...restProps}>
      {children}
    </Container>
  )
}

OptForm.Input = function OptFormInput({ ...restProps}) {
  return (
    <Input { ...restProps} />
  )
}
