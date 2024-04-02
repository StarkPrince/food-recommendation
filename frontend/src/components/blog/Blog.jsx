import React from "react"

import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Blog
