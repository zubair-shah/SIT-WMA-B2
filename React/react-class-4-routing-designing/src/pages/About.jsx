import React from 'react'
import Link from 'react-router-dom'
function About() {
  return (
    <div>
      <h1>
        <Link href={'/about'}>
          About
        </Link>
      </h1>
    </div>
  )
}

export default About