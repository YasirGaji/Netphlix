import React from 'react'
import faqsData from "../fixtures/faqs.json"
import { Accordion } from '../components'

export function FaqsContainer() {
  return (
    <>
    <Accordion>
      <Accordion.TItle>Frequently Asked Questions</Accordion.TItle>
    </Accordion>
    </>
  )
}
