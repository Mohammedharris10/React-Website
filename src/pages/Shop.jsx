import React from 'react'
import { Hero } from '../component/Hero/Hero'
import { Popular } from '../component/Popular/Popular'
import { Offers } from '../component/Offers/Offers'
import { NewCollection } from '../component/NewCollection/NewCollection'
import { NewsLetter } from '../component/NewsLetter/NewsLetter'
import { Footer } from '../component/Footer/Footer'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers />
      <NewCollection/>
      <NewsLetter />
      {/* <Footer /> */}
    </div>
  )
}
