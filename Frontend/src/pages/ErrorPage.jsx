import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
      <div>
          <h1>Error Page</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <p>Please try again or contact the website administrator.</p>
          <NavLink to="/">Go Back</NavLink>
    </div>
  )
}

export default ErrorPage