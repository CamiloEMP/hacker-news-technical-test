import useSWR from 'swr'

import { getItemInfo } from '../services/hacker-news'

export function useStory<T>(id: number) {
  const { data, error, isLoading } = useSWR<T, Error>(`/story/${id}`, () => getItemInfo(id))

  return {
    story: data,
    isError: error,
    isLoading,
  }
}
