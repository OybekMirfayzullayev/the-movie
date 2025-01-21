import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style/main.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Section from './components/Section.jsx'
import PopPeople from './pages/PopPeople.jsx'
import PopFilm from './movielists/PopularFilm.jsx'
import TVShows from './tvshows/TvShows.jsx'
import AboutPeople from './pages/AboutPeople.jsx'
import AboutFilm from "./movielists/AboutFilm.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}>
            <Route path='/person' element={<PopPeople/>}/>
            <Route path='movie/:type' element={<PopFilm/>}/>
            <Route path='tv/:type' element={<TVShows/>}/>
            <Route path='person/:id' element={<AboutPeople/>}/>
            <Route path='movie/:type/:id' element={<AboutFilm/>}/>
            <Route path='/' element={<Section/>}/>
            <Route path='*' element={<div>Page not found</div>}/> 
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)


