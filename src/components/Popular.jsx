import React from "react";

const popularItems = [
    {
        id: 1,
        title: "Silo",
        date: "May 04, 2023",
        score: 82,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/76/%D0%A3%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5_%282023%29.jpg/800px-%D0%A3%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5_%282023%29.jpg",
      },
      {
        id: 2,
        title: "Suidooster",
        date: "Nov 16, 2015",
        score: 77,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvINx3cctIZLL-3nYC0i2jsxwicOTLR1ntQ&s",
      },
      {
        id: 3,
        title: "Garota do Momento",
        date: "Nov 04, 2024",
        score: 79,
        image: "https://m.media-amazon.com/images/M/MV5BNjIwY2E5M2EtY2UwZi00MjE2LTgwMjEtYjFjYjVhZTY3MjJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: 4,
        title: "TMZ",
        date: "Sep 10, 2007",
        score: 48,
        image: "https://m.media-amazon.com/images/M/MV5BMDhjNDBhOTMtOWFkNi00MmQ1LTlmMzEtOWEyMDdkN2I5NGIyXkEyXkFqcGc@._V1_.jpg",
      },
      {
        id: 5,
        title: "Coronation Street",
        date: "Dec 09, 1960",
        score: 53,
        image: "https://m.media-amazon.com/images/M/MV5BMTM0MTI3MjAxMV5BMl5BanBnXkFtZTcwMDAxNzYxNA@@._V1_FMjpg_UX1000_.jpg",
      },
    {
        id: 1,
        title: "Silo",
        date: "May 04, 2023",
        score: 82,
        image: "https://upload.wikimedia.org/wikipedia/ru/thumb/7/76/%D0%A3%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5_%282023%29.jpg/800px-%D0%A3%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5_%282023%29.jpg",
      },
      {
        id: 2,
        title: "Suidooster",
        date: "Nov 16, 2015",
        score: 77,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvINx3cctIZLL-3nYC0i2jsxwicOTLR1ntQ&s",
      },
      {
        id: 3,
        title: "Garota do Momento",
        date: "Nov 04, 2024",
        score: 79,
        image: "https://m.media-amazon.com/images/M/MV5BNjIwY2E5M2EtY2UwZi00MjE2LTgwMjEtYjFjYjVhZTY3MjJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: 4,
        title: "TMZ",
        date: "Sep 10, 2007",
        score: 48,
        image: "https://m.media-amazon.com/images/M/MV5BMDhjNDBhOTMtOWFkNi00MmQ1LTlmMzEtOWEyMDdkN2I5NGIyXkEyXkFqcGc@._V1_.jpg",
      },
      {
        id: 5,
        title: "Coronation Street",
        date: "Dec 09, 1960",
        score: 53,
        image: "https://m.media-amazon.com/images/M/MV5BMTM0MTI3MjAxMV5BMl5BanBnXkFtZTcwMDAxNzYxNA@@._V1_FMjpg_UX1000_.jpg",
      },
];

const WhatsPopular = () => {
  return (
   <div className="container">
     <div className="p-6 bg-white text-black">
      {/* Header */}
      <h2 className="text-xl font-bold mb-4">What's Popular</h2>

      {/* Scrollable Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {popularItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-40">
              {/* Image */}
              <div className="relative">
                <img src={item.image} alt={item.title} className="rounded-lg w-full" />
                {/* Score */}
                <div className="absolute top-2 left-2 bg-green-700 text-white text-xs font-bold rounded-full px-2 py-1">
                  {item.score}°
                </div>
              </div>

              {/* Title and Date */}
              <h3 className="text-sm font-semibold mt-2">{item.title}</h3>
              <p className="text-xs text-gray-600">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default WhatsPopular;


















