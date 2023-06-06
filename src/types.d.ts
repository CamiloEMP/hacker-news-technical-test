export interface TopStory {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: 'story'
  url: string
}

export interface Comment {
  by: string
  id: number
  kids?: number[]
  parent: number
  text: string
  time: 1685990024
  type: 'comment'
}
