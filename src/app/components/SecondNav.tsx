// SecondNav component
const SecondNav: React.FC = () => {
  // Array of links
  const links = [
    "AWS Builder",
    "Start Build",
    "Build Supplies",
    "Tooling",
    "BlueHosting",
  ];

  return (
    <nav className="flex items-center p-4 bg-gray-100">
      {links.map((link, index) => (
        <div
          key={index}
          className="bg-white text-center"
          style={{ borderRadius: 12, marginRight: "50px" }} // Adjust margin here
        >
          <a
            href="#"
            className="block text-xs leading-tight py-2 px-8 text-gray-600"
          >
            {link}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default SecondNav;
