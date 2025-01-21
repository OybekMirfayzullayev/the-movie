import { Dropdown} from "antd";
import React from "react";
import { Link } from "react-router-dom";
// import Section from "./Section.jsx"


const menu =[
  {
    key:'1',
    name:"Movies",
    items:[
      {
        key: '1',
        label: (
          <Link to={"movie/popular"}>
            Popular
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link to={"movie/now_playing"}>
            Now Playing
          </Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link to={"movie/upcoming"}>
            Upcoming
          </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link to={"movie/top_rated"}>
            Top Rated
          </Link>
        ),
      },
    ]
  },
  {
    key:'2',
    name:"TV Shows",
    items:[
      {
        key: '1',
        label: (
          <Link to={"tv/popular"}>
            Popular
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link to={"tv/airing_today"}>
            Airing Today
          </Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link to={"tv/on_the_air"}>
            On TV
          </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link to={"tv/top_rated"}>
            Top Rated
          </Link>
        ),
      },
    ]
  },
  {
    key:'3',
    name:"People",
    items:[
      {
        key: '1',
        label:
          <Link to={"/person"}>
            Popular People
          </Link>
      },
    ]
  },
  {
    key:'4',
    name:"More",
    items:[
      {
        key: '1',
        label: (
          <Link >
            Discussions
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link >
            Leaderboard
          </Link>
        ),
      },
      {
        key: '3',
        label: (
          <Link >
            Support
          </Link>
        ),
      },
      {
        key: '4',
        label: (
          <Link >
            API
          </Link>
        ),
      },
    ]
  },
]
export default function Navbar() {
  return (
    <div className="bg-[#032541]">
      <nav className="flex items-center justify-between px-6 py-6 text-white container">
        <div className="flex items-center gap-10">
            <Link to={"/"}>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="logo" 
            className="w-[170px]"
            /></Link>

          <div className="flex items-center gap-8">

          {
              menu.map((itm) => {
                return <Dropdown
                  menu={{
                   items: itm.items
                  }}
                  placement="bottomLeft"
                  key={itm.key}
                >
                  <button className="">{itm.name}</button>
                </Dropdown>
              
              })
            }
            
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white text-2xl font-bold hover:text-green-400">
            +
          </button>
          <button className="border border-gray-400 px-2 py-1 text-sm rounded hover:border-green-400">
            EN
          </button>
          <div className="relative">
            <button className="text-white hover:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-2.21-1.79-4-4-4V7c0-.93-.775-1.68-1.725-1.725A1.725 1.725 0 0011 7v1a4 4 0 00-4 4v3.159c0 .538-.214 1.055-.595 1.436L5 17h5m0 0v1a3 3 0 106 0v-1m-6 0h6"
                />
              </svg>
            </button>
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-xs text-center rounded-full">
              1
            </span>
          </div>
          <button className="w-8 h-8 bg-pink-500 rounded-full text-center text-white font-bold hover:bg-pink-400">
            M
          </button>
          <button className="text-white hover:text-green-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a7 7 0 107 7H11m0 0a7 7 0 100 14m0-14v2m0-2H9m2 0h2"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
