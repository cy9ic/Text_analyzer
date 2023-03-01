import React from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  return (
  <>
<div className="mb-3">
  <h1>{props.heading}</h1>  
  <div className='mb-3'>
  <label forwhich="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</div>

</>
  )
}
