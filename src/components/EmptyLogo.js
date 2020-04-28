import React from 'react'

import bat from '../assets/images/bat.svg'

function EmptyLogo() {
  return (
    <div className="w-100 vh-50 flex flex-column justify-center items-center">
      <img src={bat} className="w3 pb2" alt="no matches" />
      <p className="f6 fw8">No matches found!</p>
    </div>
  )
}

export default EmptyLogo
