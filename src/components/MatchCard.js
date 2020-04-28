import PropTypes from 'prop-types'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { find } from 'lodash'

import Separator from './Separator'
import formatDuration from '../utils/formatDuration'

import '../styles/colors.scss'
import FlagImage from './FlagImage'

const useStyles = createUseStyles(() => {
  const commonStyles = {
    height: 1,
    position: 'absolute',
    left: -28,
    top: '50%',
    transform: 'translateY(-50%)',
    content: '""',
    borderTop: '1.5px solid #fff',
    borderBottom: '0.5px solid #fff'
  }

  return {
    matchHeading: {
      background: 'linear-gradient(90deg, rgba(228, 229, 231, 0), rgb(227, 228, 230), rgb(227, 228, 230), rgba(228, 229, 231, 0));'
    },
    matchTime: {
      '&::before': {
        ...commonStyles,

        left: '-12%',
        borderRight: '25px solid #fcebda'
      },
      '&::after': {
        ...commonStyles,

        left: '102%',
        borderLeft: '25px solid #fcebda'
      }
    }
  }
})

function MatchCard({
  status,
  match: {
    seriesName, matchNumber, venue, homeTeamName, awayTeamName, startDate, matchScore, matchResult
  } = {}
}) {
  const classes = useStyles()
  const date = formatDuration(startDate)

  const cardFooterContent = status !== 'upcoming' ? matchResult : date

  const teamNameMapping = matchScore.reduce(
    (acc, team) => ({ ...acc, [team.teamShortName]: team.teamFullName }), {}
  )

  return (
    <div className="mb4 w-100 w-50-ns br2 shadow-6 pr3-ns pb3-ns">
      <div className="bg-white">
        <Separator />
        <p className={`${classes.matchHeading} navy-80 pa3 f6 fw6 mt0 gradient-lily`}>
          {seriesName}
        </p>
        <div className="ph3 flex flex-column justify-between">
          <p className="f6 fw6">{`${matchNumber}, ${venue || ''}`}</p>
          <div className="flex w-100">
            <div className="flex h3 flex-column w-20 w-10-ns justify-around">
              <FlagImage
                className="w-40 shadow-4"
                src={`https://images.cricket.com/teams/${find(matchScore, { teamShortName: homeTeamName }).teamID}_flag.png`}
                alt="flag"
              />
              <FlagImage className="w-40 shadow-4" src={`https://images.cricket.com/teams/${find(matchScore, { teamShortName: awayTeamName }).teamID}_flag.png`} alt="flag" />
            </div>
            <div className="flex h3 flex-column 2-80 justify-around">
              <p className="f5 fw6 ma0">{teamNameMapping[homeTeamName]}</p>
              <p className="f5 fw6 ma0">{teamNameMapping[awayTeamName]}</p>
            </div>
          </div>
          <div className="flex justify-center w-100">
            <span className={`${classes.matchTime} relative f7 bg-off-orange dark-gray w-60 tc ph4 pv1 ma3 br-pill`}>
              {cardFooterContent}
            </span>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  )
}

MatchCard.propTypes = {
  match: PropTypes.object.isRequired,
  status: PropTypes.oneOf([ 'upcoming', 'live', 'completed' ]).isRequired
}

export default MatchCard
