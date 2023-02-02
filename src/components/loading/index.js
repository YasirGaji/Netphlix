import React from "react";
import { Container, Picture } from "./styles/loading";


export const Loading = ({ src, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Picture src={`/images/users/${src}.png`} />
    </Container>
  );
}

