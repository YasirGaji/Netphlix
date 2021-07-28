import React from 'react'
import faqsData from "../fixtures/faqs.json"
import { Accordion } from '../components'

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => ( 
        <Accordion.Item key={item.id}>
          <Accordian.Header>hi</Accordian.Header>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
