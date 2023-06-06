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
    <section className="p-4 space-y-4">
      <h2 className="text-xl font-semibold text-center">TOP STORIES</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {topStories?.map(id => (
          <TopStory key={id} id={id} />
        ))}
      </ul>
    </section>
  )
}
