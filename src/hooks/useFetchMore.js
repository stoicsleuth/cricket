import { useState } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener'

import { get } from 'lodash'

function useFetchMore(key, records, fetchMore) {
  const [ doneFetching, setDoneFetching ] = useState(false)

  useBottomScrollListener(() => {
    if (doneFetching) return

    fetchMore({
      variables: {
        page: (records.length / 10)
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const previousResultRecords = get(previousResult, key)
        const fetchMoreResultRecords = get(fetchMoreResult, key)

        return {
          [key]: [ ...previousResultRecords, ...fetchMoreResultRecords ]
        }
      }
    }).then((response) => {
      if (!response || !response.data) {
        return
      }
      if (get(response.data, key).length === 0) {
        setDoneFetching(true)
      }
    })
  })

  const reloading = records?.length > 1 && !doneFetching

  return [ reloading ]
}

export default useFetchMore
