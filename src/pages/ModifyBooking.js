import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ModifyBooking() {
  const [modifiedBooking, setModifiedBooking] = useState({
    name: "",
    email: "",
    phone: "",
    room: "",
    price: 0,
    nights: 1,
    totalPrice: 0,
  });

  const [formValid, setFormValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBooking = localStorage.getItem("bookingDetails");
    if (savedBooking) {
      const booking = JSON.parse(savedBooking);
      setModifiedBooking(booking);
    }
  }, []);

  useEffect(() => {
    // Validate the form (e.g., ensure name, email, phone, and room are not empty)
    const isValid =
      modifiedBooking.name &&
      modifiedBooking.email &&
      modifiedBooking.phone &&
      modifiedBooking.room;
    setFormValid(isValid);
  }, [modifiedBooking]);

  // Update total price when price or nights change
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setModifiedBooking((prevBooking) => {
      const newBooking = {
        ...prevBooking,
        [name]: value,
      };

      // Update total price
      if (name === "price" || name === "nights") {
        newBooking.totalPrice = newBooking.price * newBooking.nights;
      }

      return newBooking;
    });
  };

  // Save modified booking details
  const handleSaveModifiedBooking = () => {
    if (formValid) {
      localStorage.setItem("bookingDetails", JSON.stringify(modifiedBooking));
      navigate("/dashboard");
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Modify Booking</h2>

      <div className="mb-4">
        <label className="block text-purple-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={modifiedBooking.name}
          onChange={handleBookingChange}
          className="w-full p-2 border border-purple-400 rounded-md"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={modifiedBooking.email}
          onChange={handleBookingChange}
          className="w-full p-2 border border-purple-400 rounded-md"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-700 mb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={modifiedBooking.phone}
          onChange={handleBookingChange}
          className="w-full p-2 border border-purple-400 rounded-md"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-700 mb-2">Room</label>
        <input
          type="text"
          name="room"
          value={modifiedBooking.room}
          onChange={handleBookingChange}
          className="w-full p-2 border border-purple-400 rounded-md"
          placeholder="Enter room type"
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-700 mb-2">Room Price per Night</label>
        <input
          type="number"
          name="price"
          value={modifiedBooking.price}
          onChange={handleBookingChange}
          className="w-full p-2 border border-purple-400 rounded-md"
          placeholder="Enter price per night"
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-700 mb-2">Nights</label>
        <input
          type="number"
          name="nights"
          value={modifiedBooking.nights}
          onChange={handleBookingChange}
          className="w-full p-2 border border-purple-400 rounded-md"
          min="1"
          placeholder="Enter number of nights"
        />
      </div>

      <div className="mb-4">
        <p className="font-bold text-purple-700">
          Total Price: Rs. {modifiedBooking.totalPrice}
        </p>
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <button
          className={`${
            formValid ? "bg-purple-500" : "bg-gray-500"
          } text-white px-4 py-2 rounded-md hover:bg-purple-600`}
          onClick={handleSaveModifiedBooking}
          disabled={!formValid}
        >
          Save Changes
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          onClick={() => navigate("/dashboard")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ModifyBooking;
