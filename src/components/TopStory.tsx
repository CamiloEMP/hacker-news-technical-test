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
    <li className="flex flex-col justify-between w-full max-w-xs gap-4 p-4 border-2 rounded-md shadow border-neutral-800">
      <a className="text-lg font-medium underline" href={story.url} rel="noopener" target="_blank">
        {story.title}
      </a>
      <div className="flex items-center justify-between gap-2">
        <small>{story.score} points</small>
        <Link className="text-sm hover:underline" to="/">
          {story.descendants} comments
        </Link>
        <small>by {story.by}</small>
      </div>
    </li>
  )
}
