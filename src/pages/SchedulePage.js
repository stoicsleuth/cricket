
import React, { useState, Fragment } from 'react'
import gql from 'graphql-tag'
import { Helmet } from 'react-helmet'
import { useQuery } from '@apollo/react-hooks'

import MatchCard from '../components/MatchCard'
import useFetchMore from '../hooks/useFetchMore'
import ScheduleTab from '../components/ScheduleTab'
import Loader from '../components/Loader'

const GET_MATCH_SCHEDULE_QUERY = gql`
  query getMatchSchedule($type: String, $status: String, $page: Int) {
    schedule(type: $type, status: $status, page: $page) {
        matchID
        seriesName
        homeTeamName
        firstInningsTeamID
        matchScore{
          teamID
          teamShortName
          teamFullName
        }
        awayTeamName
        toss
        matchStatus
        matchType
        startDate
        statusMessage
        matchNumber
        matchResult
        venue
    }
  }
`

function SchedulePage() {
  const [ status, setStatus ] = useState('upcoming')
  const [ type, setType ] = useState('all')

  const { data: { schedule } = {}, loading, fetchMore, networkStatus } = useQuery(
    GET_MATCH_SCHEDULE_QUERY, {
      variables: {
        type,
        status,
        page: 0
      },
      fetchPolicy: 'cache-and-network'
    }
  )

  useFetchMore('schedule', schedule, fetchMore, loading)

  return (
    <Fragment>
      <Helmet>
        <title>Schedule</title>
      </Helmet>
      <div className="flex w-100 flex-column pt5-ns relative">
        <div className="ph3 ph7-l">
          <p className="black-80 f4 fw8 center">Schedule</p>
          <ScheduleTab type={type} status={status} setType={setType} setStatus={setStatus} />
          <Loader loading={loading} networkStatus={networkStatus}>
            <div className="flex flex-wrap">
              {schedule?.map((match) => (
                <MatchCard status={status} match={match} key={match.matchID} />
              ))}
            </div>
          </Loader>
        </div>
      </div>
    </Fragment>
  )
}

export default SchedulePage
