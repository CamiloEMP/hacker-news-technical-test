import { TopStory } from '../components/TopStory'
import { useTopStories } from '../hooks/useTopStories'

export default function TopStories() {
  const { isError, isLoading, topStories } = useTopStories()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <ul>
      {topStories?.map(id => (
        <li key={id}>
          <TopStory id={id} />
        </li>
      ))}
    </ul>
  )
}
