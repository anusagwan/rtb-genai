import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-900 text-white p-5">
    <h2 className="text-2xl font-bold mb-6">Admin</h2>
    <ul className="space-y-4">
      <li>
        <Link to="/" className="hover:text-blue-400">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/users" className="hover:text-blue-400">
          Users
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;