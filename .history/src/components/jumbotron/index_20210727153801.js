import React from 'react'
import { Inner } from './styles/jumbotron'

export default function Jumbotron({ direction = 'row', ...restProps }) {
  return (
    <div>
      <Inner direction={direction}>
       <p>jumbo in the building</p>
      </Inner>
    </div>
  )
}
