import type { TopStory } from '../types'

import { Link } from 'wouter'

import { useStory } from '../hooks/useStory'

export function TopStory({ id }: { id: number }) {
  const { isError, isLoading, story } = useStory<TopStory>(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  if (!story) {
    return null
  }

  return (
    <Link to="/">
      <h2>{story.title}</h2>
      {story.score}
    </Link>
  )
}
