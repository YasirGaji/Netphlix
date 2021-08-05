import React from 'react'
import { useContent } from '../hooks'

export default function Browse() {
  const { series } = useContent('series')
  console.log(series)
  return (
    <div>
      hello browse
    </div>
  )
}
