import React from "react";

const trendingData = [
  {
    id: 1,
    title: "Squid Game",
    date: "Sep 17, 2021",
    rating: 78,
    image: "https://resizing.flixster.com/pEBczBamx-gHmTasBaajPymDTN0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNjdhNjc3MDMtMThlNS00MTdmLWI5MGYtNjFkMjViZjJlZmFkLmpwZw==",
  },
  {
    id: 2,
    title: "Wicked",
    date: "Nov 20, 2024",
    rating: 74,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbHuu7Rvw4Er-uVq4ApOU9Dlf-PQtYIgDxw&s",
  },
  {
    id: 3,
    title: "Wallace & Gromit",
    date: "Jan 03, 2025",
    rating: 77,
    image: "https://m.media-amazon.com/images/I/51ENTJWR89L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "Silo",
    date: "May 04, 2023",
    rating: 82,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKvcW95SVpT8W0hjmFyZNXMT6NcOifRLJQg&s",
  },
  {
    id: 5,
    title: "Nosferatu",
    date: "Dec 25, 2024",
    rating: 67,
    image: "https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 6,
    title: "Mufasa: The Lion King",
    date: "Dec 18, 2024",
    rating: 74,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZq_C91_xq2_VqRb3tj6zzpWYCOt_40uxBA&s",
  },
  {
    id: 1,
    title: "Squid Game",
    date: "Sep 17, 2021",
    rating: 78,
    image: "https://resizing.flixster.com/pEBczBamx-gHmTasBaajPymDTN0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNjdhNjc3MDMtMThlNS00MTdmLWI5MGYtNjFkMjViZjJlZmFkLmpwZw==",
  },
  {
    id: 2,
    title: "Wicked",
    date: "Nov 20, 2024",
    rating: 74,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbHuu7Rvw4Er-uVq4ApOU9Dlf-PQtYIgDxw&s",
  },
  {
    id: 3,
    title: "Wallace & Gromit",
    date: "Jan 03, 2025",
    rating: 77,
    image: "https://m.media-amazon.com/images/I/51ENTJWR89L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "Silo",
    date: "May 04, 2023",
    rating: 82,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwKvcW95SVpT8W0hjmFyZNXMT6NcOifRLJQg&s",
  },
  {
    id: 5,
    title: "Nosferatu",
    date: "Dec 25, 2024",
    rating: 67,
    image: "https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 6,
    title: "Mufasa: The Lion King",
    date: "Dec 18, 2024",
    rating: 74,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZq_C91_xq2_VqRb3tj6zzpWYCOt_40uxBA&s",
  },
];

const TrendingSection = () => {
  return (
    <div className="container">
        <div className="bg-white py-10 px-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Trending</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Today
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
            This Week
          </button>
        </div>
      </div>
      <div className="flex overflow-x-scroll space-x-4">
        {trendingData.map((item) => (
          <div
            key={item.id}
            className="min-w-[150px] bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-green-500 text-white text-sm font-bold rounded-full px-2 py-1">
                {item.rating}%
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold truncate">{item.title}</h3>
              <p className="text-gray-500 text-xs">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TrendingSection;
