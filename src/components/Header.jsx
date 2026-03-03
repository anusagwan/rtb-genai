const Header = () => (
  <div className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-xl font-semibold">Dashboard</h1>

    <div className="flex items-center gap-4">
      <input placeholder="Search..." className="border px-3 py-1 rounded-lg" />
      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
    </div>
  </div>
);

export default Header;