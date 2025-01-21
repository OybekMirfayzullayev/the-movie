import React from "react";

const leaderboardData = [
  { id: 1, name: "Shei", allTime: 1467815, thisWeek: 19810, avatar: "https://media.themoviedb.org/t/p/w150_and_h150_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg", color: "bg-red-200" },
  { id: 2, name: "talestalker", allTime: 1242822, thisWeek: 6628, avatar: "https://media.themoviedb.org/t/p/w64_and_h64_face/hjvyN4SrXqXy316GkbOshW8sGXJ.jpg", color: "bg-blue-200" },
  { id: 3, name: "chkchkboom", allTime: 107120, thisWeek: 6228, avatar: "https://media.themoviedb.org/t/p/w64_and_h64_face/fEwOBxzLc0XzrusWoxPtjDwEvgO.jpg", color: "bg-green-200" },
  { id: 4, name: "Gargots", allTime: 48564, thisWeek: 3883, avatar: "https://media.themoviedb.org/t/p/w64_and_h64_face/fEwOBxzLc0XzrusWoxPtjDwEvgO.jpg", color: "bg-yellow-200" },
  { id: 5, name: "CXC6000", allTime: 196868, thisWeek: 3263, avatar: "https://media.themoviedb.org/t/p/w150_and_h150_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg", color: "bg-purple-200" },
  { id: 6, name: "ucdrlg", allTime: 246705, thisWeek: 2908, avatar: "https://media.themoviedb.org/t/p/w64_and_h64_face/hjvyN4SrXqXy316GkbOshW8sGXJ.jpg", color: "bg-pink-200" },
];

const Leaderboard = () => {
  return (
    <div className="p-6 bg-white container">
      <h2 className="text-xl font-bold mb-4">Leaderboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leaderboardData.map((user) => (
          <div key={user.id} className="flex items-center space-x-4">
            <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />

            <div className="flex-1">
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <div className="text-sm text-gray-600 flex justify-between">
                <span>All Time Edits</span>
                <span>{user.allTime.toLocaleString()}</span>
              </div>
              <div className="relative bg-gray-200 rounded-full h-2">
                <div
                  className={`absolute top-0 left-0 h-2 rounded-full ${user.color}`}
                  style={{ width: `${(user.allTime / 1500000) * 100}%` }}
                ></div>
              </div>

              <div className="text-sm text-gray-600 flex justify-between mt-1">
                <span>Edits This Week</span>
                <span>{user.thisWeek.toLocaleString()}</span>
              </div>
              <div className="relative bg-gray-200 rounded-full h-2">
                <div
                  className={`absolute top-0 left-0 h-2 rounded-full ${user.color}`}
                  style={{ width: `${(user.thisWeek / 20000) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
