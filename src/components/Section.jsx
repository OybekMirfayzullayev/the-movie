import React, { Fragment } from 'react'
import Trending from "./TrendingSec.jsx"
import Trailers from "./Trailers.jsx"
import Popular from "./Popular.jsx"
import Leader from "./Leaderboard.jsx"

export default function Section() {
  return (
    <Fragment>
    <div
      className="relative bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h427_multi_faces/3Be8kvRZsvKn1rQFHMLVLEUX9Sn.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome.</h1>
        <p className="text-lg mb-6">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>

        <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden mx-auto">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person..."
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none "
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
            Search
          </button>
        </div>
      </div>

    </div>
          <Trending/>
          <Trailers/>
          <Popular/>
          <Leader/>
      </Fragment>
  )
}
