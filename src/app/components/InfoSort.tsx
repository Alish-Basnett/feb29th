import { GoCheckCircle } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

// InfoSort component
const InfoSort: React.FC = () => {
  // Get current date dynamically
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Define a variable for the text color
  const iconColor = "text-gray-600";

  return (
    <nav className="flex justify-between items-center p-4 border-t border-b border-gray-200">
      {/* Information Display */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <GoCheckCircle size={20} className={iconColor} />
          <span className={`text-xs leading-tight ${iconColor}`}>
            Last Updated -
          </span>
        </div>
        <span className={`text-xs leading-tight ${iconColor}`}>
          {currentDate}
        </span>
        <div className="flex items-center space-x-2">
          <IoInformationCircleOutline size={20} className={iconColor} />
          <span className={`text-xs leading-tight ${iconColor}`}>
            Advertising Disclosure
          </span>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className={`flex items-center space-x-2 ${iconColor}`}>
        <span className="text-xs leading-tight">Top Relevant</span>
        <FaAngleDown size={20} className={iconColor} />
      </div>
    </nav>
  );
};

export default InfoSort;
