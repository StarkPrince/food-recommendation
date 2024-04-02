import React from "react"
import Heading from "../../common/Heading"
import DietCart from "./DietCart"

const Dietss = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Famous Diet plans'  />
          <DietCart />
        </div>
      </section>
    </>
  )
}

export default Dietss
