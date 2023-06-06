import { useStory } from '../hooks/useStory'
import { Comment } from '../types'

export function Comment({ id, index }: { id: number; index: number }) {
  const { isError, isLoading, story } = useStory<Comment>(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !story) {
    return <div>Error</div>
  }

  return (
    <>
      <details
        open
        style={{
          paddingLeft: index * 40,
        }}
      >
        <summary>
          <small>
            <span>{story.by}</span>
            <span>·</span>
          </small>
        </summary>
        <p>{story.text}</p>
      </details>
      {story.kids && story.kids.length > 0
        ? story.kids
            .slice(0, 10)
            .map(storyId => <Comment key={storyId} id={storyId} index={index} />)
        : null}
    </>
  )
}
