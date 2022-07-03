import React from 'react'
import HomePageNavbar from '../components/HomePage/HomePageNavbar';
import HomePageSection from '../components/HomePage/HomePageSection'

const Index = () => {
  return (
    <>
      <HomePageNavbar />
      <HomePageSection imgSrc={"/images/section-2.jpg"} sectionText={2} imageFirst={1}/>
      <HomePageSection imgSrc={"/images/section-1.jpg"} sectionText={2} imageFirst={0}/>
    </>
  )
}

export default Index