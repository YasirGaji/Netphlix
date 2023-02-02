import React from 'react'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import {useContent}  from '../hooks/useContent'

export default function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')
  


  return (
    <>
      <HeaderContainer />
      <FooterContainer />
    </>
  )
}
