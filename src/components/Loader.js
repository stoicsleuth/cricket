import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

function TextLoader() {
  return (
    <div className="w-100 vh-100 flex justify-center items-center">
      Loading...
    </div>
  )
}

function Loader({ loading, networkStatus, children }) {
  if (!loading) return children

  if (loading && networkStatus !== 3) return <TextLoader />

  return (
    <Fragment>
      <div className="w-100 vh-100 relative">
        <svg
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
          xmlSpace="preserve"
          className="w2 fixed top-1 right-2"
        >
          <circle fill="transparent" stroke="#e74c3c" strokeWidth="6" cx="50" cy="50" r="44" className="o-80" />
          <circle fill="#fff" stroke="#fff" strokeWidth="3" cx="8" cy="54" r="4">
            <animateTransform
              attributeName="transform"
              dur="2s"
              type="rotate"
              from="0 50 48"
              to="360 50 52"
              repeatCount="indefinite"
            />

          </circle>
        </svg>
      </div>
      {children}
    </Fragment>
  )
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  networkStatus: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
}

export default Loader
