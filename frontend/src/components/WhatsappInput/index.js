import React, { useState } from 'react'

import formatPhone from '../../utils/formatPhone'

function WhatsappInput({onValueChange}) {
  const [formatedNumber, setFormatedNumber] = useState('')

  function handleChange(event) {
    const number = event.target.value.replace(/[()-\s]/g, '')
    onValueChange(number)
    setFormatedNumber(formatPhone(number))
  }

  return (
    <input onChange={handleChange} value={formatedNumber} type="tel" placeholder="WhatsApp" maxLength={15}/>
  )
}

export default WhatsappInput