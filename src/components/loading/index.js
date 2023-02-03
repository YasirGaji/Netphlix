import React from "react";
import {  
  ReleaseBody, 
  LockBody, 
  Picture, 
  Spinner 
} from "./styles/loading";


export function Loading({ src, ...restProps }) {
  return (
    <Spinner { ...restProps}>
    <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
}