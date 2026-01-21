import './App.css'
import React from 'react';
const MoviesList = React.lazy(() => import("./components/MoviesList"))
import Loading from './components/Loading';


import React, { Suspense } from 'react';
function App() {


  return (
    <>
<Suspense fallback={<Loading/>}>
 <MoviesList />
</Suspense>
    </>
  )
}

export default App
