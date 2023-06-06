import type { TopStory } from '../types'

import { useStory } from '../hooks/useStory'
import { Comment } from '../components/Comment'

export default function DetailTopStory({ id }: { id: number }) {
  const { story, isError, isLoading } = useStory<TopStory>(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !story) {
    return <div>Error</div>
  }

  return (
    <section>
      <h2 className="text-center">{story.title}</h2>
      <ul>
        {story.kids.length > 0 &&
          story.kids.slice(0, 10).map((storyId, index) => (
            <li key={storyId}>
              <Comment id={storyId} index={index} />
            </li>
          ))}
      </ul>
    </section>
  )
}
