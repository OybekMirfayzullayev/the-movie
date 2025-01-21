import React from "react";

const trailers = [
  {
    id: 1,
    title: "Mufasa: The Lion King",
    subtitle: "In Theaters Now",
    image: "https://i.ytimg.com/vi/o17MF9vnabg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnYHKZSgjeh2k_LQCT1fjLzEbSRQ",
  },
  {
    id: 2,
    title: "Companion",
    subtitle: "Things are getting pretty serious.",
    image: "https://i.ytimg.com/vi/hkE9HZU0qyM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDGZd_038r6rc_y28gJaWY9CC1dXg",
  },
  {
    id: 3,
    title: "Sonic the Hedgehog 3",
    subtitle: "GAME ON!!!",
    image: "https://i.ytimg.com/vi/jOyZOlD6Yg0/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Babygirl",
    subtitle: "In UK and Irish cinemas January 10",
    image: "https://i.ytimg.com/vi/9XXoNB0lVGo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAk5C1aoGbaxi7vqY84xIhYHEQ9cw",
  },
];

const LatestTrailers = () => {
  return (
    <div className="bg-[#032541]">
      <div className="container text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Latest Trailers</h1>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Popular</button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">In Theaters</button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {trailers.map((trailer) => (
          <div key={trailer.id} className="relative group">
            <img src={trailer.image} alt={trailer.title} className="rounded-lg w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity">
              <button className="bg-white text-black rounded-full p-2">
                ▶
              </button>
            </div>
            <h3 className="text-lg font-semibold mt-2">{trailer.title}</h3>
            <p className="text-sm text-gray-400">{trailer.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default LatestTrailers;
