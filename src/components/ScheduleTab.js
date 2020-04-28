/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types'
import React from 'react'
import { upperFirst } from 'lodash'

import { statuses, types } from '../constants/schedule'

function ScheduleTab({ status, type, setType, setStatus }) {
  return (
    <div className="br2 pr3-ns mb3-ns">
      <div className="bg-white">
        <div className="flex w-90 ph3 center pv3">
          {statuses.map((currentStatus, index) => (
            <span
              className={
              `pointer pa2 w-30 f7 fw8 light-silver tc ba b--light-gray
              ${status === currentStatus && 'red'}
              ${status !== currentStatus && 'bg-light-gray'}
              ${index < statuses.length - 1 && 'br-0'}`
            }
              onClick={() => setStatus(currentStatus)}
            >
              {currentStatus.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="flex w-100">
          {types.map((currentType) => (
            <span
              className={
              `pointer ph3 w-30 f6 light-silver tc pb2
              ${type === currentType && 'bb bw1 b--red'}`
            }
              onClick={() => setType(currentType)}
            >
              {upperFirst(currentType)}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

ScheduleTab.propTypes = {
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired
}

export default ScheduleTab
