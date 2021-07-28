import React from 'react'
import faqsData from "../fixtures/faqs.json"
import { Accordian } from '../components'

export default function FaqsContainer() {
  return (
    <Accordian>
      <Accordian.TItle>Frequently Asked Questions</Accordian.TItle>
      {faqsData.map(item => 
        <Accordian.Item key={item.id}>
          <Accordian.Header>{item.header}</Accordian.Header>
          <Accordian.Body>{item.body}</Accordian.Body>
        </Accordian.Item>
      )}
      <Accordian.Item>
      </Accordian.Item>
    </Accordian>
  )
}
