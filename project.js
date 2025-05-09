import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <Router>
          <nav className="flex justify-between p-4 bg-gray-100 dark:bg-gray-800">
            <div className="space-x-4">
              <Link to="/">Dashboard</Link>
              <Link to="/add-property">Add Property</Link>
              <Link to="/booking-requests">Booking Requests</Link>
              <Link to="/feedback">Feedback</Link>
            </div>
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </nav>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/booking-requests" element={<BookingRequests />} />
            <Route path="/feedback" element={<FeedbackOverview />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { title: "Total Properties", value: 12 },
        { title: "Active Bookings", value: 30 },
        { title: "Pending Requests", value: 4 },
        { title: "Avg. Rating", value: "4.3" },
      ].map((card) => (
        <div className="p-4 bg-white dark:bg-gray-700 rounded-xl shadow">
          <h2 className="text-lg font-semibold">{card.title}</h2>
          <p className="text-2xl mt-2">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

function AddProperty() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Property</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Property Name" />
        <input className="w-full p-2 border rounded" placeholder="Location" />
        <input className="w-full p-2 border rounded" placeholder="Rent (₹)" />
        <textarea className="w-full p-2 border rounded" placeholder="Amenities"></textarea>
        <input type="file" multiple className="w-full" />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Submit</button>
      </form>
    </div>
  );
}

function BookingRequests() {
  const requests = [
    { name: "John Doe", property: "Elite PG", duration: "3 months" },
    { name: "Jane Smith", property: "Sunrise Stay", duration: "6 months" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Booking Requests</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2">Name</th>
            <th className="p-2">Property</th>
            <th className="p-2">Duration</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, idx) => (
            <tr key={idx} className="border-b dark:border-gray-600">
              <td className="p-2">{req.name}</td>
              <td className="p-2">{req.property}</td>
              <td className="p-2">{req.duration}</td>
              <td className="p-2 space-x-2">
                <button className="px-2 py-1 bg-green-600 text-white rounded">Approve</button>
                <button className="px-2 py-1 bg-red-600 text-white rounded">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FeedbackOverview() {
  const feedback = [
    { tenant: "Alice", property: "Elite PG", rating: 4, comment: "Nice stay" },
    { tenant: "Bob", property: "Sunrise Stay", rating: 5, comment: "Excellent food" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Feedback Overview</h2>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="p-2">Tenant</th>
            <th className="p-2">Property</th>
            <th className="p-2">Rating</th>
            <th className="p-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((f, idx) => (
            <tr key={idx} className="border-b dark:border-gray-600">
              <td className="p-2">{f.tenant}</td>
              <td className="p-2">{f.property}</td>
              <td className="p-2">{f.rating}</td>
              <td className="p-2">{f.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
