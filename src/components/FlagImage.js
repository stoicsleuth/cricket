import PropTypes from 'prop-types'
import React, { useState } from 'react'

import placeholder from '../assets/images/placeholder.png'

function FlagImage({ src, alt, ...others }) {
  const [ image, setImage ] = useState({ src })
  const onError = () => {
    setImage({ src: placeholder })
  }

  return (
    <img src={image.src} {...others} alt={alt} onError={() => onError()} />
  )
}

FlagImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  others: PropTypes.object.isRequired
}

export default FlagImage
