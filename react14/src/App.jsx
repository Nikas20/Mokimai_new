import './App.css'
import MoviesList from './components/MoviesList'
import {Routes, Route } from "react-router";
import MovieEdit from './components/MovieEdit';
function App() {


  return (
    <>
    <Routes>
      <Route index element={<MoviesList />}/>
</Routes>
    </>
  )
}

export default App
