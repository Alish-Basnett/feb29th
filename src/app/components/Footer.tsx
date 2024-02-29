import { FaAngleDown } from "react-icons/fa";

// Footer component
const Footer: React.FC = () => {
  // Array of list items
  // First array for the first section
  const listItems1 = [
    "Web Builder",
    "Hosting",
    "Data Center",
    "Robotic Automation",
  ];

  // Second array for the second section
  const listItems2 = [
    "Contact",
    "Privacy Policy",
    "Terms of Service",
    "Categories",
    "About",
  ];

  return (
    <footer
      className="grid grid-cols-3 gap-4 p-4 bg-gray-800 text-white"
      style={{
        paddingLeft: 320,
        paddingRight: 320,
        paddingTop: 50,
        paddingBottom: 150,
      }}
    >
      {/* First div */}
      <div>
        <h2 className="text-lg pb-5">Categories</h2>
        <ul>
          {listItems1.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Second div */}
      <div>
        <h2 className="text-lg pb-5">Contact</h2>
        <ul>
          {listItems2.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Third div */}
      <div className="flex items-center">
        <span className="mr-2">United States</span>
        <FaAngleDown />
      </div>
    </footer>
  );
};

export default Footer;
