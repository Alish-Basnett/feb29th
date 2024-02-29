import React from "react";
import { GoCheckCircle } from "react-icons/go";

// Path component
const Path: React.FC = () => {
  // Example page names
  const pages = ["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"];

  // Function to render the path
  const renderPath = () => {
    return pages.map((page, index) => (
      <React.Fragment key={page}>
        <a href="#" className="text-xs leading-tight">
          {page}
        </a>
        {index !== pages.length - 1 && <span className="mx-1">&gt;</span>}
      </React.Fragment>
    ));
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center space-x-4 text-gray-600">
        {renderPath()}
      </div>
    </nav>
  );
};

export default Path;
