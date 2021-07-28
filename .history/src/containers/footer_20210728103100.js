import React from 'react'
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href=" #"></Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  )
}