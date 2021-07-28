import React from 'react'
import faqsData from "../fixtures/faqs.json"
import { Accordian } from '../components'
import { map } from 'async'

export default function FaqsContainer() {
  return (
    <Accordian>
      <Accordian.TItle>Frequently Asked Questions</Accordian.TItle>
      {faqsData.map(item => 
        <Accordian.Item key={item.id}>
          <Accordian.Header>{item.header}</Accordian.Header>
        </Accordian.Item>
      )}
      <Accordian.Item>

      </Accordian.Item>
    </Accordian>
  )
}
