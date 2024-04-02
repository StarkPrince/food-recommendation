import React from "react"
import Heading from "../../common/Heading"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Our plans'  />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
