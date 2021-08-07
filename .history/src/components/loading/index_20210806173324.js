import React from 'react'
import { LockBody } from './styles/loading'

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody />
      <Pictures src={'/images/users/${src}.png'} />
    </Spinner>
  )
}
