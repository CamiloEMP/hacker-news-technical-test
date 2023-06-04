import useSWR from 'swr'

import { getTopStories } from '../services/hacker-news'

export function useTopStories() {
  const { data, error, isLoading } = useSWR<number[], Error>('topstories', () =>
    getTopStories({
      page: 1,
      limit: 10,
    }),
  )

  return {
    topStories: data,
    isLoading,
    isError: error,
  }
}
