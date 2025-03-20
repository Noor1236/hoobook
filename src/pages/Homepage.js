import { useState } from "react";
import { useNavigate } from "react-router-dom";
import serena from "../assets/isb-serena-hotel.jpg";
import pearl from "../assets/Pearl Continental.jpg";
import avari from "../assets/Avari Hotel.webp";
import shangrila from "../assets/Shangrila Resort.jpeg";
import eagle from "../assets/Eagle Nest Hotel.jpeg";
import marriott from "../assets/Marriott Hotel.jpg";

import murree from "../assets/Murree.webp";
import skardu from "../assets/Skardu.jpg";
import hunza from "../assets/Hunza_Valley_HDR.jpg";
import swat from "../assets/Swat Valley.jpg";
import fairy from "../assets/Fairy Meadows.jpg";
import neelum from "../assets/Neelum Valley.jpg";

function Homepage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState({
    city: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [filteredHotels, setFilteredHotels] = useState([]);

  const hotels = [
    { name: "Serena Hotel", city: "Islamabad", image: serena, id: 1 },
    { name: "Pearl Continental", city: "Karachi", image: pearl, id: 2 },
    { name: "Avari Hotel", city: "Lahore", image: avari, id: 3 },
    { name: "Shangrila Resort", city: "Skardu", image: shangrila, id: 4 },
    { name: "Eagle Nest Hotel", city: "Hunza", image: eagle, id: 5 },
    { name: "Marriott Hotel", city: "Islamabad", image: marriott, id: 6 },
  ];

  const destinations = [
    { name: "Murree", image: murree, id: "murree" },
    { name: "Skardu", image: skardu, id: "skardu" },
    { name: "Hunza Valley", image: hunza, id: "hunza" },
    { name: "Swat Valley", image: swat, id: "swat" },
    { name: "Fairy Meadows", image: fairy, id: "fairy-meadows" },
    { name: "Neelum Valley", image: neelum, id: "neelum-valley" },
  ];

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const searchQuery = search.city.trim().toLowerCase();
    if (!searchQuery) {
      setFilteredHotels([]); // Reset if search is empty
      return;
    }

    const results = hotels.filter((hotel) =>
      hotel.city.toLowerCase().includes(searchQuery)
    );
    setFilteredHotels(results);
  };

  const goToHotelDetail = (id) => {
    navigate(`/hotel/${id}`);
  };

  const goToDestinationDetail = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <div className="p-6 bg-black text-white">
      {/* Search Bar */}
      <div className="bg-gray-900 p-6 rounded-lg flex flex-wrap gap-4 justify-center">
        <input
          type="text"
          name="city"
          placeholder="Search by City"
          value={search.city}
          onChange={handleChange}
          className="p-2 rounded-md text-black w-full sm:w-60"
        />
        <input
          type="date"
          name="checkIn"
          value={search.checkIn}
          onChange={handleChange}
          className="p-2 rounded-md text-black w-full sm:w-40"
        />
        <input
          type="date"
          name="checkOut"
          value={search.checkOut}
          onChange={handleChange}
          className="p-2 rounded-md text-black w-full sm:w-40"
        />
        <input
          type="number"
          name="guests"
          min="1"
          value={search.guests}
          onChange={handleChange}
          className="p-2 rounded-md text-black w-full sm:w-20"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition-all"
        >
          Search
        </button>
      </div>

      {/* Available Hotels */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl text-purple-500">Available Hotels</h2>
        <p className="text-gray-400 mt-2">
          Explore the best hotels across different cities and make your stay
          comfortable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {(filteredHotels.length > 0 ? filteredHotels : hotels).map(
            (hotel) => (
              <div
                key={hotel.id}
                onClick={() => goToHotelDetail(hotel.id)}
                className="bg-gray-900 p-4 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <h3 className="text-lg text-purple-400">{hotel.name}</h3>
                <p>{hotel.city}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl text-purple-500">Popular Destinations</h2>
        <p className="text-gray-400 mt-2">
          Discover breathtaking destinations perfect for your next vacation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              onClick={() => goToDestinationDetail(destination.id)}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg text-purple-300">{destination.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
