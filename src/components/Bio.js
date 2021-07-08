import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './mg_shot.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Michael Forde`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          A blog by <strong>Michael Forde</strong> who lives and works in Ireland making stuff{' '}
          <a href="https://twitter.com/fordetek">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
