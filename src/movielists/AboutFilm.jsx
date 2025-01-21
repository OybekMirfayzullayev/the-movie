import React, { useEffect, useState } from "react";
import { apiClient } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function AboutFilm() {
  const [aboutF, setAboutF] = useState([]);
  const [credits, setCredits] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const { id } = useParams();

  const getAboutF = async () => {
    let res = await apiClient.get(
      `/movie/${id}?language=en-US&api_key=YOUR_API_KEY`
    );
    // console.log(res.data);
    setAboutF(res.data);
  };

  const getCredits = async () => {
    let res = await apiClient.get(`/movie/${id}/credits?api_key=YOUR_API_KEY`);
    // console.log(res.data.cast);
    setCredits(res.data.cast);
  };
  const getKeywords = async () => {
    let res = await apiClient.get(`/movie/${id}/keywords?api_key=YOUR_API_KEY`);
    console.log(res.data.keywords);
    setKeywords(res.data.keywords);
  };

  useEffect(() => {
    getAboutF();
    getCredits();
    getKeywords();
  }, []);

  return (
    <div>
      <div
        className="h-[550px] font-sourceSans mb-2"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original${aboutF.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <div className="container h-full flex font-sourceSans">
          <div className="w-[300px] h-[450px] flex items-center pt-6">
            <img
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${aboutF.poster_path}`}
              alt={aboutF.original_title}
              className="rounded-xl"
            />
          </div>
          <div className="w-[1000px] flex flex-col h-full pl-6">
            <div className="flex flex-col items-start justify-start mb-7">
              <div className="flex">
                <h1 className="text-[33px] font-bold">
                  {aboutF.original_title + " "}
                  <span className="text-gray-400 font-normal">
                    ({new Date(aboutF.release_date).getFullYear()})
                  </span>
                </h1>
              </div>
              <div className="flex flex-row gap-3">
                <p>
                  {aboutF.release_date} <span>({aboutF.origin_country})</span>
                </p>
                <p>
                  {aboutF.genres && aboutF.genres.length > 0
                    ? aboutF.genres.map((genre) => genre.name).join(", ")
                    : "No genres available"}
                </p>
                <p>
                  {Math.floor(aboutF.runtime / 60)}h {aboutF.runtime % 60}m
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="italic text-[17px] text-gray-400">
                {aboutF.tagline}
              </h3>
              <h3 className="text-[23px]">Overview</h3>
              <p>{aboutF.overview}</p>
            </div>

            <div></div>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto h-auto font-sourceSans gap-4 flex mb-3">
        <div className="w-[1020px] h-full">
          <h1 className="text-[23px] font-bold text-gray-800 mb-3">
            Top Billed Cast
          </h1>
          <div className="w-full flex overflow-x-scroll space-x-3 pl-4">
            {credits.map((actor, index) => (
              <Link to={`/person/${actor.id}`}>
                <div
                  key={index}
                  className="flex-shrink-0 w-[145px] h-[280px] shadow-md rounded-lg overflow-hidden mb-6"
                >
                  <img
                    src={
                      `https://media.themoviedb.org/t/p/w138_and_h175_face` +
                      actor.profile_path
                    }
                    alt={actor.name}
                    className="w-full h-[190px] object-cover"
                  />
                  <div className="p-2">
                    <h2 className="text-[16px] font-bold text-gray-800">
                      {actor.name}
                    </h2>
                    <p className="text-[15px]">{actor.character}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[348px] h-auto ">
          <div className="w-[300px] h-[50px] border mt-[40px] mx-auto flex items-center justify-start gap-4">
            <i><FaFacebook className="w-[33px] h-[33px]" /></i>
            <i><FaTwitter className="w-[33px] h-[33px]" /></i>
            <i><FaInstagram className="w-[33px] h-[33px]" /></i>
          </div>

          <div className="p-4 flex flex-col gap-3">
            <div>
              <strong>Status</strong>
              <p>{aboutF.status}</p>
            </div>
            <div>
              <strong>Original language</strong>
              <p>{aboutF.original_language}</p>
            </div>
            <div>
              <strong>Budget</strong>
              <p>
                {aboutF.budget ? `$${aboutF.budget.toLocaleString()}` : "$0"}
              </p>
            </div>
            <div>
              <strong>Revenue</strong>
              <p>
                {aboutF.revenue ? `$${aboutF.revenue.toLocaleString()}` : "$0"}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <strong className="">Keywords</strong>
              <ul className="flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                  <li key={keyword.id} className="py-2 px-4 bg-gray-200 text-[12.5px] font-medium rounded-md border">{keyword.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
