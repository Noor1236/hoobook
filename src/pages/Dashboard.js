import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch booking details from localStorage
    const savedBooking = localStorage.getItem("bookingDetails");
    console.log("Saved Booking Data:", savedBooking); // Debugging purpose
  
    if (savedBooking) {
      setBookingDetails(JSON.parse(savedBooking));
    }
    // Fetch profile from localStorage
    const savedProfile = localStorage.getItem("profile");
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch (error) {
        console.error("Error parsing profile data:", error);
      }
    }
  }, []);

  // Handle Profile Editing
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile((prevProfile) => ({
        ...prevProfile,
        avatar: imageUrl,
      }));
    }
  };

  const handleSaveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setIsEditingProfile(false);
  };

  // Handle Booking Modification
  const handleModifyBooking = () => {
    navigate("/modify-booking");
  };

  // Handle Booking Cancellation
  const handleCancelBooking = () => {
    localStorage.removeItem("bookingDetails");
    setBookingDetails(null);
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Your Dashboard</h2>

      {/* Booking Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Booking Details</h3>

        {bookingDetails ? (
          <div className="p-4 bg-purple-100 rounded-lg mb-6">
            <div className="p-4 bg-purple-100 rounded-lg mb-6">
    <p><strong>Hotel Name:</strong> {bookingDetails.hotelName}</p>
    <p><strong>Name:</strong> {bookingDetails?.guest?.name}</p>
    <p><strong>Email:</strong> {bookingDetails?.guest?.email}</p>
    <p><strong>Phone:</strong> {bookingDetails?.guest?.phone}</p>
    <p><strong>Room:</strong> {bookingDetails.selectedRoom}</p>
    <p><strong>Nights:</strong> {bookingDetails.nights}</p>
    <p className="font-bold text-purple-700">Total Price: Rs. {bookingDetails.totalPrice}</p>
  </div>
            {/* Booking Modification / Cancellation */}
            <div className="mt-4 flex gap-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={handleModifyBooking}
              >
                Modify Booking
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleCancelBooking}
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No booking found. Please make a booking.</p>
        )}
      </div>

      {/* Profile Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-purple-700 mb-4">Profile Settings</h3>
        
        {isEditingProfile ? (
          <div className="p-4 bg-purple-100 rounded-lg">
            <div className="mb-4">
              <label className="block text-purple-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full p-2 border border-purple-400 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-purple-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full p-2 border border-purple-400 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-purple-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleProfileChange}
                className="w-full p-2 border border-purple-400 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-purple-700 mb-2">Avatar</label>
              <input
                type="file"
                name="avatar"
                onChange={handleAvatarChange}
                className="w-full p-2 border border-purple-400 rounded-md"
              />
            </div>

            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
              onClick={handleSaveProfile}
            >
              Save Profile
            </button>
          </div>
        ) : (
          <div className="p-4 bg-purple-100 rounded-lg">
            <p><strong>Name:</strong> {profile.name || "N/A"}</p>
            <p><strong>Email:</strong> {profile.email || "N/A"}</p>
            {profile.avatar && (
              <div className="mt-2">
                <img
                  src={profile.avatar}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                />
              </div>
            )}
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => setIsEditingProfile(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
