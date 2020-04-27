import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  separator: {
    height: 1,
    background: 'linear-gradient(90deg, rgba(228, 229, 231, 0), rgb(227, 228, 230), rgb(227, 228, 230), rgba(228, 229, 231, 0));'
  }
})

function Separator() {
  const classes = useStyles()

  return (
    <div className={`${classes.separator} w-100`} />
  )
}

export default Separator
