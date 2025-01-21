import React from "react";

const Footer = () => {
  return (
    
   <div className="bg-[#032541]">
     <footer className=" text-white py-8 container">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold tracking-wide">
              <span className="text-teal-400">THE</span> <span>MOVIE</span> <span className="text-teal-400">DB</span>
            </div>
          </div>
          <div className="mt-6 sm:mt-0 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            <div>
              <h3 className="font-bold mb-2">THE BASICS</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">About TMDB</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">Support Forums</a></li>
                <li><a href="#" className="hover:underline">API</a></li>
                <li><a href="#" className="hover:underline">System Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">GET INVOLVED</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Contribution Bible</a></li>
                <li><a href="#" className="hover:underline">Add New Movie</a></li>
                <li><a href="#" className="hover:underline">Add New TV Show</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">COMMUNITY</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Guidelines</a></li>
                <li><a href="#" className="hover:underline">Discussions</a></li>
                <li><a href="#" className="hover:underline">Leaderboard</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">LEGAL</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Terms of Use</a></li>
                <li><a href="#" className="hover:underline">API Terms of Use</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">DMCA Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
   </div>
  );
};

export default Footer;
