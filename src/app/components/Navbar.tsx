import { CiSearch } from "react-icons/ci";

// Navbar component
const Navbar: React.FC = () => {
  return (
    <nav
      className="flex justify-between items-center p-4 bg-gray-800 text-white"
      style={{ backgroundColor: "#212731" }}
    >
      {/* Parent div for searchbar and navlinks */}
      <div className="flex justify-center items-center w-full space-x-20">
        {/* Search bar */}
        <div
          className="searchbar flex items-center px-2 bg-white"
          style={{ borderRadius: 8 }}
        >
          <div className="bg-cover bg-center p-1 rounded-full">
            <CiSearch size={24} color="grey" />
          </div>
          <input
            type="text"
            className="px-3 py-1 mr-4 bg-white text-gray-800 outline-none focus:border-transparent"
          />
        </div>

        {/* Navigation links */}
        <div className="navlinks flex space-x-20" style={{ color: "#212731" }}>
          <a href="#" className="text-white hover:underline">
            Categories
          </a>
          <a href="#" className="text-white hover:underline">
            Website Builders
          </a>
          <a href="#" className="text-white hover:underline">
            Todays Deals
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
