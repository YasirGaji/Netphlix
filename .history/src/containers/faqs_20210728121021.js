import React from 'react'
import faqsData from "../fixtures/faqs.json"
import { Accordian } from '../components'
import { map } from 'async'

export default function FaqsContainer() {
  return (
    <Accordian>
      <Accordian.TItle>Frequently Asked Questions</Accordian.TItle>
      {faqsData.map(item => 
        <Accordian.Item>
          
        </Accordian.Item>
      )}
      <Accordian.Item>

      </Accordian.Item>
    </Accordian>
  )
}
