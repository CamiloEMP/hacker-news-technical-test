const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

export const TOP_STORIES_URL = `${BASE_URL}/topstories.json`

export const STORY_URL = (id: number) => `${BASE_URL}/item/${id}.json`
