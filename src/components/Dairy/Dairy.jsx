import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgImage from  '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <div>
     <CategoryPage title = "Dairy & Eggs" bgImage={bgImage} categories={['Dairy']}/>
    </div>
  )
}

export default Dairy
