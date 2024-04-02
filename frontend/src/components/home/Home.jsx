import React from "react"

import Featured from "./featured/Featured"
import Dietss from "./Dietss/Dietss"
import Corousel from "./Corousel/Hero"

import Recent from "./recent/Recent"


const Home = () => {
  return (
    <>
      <Corousel />
      <Featured />
      <Recent />
      <Dietss/>
    </>
  )
}

export default Home
