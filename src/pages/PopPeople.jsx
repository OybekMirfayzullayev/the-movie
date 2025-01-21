import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiClient } from "../utils/api";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

export default function PopPeople() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)


  const getPeople = async () => {
    let res = await apiClient.get(`/person/popular?language=en-US&page=${page}`)
    setPeople(res?.data.results);
    setTotal(res?.data.total_results);
  };

  useEffect(() => {
    getPeople();
  }, [page]);
  return (
    <div className="container">
        <h1 className="text-2xl font-bold my-7">Popular People</h1>
      <div className=" grid grid-cols-4 gap-7 mb-9">
      {people.map((person) => {
        return (
          <div key={person.id} className="border rounded-t-xl overflow-hidden">
              <Link key={person.id} to={`/person/${person.id}`}>
                <div className="">
                  <img
                    src={"https://media.themoviedb.org/t/p/w235_and_h235_face" + person?.profile_path}
                    alt={person.name}
                    className="w-full h-auto object-cover"/>
                    <h1>{person?.name}</h1>
                    {
                      person?.known_for?.length > 0 && (
                        <>
                        {person.known_for?.map((item)=>{return item
                          .title})}
                        </>
                      )
                    }
                </div>
              </Link>
          </div>
        );
      })}
      </div>
      <div className="mb-7 w-full flex justify-center">
        <Pagination defaultCurrent={1} total={total} 
        defaultPageSize={20}
        showSizeChanger={false}
        onChange={(page)=>{
          setPage(page)
          
        }} />
      </div>
    </div>
  );
}
