import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../utils/api.js";
import { Pagination } from "antd";
import useFormatTime from "../Hooks/useFormatTime.jsx";

export default function TvShows() {
    const genres = [
        'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family',
        'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie',
        'Thriller', 'War', 'Western'
      ];
    const [currentPage, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [runtime, setRuntime] = useState(0);
    const [score, setScore] = useState(0);
    const [show, setShow] = useState()
    const {formatTime} = useFormatTime()
    let params = useParams()
      
    const handleInputChange = (e) => {
    setRuntime(e.target.value);
    };
    const userscore = (e) => {
    setScore(e.target.value);
    };

    const getTvshow = async(page = 1)=>{
        let res = await apiClient.get(`/tv/${params.type}?language=en-US&page=${page}`)
        setShow(res?.data.results);
        setTotalResults(res?.data.total_results)
    }

    const PageChange = (page)=>{
        setPage(page)
        getTvshow(page)
      }

    useEffect(()=>{
        getTvshow(currentPage)
    } , [params.type] )

  return (
    <div className="container">
      <div className=" py-10 flex gap-5">
        <div className="w-[19%]">
          <div className="p-4 bg-gray-100 rounded-md w-[254px] h-[1300px] overflow-auto">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium">Show Me</label>
              <div className="flex flex-col gap-2 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="show" defaultChecked />
                  Everything
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="show" />
                  Movies I Haven't Seen
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="show" />
                  Movies I Have Seen
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Search all releases?
              </label>
              <div className="mt-2 flex flex-col gap-2">
                <input
                  type="date"
                  className="border p-2 rounded-md w-full"
                  placeholder="From"
                />
                <input
                  type="date"
                  className="border p-2 rounded-md w-full"
                  placeholder="To"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Genres</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    className="px-3 py-1 rounded-full border bg-white text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Language</label>
              <select className="border p-2 rounded-md w-full">
                <option value="">None Selected</option>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">User Score</label>
              <div className="flex flex-col gap-2 mt-2">
                <input 
                    type="range" 
                    min="0" 
                    max="10"
                    value={score}
                    onInput={userscore} />
                <span>{score}</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Minimum User Votes
              </label>
              <input type="number" className="border p-2 rounded-md w-full" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Runtime</label>
              <div className="flex flex-col gap-2 mt-2">
                <input 
                    type="range" 
                    min="0" 
                    max="360"
                    value={runtime}
                    onInput={handleInputChange} />
                <span>{runtime} - 360 mins</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Keywords</label>
              <input
                type="text"
                className="border p-2 rounded-md w-full"
                placeholder="Filter by keywords..."
              />
            </div>
          </div>
        </div>
        <div className="w-[81%] grid grid-cols-5 gap-4">
                {
                    show?.map((item)=>{
                        return(
                            <div key={item.id} className='border rounded-xl overflow-hidden h-[370px]'>
                              <img src={"https://media.themoviedb.org/t/p/w220_and_h330_face"+item?.poster_path} alt={item.name} className='w-full h-[80%]'/>
                              <div className='h-[20%] ml-3 flex justify-center flex-col'>
                                <p>{item?.name}</p>
                                <p>{formatTime(item.first_air_date)}</p>
                              </div>
                            </div>
                          )
                    })
                }
        </div>
      </div>
      <div className="mb-7 w-full flex justify-center">
        <Pagination
          current={currentPage} // Hozirgi sahifa
          total={totalResults} // Umumiy natijalar soni
          pageSize={20} // Har sahifadagi filmlar soni
          onChange={PageChange} // Sahifa o'zgarganda
          showSizeChanger={false} // Sahifa hajmini o'zgartirishni o'chirish
        />
      </div>
    </div>
  );
}
