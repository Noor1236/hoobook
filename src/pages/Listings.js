import { useState } from "react";
import { Link } from "react-router-dom";
import serena from "../assets/isb-serena-hotel.jpg";
import pearl from "../assets/Pearl Continental.jpg";
import avari from "../assets/Avari Hotel.webp";
import shangrila from "../assets/Shangrila Resort.jpeg";
import eagle from "../assets/Eagle Nest Hotel.jpeg";
import marriott from "../assets/Marriott Hotel.jpg";

const Listings = () => {
  const [filters, setFilters] = useState({
    priceRange: "",
    rating: "",
    amenities: [],
    location: "",
  });

  const [sortOption, setSortOption] = useState("");

  const hotels = [
    { id: 1, name: "Serena Hotel", price: 70000, rating: 4.8, location: "Islamabad", amenities: ["WiFi", "Pool"], bookings: 120, image: serena },
    { id: 2, name: "Pearl Continental", price: 56000, rating: 4.6, location: "Karachi", amenities: ["Gym", "Parking"], bookings: 180, image: pearl },
    { id: 3, name: "Avari Hotel", price: 50000, rating: 4.5, location: "Lahore", amenities: ["WiFi", "Breakfast"], bookings: 160, image: avari },
    { id: 4, name: "Shangrila Resort", price: 85000, rating: 4.9, location: "Skardu", amenities: ["Pool", "Parking"], bookings: 90, image: shangrila },
    { id: 5, name: "Eagle Nest Hotel", price: 45000, rating: 4.3, location: "Hunza", amenities: ["WiFi", "Parking"], bookings: 75, image: eagle },
    { id: 6, name: "Marriott Hotel", price: 75000, rating: 4.7, location: "Islamabad", amenities: ["Gym", "Breakfast"], bookings: 200, image: marriott },
  ];

  // Agar koi filter apply nahi hai, toh sari hotels dikhani hain
  let filteredHotels = hotels;

  if (filters.priceRange || filters.rating || filters.location || filters.amenities.length > 0) {
    filteredHotels = hotels
      .filter((hotel) => (filters.priceRange ? hotel.price <= parseInt(filters.priceRange) : true))
      .filter((hotel) => (filters.rating ? hotel.rating >= parseFloat(filters.rating) : true))
      .filter((hotel) => (filters.location ? hotel.location === filters.location : true))
      .filter((hotel) => (filters.amenities.length > 0 ? filters.amenities.every((amenity) => hotel.amenities.includes(amenity)) : true));
  }

  // Sort hotels
  if (sortOption) {
    filteredHotels = [...filteredHotels].sort((a, b) => {
      if (sortOption === "lowest-price") return a.price - b.price;
      if (sortOption === "highest-rating") return b.rating - a.rating;
      if (sortOption === "most-booked") return b.bookings - a.bookings;
      return 0;
    });
  }

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        amenities: checked ? [...prevFilters.amenities, value] : prevFilters.amenities.filter((amenity) => amenity !== value),
      }));
    } else {
      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
    }
  };

  return (
    <div className="p-6 bg-black text-white">
      <h2 className="text-2xl text-center text-purple-500 mb-4">Available Hotels</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange} className="p-2 rounded-md text-black w-48">
          <option value="">Select Price Range</option>
          <option value="50000">Up to 50,000 PKR</option>
          <option value="70000">Up to 70,000 PKR</option>
          <option value="90000">Up to 90,000 PKR</option>
        </select>

        <select name="rating" value={filters.rating} onChange={handleFilterChange} className="p-2 rounded-md text-black w-48">
          <option value="">Select Rating</option>
          <option value="4.0">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.8">4.8+ Stars</option>
        </select>

        <select name="location" value={filters.location} onChange={handleFilterChange} className="p-2 rounded-md text-black w-48">
          <option value="">Select Location</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Skardu">Skardu</option>
          <option value="Hunza">Hunza</option>
        </select>
      </div>

      {/* Amenities */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["WiFi", "Pool", "Gym", "Parking", "Breakfast"].map((amenity) => (
          <label key={amenity} className="flex items-center space-x-1 text-sm">
            <input type="checkbox" value={amenity} checked={filters.amenities.includes(amenity)} onChange={handleFilterChange} className="accent-purple-500" />
            <span>{amenity}</span>
          </label>
        ))}
      </div>

      {/* Sort Options */}
      <div className="flex justify-center mb-6">
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="p-2 rounded-md text-black w-48">
          <option value="">Sort By</option>
          <option value="lowest-price">Lowest Price</option>
          <option value="highest-rating">Highest Rating</option>
          <option value="most-booked">Most Booked</option>
        </select>
      </div>

      {/* Hotel Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg text-purple-400 mt-2">{hotel.name}</h3>
              <p>Price: {hotel.price.toLocaleString()} PKR/night</p>
              <p>Rating: ⭐ {hotel.rating}</p>
              <p>Location: {hotel.location}</p>
              <p>Amenities: {hotel.amenities.join(", ")}</p>
              <p>Bookings: {hotel.bookings}</p>
              <Link to={`/hotel/${hotel.id}`} className="mt-2 bg-purple-500 hover:bg-purple-700 text-black py-2 px-4 rounded text-center block">
                View Details
              </Link>
            </div>

          ))

        ) : (
          <p className="text-gray-400 text-center w-full">No hotels match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
