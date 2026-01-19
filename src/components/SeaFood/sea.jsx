import React from 'react'
import bgImage from  '../../assets/seafood-banner.jpg'
import CategoryPage from '../CategoryPage/CategoryPage'

const sea = () => {
  return (
    <div>
    <CategoryPage  title="Meat & SeaFood" bgImage={bgImage} categories={['SeaFood']}/>
    </div>
  )
}

export default sea
