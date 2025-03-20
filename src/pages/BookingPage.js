import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHotel, FaEnvelope, FaPhone, FaBed, FaCalendarAlt } from "react-icons/fa";

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotelName, roomPrices } = location.state || {};

  const roomTypes = roomPrices ? Object.keys(roomPrices) : [];
  const defaultRoom = roomTypes[0] || "";

  const [guest, setGuest] = useState({ name: "", email: "", phone: "" });
  const [selectedRoom, setSelectedRoom] = useState(defaultRoom);
  const [price, setPrice] = useState(roomPrices?.[defaultRoom]?.price || 0);
  const [nights, setNights] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (selectedRoom && roomPrices[selectedRoom]) {
      setPrice(roomPrices[selectedRoom].price);
    }
  }, [selectedRoom, roomPrices]);

  useEffect(() => {
    setIsFormValid(guest.name.trim() && guest.email.trim() && guest.phone.trim());
  }, [guest]);

  const handleConfirmBooking = () => {
    if (!isFormValid) return;
    const bookingDetails = {
      hotelName,
      guest,
      selectedRoom,
      nights,
      totalPrice: price * nights
    };
  
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
  
    alert(`Booking Confirmed for ${hotelName}! Check your email for details.`);
    navigate("/dashboard");
  };
  
  if (!hotelName || !roomPrices) {
    return <div className="text-white text-center mt-10">Invalid Booking Details</div>;
  }

  return (
    <div className="max-w-lg w-full mx-auto bg-white p-6 md:p-8 rounded-xl shadow-lg mt-10 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700 flex items-center justify-center gap-2">
        Book Your Stay at {hotelName}
      </h2>

      {/* Guest Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-semibold mb-1 text-purple-700">Full Name</label>
          <div className="flex items-center border border-purple-400 rounded-lg p-2">
            <FaHotel className="text-purple-500 mr-2" />
            <input
              type="text"
              className="w-full outline-none"
              value={guest.name}
              onChange={(e) => setGuest({ ...guest, name: e.target.value })}
              placeholder="Enter your name"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1 text-purple-700">Email</label>
          <div className="flex items-center border border-purple-400 rounded-lg p-2">
            <FaEnvelope className="text-purple-500 mr-2" />
            <input
              type="email"
              className="w-full outline-none"
              value={guest.email}
              onChange={(e) => setGuest({ ...guest, email: e.target.value })}
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="block font-semibold mb-1 text-purple-700">Phone</label>
        <div className="flex items-center border border-purple-400 rounded-lg p-2">
          <FaPhone className="text-purple-500 mr-2" />
          <input
            type="tel"
            className="w-full outline-none"
            value={guest.phone}
            onChange={(e) => setGuest({ ...guest, phone: e.target.value })}
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Room Selection */}
      <div className="mt-4">
        <label className="block font-semibold mb-1 text-purple-700">Room Type</label>
        <div className="flex items-center border border-purple-400 rounded-lg p-2">
          <FaBed className="text-purple-500 mr-2" />
          <select
            className="w-full outline-none bg-transparent text-black-700"
            value={selectedRoom}
            onChange={(e) => {
              const selectedKey = e.target.value;
              setSelectedRoom(selectedKey);
              setPrice(roomPrices[selectedKey]?.price || 0);
            }}
          >
            <option value="">Select Room</option>
            {Object.entries(roomPrices).map(([key, room]) => (
              <option key={key} value={key}>
                {room.type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Number of Nights */}
      <div className="mt-4">
        <label className="block font-semibold mb-1 text-purple-700">Number of Nights</label>
        <div className="flex items-center border border-purple-400 rounded-lg p-2">
          <FaCalendarAlt className="text-purple-500 mr-2" />
          <input
            type="number"
            className="w-full outline-none bg-transparent text-black-700"
            value={nights}
            min="1"
            onChange={(e) => setNights(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Booking Summary */}
      <div className="p-4 bg-purple-100 rounded-lg mb-6 mt-6">
        <h3 className="text-lg font-semibold text-purple-700">Booking Summary</h3>
        <p><strong>Name:</strong> {guest.name || "N/A"}</p>
        <p><strong>Email:</strong> {guest.email || "N/A"}</p>
        <p><strong>Phone:</strong> {guest.phone || "N/A"}</p>
        <p><strong>Room:</strong> {roomPrices[selectedRoom]?.type || "N/A"}</p>
        <p><strong>Room Price per Night:</strong> Rs. {price}</p>
        <p><strong>Nights:</strong> {nights}</p>
        <p className="font-bold text-purple-700">Total Price: Rs. {price * nights}</p>
      </div>

      {/* Confirm Booking Button */}
      <button
        className={`w-full py-3 rounded-lg font-semibold transition-all shadow-md ${isFormValid
          ? "bg-purple-600 text-white hover:bg-purple-700"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={handleConfirmBooking}
      >
        Confirm Booking
      </button>
    </div>
  );
}

export default BookingPage;
