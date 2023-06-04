import { useTopStories } from '../hooks/useTopStories'

export function TopStories() {
  const { isError, isLoading, topStories } = useTopStories()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return <div>TopStories</div>
}
