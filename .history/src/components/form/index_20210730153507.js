import React from "react"

export defaut function Form({ children, ...restProps }) {
  return (
    <Container { ...restProps}>{children}</Container>
  )
} 