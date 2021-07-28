import React from 'react'
import { Footer } from '../components';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href=" #">FAQ</Footer.Link>
          <Footer.Link href=" #">Investor Relations</Footer.Link>
          <Footer.Link href=" #">Ways To Watch</Footer.Link>
          <Footer.Link href=" #">Corporate Information</Footer.Link>
          <Footer.Link href=" #">Netphlixlix Originals</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  )
}