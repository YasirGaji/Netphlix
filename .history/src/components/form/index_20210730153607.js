import React from "react"

export default function Form({ children, ...restProps }) {
  return (
    <Container { ...restProps}>{children}</Container>
  )
} 