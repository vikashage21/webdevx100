export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed left-0 top-0">
      
      {/* Logo / Title */}
      <div className="p-5 text-xl font-bold border-b border-gray-700">
        My App
      </div>

      {/* Menu */}
      <ul className="p-4 space-y-2">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Dashboard
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Stock Entry
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Inventory
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Sales
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Reports
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Settings
        </li>
      </ul>

    </div>
  );
}