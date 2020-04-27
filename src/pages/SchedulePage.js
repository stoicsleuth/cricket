
import React, { useState } from 'react'
import gql from 'graphql-tag'
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

  if (loading && networkStatus !== 3) return <Loader />

  return (
    <div className="flex w-100 flex-column pt5-ns">
      <div className="ph3 ph7-l">
        <p className="black-80 f4 fw8 center">Schedule</p>
        <ScheduleTab type={type} status={status} setType={setType} setStatus={setStatus} />
        <div className="flex flex-wrap">
          {schedule.map((match) => (
            <MatchCard status={status} match={match} key={match.matchID} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SchedulePage
