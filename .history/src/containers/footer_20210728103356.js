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
          <Footer.Link href=" #">Netphlix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href=" #">Help Center</Footer.Link>
          <Footer.Link href=" #">Jobs</Footer.Link>
          <Footer.Link href=" #">Terms Of USe</Footer.Link>
          <Footer.Link href=" #">Corporate Information</Footer.Link>
          <Footer.Link href=" #">Netphlix Originals</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  )
}