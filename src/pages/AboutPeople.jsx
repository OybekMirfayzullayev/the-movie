import React, { useEffect, useState } from "react";
import { apiClient } from "../utils/api";
import { useParams } from "react-router-dom";

export default function AboutPeople() {
  const [aboutAct, setActor] = useState([]);
  const { id } = useParams();

  const getActor = async () => {
    let res = await apiClient.get(
      `/person/${id}?language=en-US&api_key=YOUR_API_KEY`
    );
    console.log(res.data);
    setActor(res.data);
  };

  useEffect(() => {
    getActor();
  }, []);

  return (
    <div className="container border flex pt-8 font-sourceSans">
      <div className="w-[25%] h-full flex items-center justify-center">
        <img
          src={
            `https://media.themoviedb.org/t/p/w300_and_h450_bestv2` +
            aboutAct.profile_path
          }
          alt={aboutAct.name}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="w-[75%] h-full flex flex-col pl-5">
        <div className="flex flex-col">
          <h1 className="text-[35px] font-bold mb-3">{aboutAct.name}</h1>
          <h4 className="text-[20px] font-semibold mb-1">Biography</h4>
          <p className="text-[16px]">{aboutAct.biography}</p>
        </div>
      </div>
    </div>
  );
}
