import { Suspense, lazy } from 'react'
import { Route } from 'wouter'

import { Header } from './components/Header'
import DetailTopStory from './pages/DetailTopStory'

const TopStoriesPage = lazy(() => import('./pages/TopStories'))

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Route component={TopStoriesPage} path="/" />
        <Route path="/story/:id">{params => <DetailTopStory id={Number(params.id)} />}</Route>
      </Suspense>
    </>
  )
}

export default App
