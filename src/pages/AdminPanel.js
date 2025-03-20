import { useState } from 'react';

// Dummy Data (replace with API calls to get data)
const hotels = [
  { id: 1, name: 'Serena Hotel', rooms: ['Room 101', 'Room 102'] },
  { id: 2, name: 'Pearl Continental', rooms: ['Room 201', 'Room 202'] }
];

const bookings = [
  { id: 1, hotelName: 'Serena Hotel', roomType: 'Room 101', guestName: 'John Doe', date: '2025-03-18' },
  { id: 2, hotelName: 'Pearl Continental', roomType: 'Room 202', guestName: 'Jane Smith', date: '2025-03-19' }
];

function AdminPanel() {
  const [hotelsData, setHotelsData] = useState(hotels);
  const [bookingsData, setBookingsData] = useState(bookings);

  const [newHotelName, setNewHotelName] = useState('');
  const [newRoom, setNewRoom] = useState('');
  const [selectedHotel, setSelectedHotel] = useState('');
  const [newBooking, setNewBooking] = useState({ guestName: '', hotelName: '', roomType: '', date: '' });

  const [editingHotel, setEditingHotel] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);

  // Add Hotel
  const addHotel = () => {
    if (newHotelName && newRoom) {
      const newHotel = {
        id: hotelsData.length + 1,
        name: newHotelName,
        rooms: [newRoom]
      };
      setHotelsData([...hotelsData, newHotel]);
      setNewHotelName('');
      setNewRoom('');
    }
  };

  // Add Room
  const addRoom = () => {
    const updatedHotels = hotelsData.map(hotel => {
      if (hotel.id === selectedHotel) {
        hotel.rooms.push(newRoom);
      }
      return hotel;
    });
    setHotelsData(updatedHotels);
    setNewRoom('');
  };

  // Delete Hotel
  const deleteHotel = (id) => {
    const updatedHotels = hotelsData.filter(hotel => hotel.id !== id);
    setHotelsData(updatedHotels);
  };

  // Delete Booking
  const deleteBooking = (id) => {
    const updatedBookings = bookingsData.filter(booking => booking.id !== id);
    setBookingsData(updatedBookings);
  };

  // Add Booking
  const addBooking = () => {
    if (newBooking.guestName && newBooking.hotelName && newBooking.roomType && newBooking.date) {
      const newBookingId = bookingsData.length + 1;
      const newBookingEntry = { id: newBookingId, ...newBooking };
      setBookingsData([...bookingsData, newBookingEntry]);
      setNewBooking({ guestName: '', hotelName: '', roomType: '', date: '' });
    }
  };

  // Edit Hotel
  const editHotel = (hotel) => {
    setEditingHotel(hotel);
    setNewHotelName(hotel.name);
    setNewRoom(hotel.rooms[0]); // Assuming only one room is editable in the UI
  };

  const saveEditedHotel = () => {
    const updatedHotels = hotelsData.map(hotel => {
      if (hotel.id === editingHotel.id) {
        hotel.name = newHotelName;
        hotel.rooms = [newRoom];
      }
      return hotel;
    });
    setHotelsData(updatedHotels);
    setEditingHotel(null);
    setNewHotelName('');
    setNewRoom('');
  };

  // Edit Booking
  const editBooking = (booking) => {
    setEditingBooking(booking);
    setNewBooking({
      guestName: booking.guestName,
      hotelName: booking.hotelName,
      roomType: booking.roomType,
      date: booking.date
    });
  };

  const saveEditedBooking = () => {
    const updatedBookings = bookingsData.map(booking => {
      if (booking.id === editingBooking.id) {
        booking.guestName = newBooking.guestName;
        booking.hotelName = newBooking.hotelName;
        booking.roomType = newBooking.roomType;
        booking.date = newBooking.date;
      }
      return booking;
    });
    setBookingsData(updatedBookings);
    setEditingBooking(null);
    setNewBooking({ guestName: '', hotelName: '', roomType: '', date: '' });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Admin Panel</h1>

      {/* View Bookings Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bookings</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <ul>
            {bookingsData.map(booking => (
              <li key={booking.id} className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
                <span className="text-gray-700">{booking.guestName} - {booking.hotelName} - {booking.roomType} - {booking.date}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => editBooking(booking)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBooking(booking.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Add Booking Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Booking</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap mb-4 gap-4">
            <input
              type="text"
              value={newBooking.guestName}
              onChange={(e) => setNewBooking({ ...newBooking, guestName: e.target.value })}
              placeholder="Guest Name"
              className="p-3 border border-gray-300 rounded-md w-full sm:w-1/3"
            />
            <select
              value={newBooking.hotelName}
              onChange={(e) => setNewBooking({ ...newBooking, hotelName: e.target.value })}
              className="p-3 border border-gray-300 rounded-md w-full sm:w-1/3"
            >
              <option value="">Select Hotel</option>
              {hotelsData.map(hotel => (
                <option key={hotel.id} value={hotel.name}>
                  {hotel.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={newBooking.roomType}
              onChange={(e) => setNewBooking({ ...newBooking, roomType: e.target.value })}
              placeholder="Room Type"
              className="p-3 border border-gray-300 rounded-md w-full sm:w-1/3"
            />
            <input
              type="date"
              value={newBooking.date}
              onChange={(e) => setNewBooking({ ...newBooking, date: e.target.value })}
              className="p-3 border border-gray-300 rounded-md w-full sm:w-1/3"
            />
            <button
              onClick={addBooking}
              className="bg-blue-500 text-white px-6 py-3 rounded-md ml-4 hover:bg-blue-600"
            >
              Add Booking
            </button>
          </div>
        </div>
      </div>

      {/* Add Hotel Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Hotel</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap mb-4 gap-4">
            <input
              type="text"
              value={newHotelName}
              onChange={(e) => setNewHotelName(e.target.value)}
              placeholder="Hotel Name"
              className="p-3 border border-gray-300 rounded-md w-full sm:w-1/2"
            />
            <input
              type="text"
              value={newRoom}
              onChange={(e) => setNewRoom(e.target.value)}
              placeholder="Room Name"
              className="p-3 border border-gray-300 rounded-md w-full sm:w-1/2"
            />
            <button
              onClick={addHotel}
              className="bg-blue-500 text-white px-6 py-3 rounded-md ml-4 hover:bg-blue-600"
            >
              Add Hotel
            </button>
          </div>
        </div>
      </div>



      {/* Delete Hotel Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delete Hotel</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <ul>
            {hotelsData.map(hotel => (
              <li key={hotel.id} className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
                <span className="text-gray-700">{hotel.name}</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => editHotel(hotel)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteHotel(hotel.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}

            {/* Edit Hotel Section */}
            {editingHotel && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Edit Hotel</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex flex-wrap mb-4 gap-4">
                    <input
                      type="text"
                      value={newHotelName}
                      onChange={(e) => setNewHotelName(e.target.value)}
                      placeholder="Hotel Name"
                      className="p-3 border border-gray-300 rounded-md w-full sm:w-1/2"
                    />
                    <input
                      type="text"
                      value={newRoom}
                      onChange={(e) => setNewRoom(e.target.value)}
                      placeholder="Room Name"
                      className="p-3 border border-gray-300 rounded-md w-full sm:w-1/2"
                    />
                    <button
                      onClick={saveEditedHotel}
                      className="bg-green-500 text-white px-6 py-3 rounded-md ml-4 hover:bg-green-600"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
