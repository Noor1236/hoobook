import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import serena1 from "../assets/serena1.jpg";
import serena2 from "../assets/serena2.jpg";
import serena3 from "../assets/serena3.jpg";
import pc1 from "../assets/pc1.png";
import pc2 from "../assets/pc2.png";
import pc3 from "../assets/pc3.png";
import avari1 from "../assets/avari1.jpg";
import avari2 from "../assets/avari2.jpg";
import avari3 from "../assets/avari3.jpg";
import shangrila1 from "../assets/shangrila1.jpeg";
import shangrila2 from "../assets/shangrila2.jpg";
import shangrila3 from "../assets/shangrila3.jpeg";
import eagle1 from "../assets/eagle1.jpg";
import eagle2 from "../assets/eagle2.jpeg";
import eagle3 from "../assets/eagle3.jpg";
import marriott1 from "../assets/marriott1.jpeg";
import marriott2 from "../assets/marriott2.jpeg";
import marriott3 from "../assets/marriott3.jpeg";


const hotels = [
  {
    id: "1",
    name: "Serena Hotel Islamabad",
    description: "A luxury 5-star hotel in the heart of Islamabad, offering world-class amenities and comfort.",
    location: "Islamabad, Pakistan",
    images: [serena1, serena2, serena3],
    rooms: [
      { type: "Standard Room", price: 50000 },
      { type: "Deluxe Room", price: 70000 },
      { type: "Presidential Suite", price: 120000 },
    ],
    amenities: ["WiFi", "Pool", "Gym", "Parking", "Restaurant", "Spa"],
    reviews: [
      { user: "Ayesha Khan", rating: 5, comment: "Amazing experience! The rooms were clean and luxurious." },
      { user: "Ali Raza", rating: 4.5, comment: "Great service and food, but a bit pricey." },
      { user: "Fatima Noor", rating: 4, comment: "Good stay, but the WiFi was slow." },
    ],
  },
  {
    id: "2",
    name: "Pearl Continental Lahore",
    description: "Experience luxury and comfort in the heart of Lahore at Pearl Continental Hotel.",
    location: "Lahore, Pakistan",
    images: [pc1, pc2, pc3],
    rooms: [
      { type: "Standard Room", price: 45000 },
      { type: "Executive Suite", price: 85000 },
      { type: "Royal Suite", price: 150000 },
    ],
    amenities: ["WiFi", "Pool", "Gym", "Parking", "Restaurant", "Conference Hall"],
    reviews: [
      { user: "Hassan Ahmed", rating: 4.8, comment: "Loved the ambiance and food quality!" },
      { user: "Sana Malik", rating: 4.5, comment: "Good hospitality but room service was slow." },
    ],
  },
  {
    id: "3",
    name: "Avari Hotel Lahore",
    description: "Avari Lahore offers top-class hospitality with spacious rooms and luxurious facilities.",
    location: "Lahore, Pakistan",
    images: [avari1, avari2, avari3],
    rooms: [
      { type: "Standard Room", price: 50000 },
      { type: "Executive Suite", price: 75000 },
      { type: "Presidential Suite", price: 140000 },
    ],
    amenities: ["WiFi", "Breakfast", "Pool", "Parking", "Restaurant"],
    reviews: [
      { user: "Kamran Shah", rating: 4.7, comment: "Best hotel in Lahore with great food!" },
      { user: "Sarah Javed", rating: 4.3, comment: "Rooms were comfortable, but service can improve." },
    ],
  },
  {
    id: "4",
    name: "Shangrila Resort Skardu",
    description: "A beautiful resort in the mountains of Skardu, offering breathtaking views and top-notch services.",
    location: "Skardu, Pakistan",
    images: [shangrila1, shangrila2, shangrila3],
    rooms: [
      { type: "Deluxe Cottage", price: 85000 },
      { type: "Mountain View Suite", price: 100000 },
      { type: "Royal Cottage", price: 130000 },
    ],
    amenities: ["WiFi", "Pool", "Parking", "Restaurant", "Tour Guide"],
    reviews: [
      { user: "Usman Tariq", rating: 5, comment: "Best resort with amazing views!" },
      { user: "Zara Khan", rating: 4.8, comment: "Loved the experience, but it's a bit far from the airport." },
    ],
  },
  {
    id: "5",
    name: "Eagle Nest Hotel Hunza",
    description: "A scenic hotel in the heart of Hunza, perfect for nature lovers and adventurers.",
    location: "Hunza, Pakistan",
    images: [eagle1, eagle2, eagle3],
    rooms: [
      { type: "Standard Room", price: 45000 },
      { type: "Mountain View Room", price: 60000 },
      { type: "Luxury Suite", price: 90000 },
    ],
    amenities: ["WiFi", "Parking", "Restaurant", "Hiking Trails"],
    reviews: [
      { user: "Ahmad Bukhari", rating: 4.5, comment: "Great hospitality and stunning views!" },
      { user: "Maria Sheikh", rating: 4.2, comment: "Perfect for a relaxing getaway." },
    ],
  },
  {
    id: "6",
    name: "Marriott Hotel Islamabad",
    description: "Marriott Islamabad is known for its luxury accommodations and exceptional service.",
    location: "Islamabad, Pakistan",
    images: [marriott1, marriott2, marriott3],
    rooms: [
      { type: "Standard Room", price: 75000 },
      { type: "Executive Suite", price: 95000 },
      { type: "Presidential Suite", price: 160000 },
    ],
    amenities: ["WiFi", "Gym", "Breakfast", "Spa", "Conference Hall"],
    reviews: [
      { user: "Bilal Ashraf", rating: 4.9, comment: "Perfect for business and leisure stays!" },
      { user: "Neha Asad", rating: 4.6, comment: "Loved the breakfast buffet and spacious rooms." },
    ],
  },
];




const HotelDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = hotels.find((h) => h.id === id);
  const [selectedRoom, setSelectedRoom] = useState(hotel ? hotel.rooms[0].type : "");

  if (!hotel) {
    return <div className="text-white text-center mt-10">Hotel not found!</div>;
  }

  const handleBooking = () => {
    navigate(`/booking/${hotel.id}`, {
      state: {
        hotelName: hotel.name,
        roomPrices: hotel.rooms,
      },
    });
  };

  return (
    <div className="p-4 sm:p-6 bg-black text-white min-h-screen flex justify-center">
      <div className="max-w-[90%] md:max-w-4xl w-full">
        {/* Hotel Card */}
        <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-400">{hotel.name}</h1>
          <p className="text-gray-400">{hotel.location}</p>

          {/* Hotel Images in a Grid */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {hotel.images.map((img, index) => (
              <div key={index} className="bg-gray-800 p-2 rounded-md">
                <img src={img} alt={`Hotel view ${index + 1}`} className="w-full h-40 object-cover rounded-md" />
              </div>
            ))}
          </div>

          <p className="mt-4 text-gray-300">{hotel.description}</p>
        </div>

        {/* Room Types & Prices */}
        <div className="mt-6 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-purple-400">Room Types</h2>
          <select
            className="mt-2 p-2 rounded-md text-black w-full"
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
          >
            {hotel.rooms.map((room, index) => (
              <option key={index} value={room.type}>
                {room.type} - {room.price.toLocaleString()} PKR/night
              </option>
            ))}
          </select>
        </div>

        {/* Amenities Section */}
        <div className="mt-6 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-purple-400">Available Amenities</h2>
          <div className="flex flex-wrap gap-3 mt-2">
            {hotel.amenities.map((amenity, index) => (
              <span key={index} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-6 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-purple-400">User Reviews & Ratings</h2>
          <div className="mt-2 space-y-3">
            {hotel.reviews.map((review, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold">{review.user}</h3>
                <p className="text-yellow-400">⭐ {review.rating}/5</p>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Book Now Button */}
        <div className="mt-6 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg text-center">
          <button
            onClick={handleBooking}
            className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-lg font-semibold transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
