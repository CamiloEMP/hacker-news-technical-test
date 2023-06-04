import { TOP_STORIES_URL, STORY_URL } from '../constants'

export async function getTopStories({ page, limit }: { page: number; limit: number }) {
  const res = await fetch(TOP_STORIES_URL)

  const ids = (await res.json()) as number[]

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  return ids.slice(startIndex, endIndex)
}

export async function getItemInfo(id: number) {
  const res = await fetch(STORY_URL(id))

  return await res.json()
}
