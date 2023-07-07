import React from 'react'
import FaqCard from '../../components/FaqCard'

const faq = () => {
  return (
    <div className='w-full flex flex-col px-20 gap-3'>
      <FaqCard header = "Pricing" />
      <FaqCard header = "Services" />
      <a 
      href = "https://nus.edu.sg/uhc/resources/faq/faq"
      className='flex-center w-full mg-16 pt-3'>
        For more information about UHC, please click this 
      </a>
    </div>
  )
}

export default faq