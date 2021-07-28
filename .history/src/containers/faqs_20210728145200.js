import React from 'react'
import faqsData from "../fixtures/faqs.json"


export function FaqsContainer() {
  return (
    <>
    <Accordion>
      <Accordion.TItle>Frequently Asked Questions</Accordion.TItle>
      {faqsData.map(item => 
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      )}
      <Accordion.Item></Accordion.Item>
    </Accordion>
    </>
  )
}
